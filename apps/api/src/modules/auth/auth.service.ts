import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { db } from '../../database';
import { users } from '../../database/schema';
import { RegisterDto, LoginDto, ForgotPasswordDto, ResetPasswordDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName, phone } = registerDto;

    if (!firstName || firstName.trim().length === 0) {
      throw new BadRequestException('First name is required');
    }
    if (!lastName || lastName.trim().length === 0) {
      throw new BadRequestException('Last name is required');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new BadRequestException('Invalid email format');
    }
    if (password.length < 8) {
      throw new BadRequestException('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      throw new BadRequestException('Password must contain at least one uppercase letter');
    }
    if (!/[0-9]/.test(password)) {
      throw new BadRequestException('Password must contain at least one number');
    }

    // Check if user exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 14);

    // Create user
    await db
      .insert(users)
      .values({
        id: crypto.randomUUID(),
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        role: 'BUYER',
      });

    // Fetch the created user
    const newUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    // Generate tokens
    const tokens = await this.generateTokens(newUser!.id, newUser!.email, newUser!.role);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser!;

    return {
      user: userWithoutPassword,
      ...tokens,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if user is active
    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    // Update last login
    await db
      .update(users)
      .set({ lastLoginAt: new Date() })
      .where(eq(users.id, user.id));

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      ...tokens,
    };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;

    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      // Don't reveal if user exists
      return { message: 'If the email exists, a reset link has been sent' };
    }

    // Generate reset token
    const resetToken = this.jwtService.sign(
      { userId: user.id },
      { expiresIn: '1h' },
    );

    // Store reset token
    await db
      .update(users)
      .set({
        passwordResetToken: resetToken,
        passwordResetExpires: new Date(Date.now() + 3600000), // 1 hour
      })
      .where(eq(users.id, user.id));

    // TODO: Send email with reset link

    return { message: 'If the email exists, a reset link has been sent' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { token, password } = resetPasswordDto;

    try {
      // Verify token
      const payload = this.jwtService.verify(token);
      
      // Find user
      const user = await db.query.users.findFirst({
        where: eq(users.id, payload.userId),
      });

      if (!user || user.passwordResetToken !== token) {
        throw new BadRequestException('Invalid or expired reset token');
      }

      if (user.passwordResetExpires && user.passwordResetExpires < new Date()) {
        throw new BadRequestException('Reset token has expired');
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(password, 14);

      // Update password and clear reset token
      await db
        .update(users)
        .set({
          password: hashedPassword,
          passwordResetToken: null,
          passwordResetExpires: null,
        })
        .where(eq(users.id, user.id));

      return { message: 'Password has been reset successfully' };
    } catch {
      throw new BadRequestException('Invalid or expired reset token');
    }
  }

  async getProfile(userId: string) {
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, {
        expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRY', '30d'),
      }),
    ]);

    return {
      accessToken,
      refreshToken,
      expiresIn: 3600,
    };
  }
}
