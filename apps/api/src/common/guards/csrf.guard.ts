import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { randomBytes, timingSafeEqual } from 'crypto';

@Injectable()
export class CsrfGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const method = request.method.toUpperCase();

    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
      return true;
    }

    const headerToken = request.headers['x-csrf-token'] as string | undefined;
    const cookieToken = request.cookies?.['csrf-token'];

    if (!headerToken || !cookieToken) {
      throw new ForbiddenException('CSRF token missing');
    }

    const headerBuf = Buffer.from(headerToken);
    const cookieBuf = Buffer.from(cookieToken);

    if (headerBuf.length !== cookieBuf.length || !timingSafeEqual(headerBuf, cookieBuf)) {
      throw new ForbiddenException('CSRF token mismatch');
    }

    return true;
  }

  static generateToken(): string {
    return randomBytes(32).toString('hex');
  }

  static setTokenCookie(res: Response, token: string): void {
    res.cookie('csrf-token', token, {
      httpOnly: false,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
    });
  }
}
