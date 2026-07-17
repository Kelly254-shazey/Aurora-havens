import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';
import { PaginationDto } from '../../common/dto/pagination.dto';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users' })
  async findAll(
    @Query() paginationDto: PaginationDto & { search?: string; role?: string },
  ) {
    return this.usersService.findAll(paginationDto);
  }

  @Get('stats')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get user statistics' })
  @ApiResponse({ status: 200, description: 'Return user statistics' })
  async getStats() {
    return this.usersService.getStats();
  }

  @Get(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'Return user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Put(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async update(
    @Param('id') id: string,
    @Body() updateData: Record<string, unknown>,
  ) {
    return this.usersService.update(id, updateData as any);
  }

  @Delete(':id')
  @Roles(UserRole.SUPER_ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, description: 'User deleted' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
