import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ThrottlerGuard, Throttle } from '@nestjs/throttler';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators';
import { RolesGuard } from '../../common/guards/roles.guard';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('notifications')
@Controller('notifications')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get user notifications' })
  @ApiResponse({ status: 200, description: 'Return user notifications' })
  async getUserNotifications(
    @Request() req: { user: { id: string } },
    @Query() query: { unreadOnly?: string },
  ) {
    return this.notificationsService.getUserNotifications(
      req.user.id,
      query.unreadOnly === 'true',
    );
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Get unread count' })
  @ApiResponse({ status: 200, description: 'Return unread count' })
  async getUnreadCount(@Request() req: { user: { id: string } }) {
    return this.notificationsService.getUnreadCount(req.user.id);
  }

  @Put(':id/read')
  @ApiOperation({ summary: 'Mark notification as read' })
  @ApiResponse({ status: 200, description: 'Notification marked as read' })
  async markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }

  @Put('read-all')
  @ApiOperation({ summary: 'Mark all notifications as read' })
  @ApiResponse({ status: 200, description: 'All notifications marked as read' })
  async markAllAsRead(@Request() req: { user: { id: string } }) {
    return this.notificationsService.markAllAsRead(req.user.id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete notification' })
  @ApiResponse({ status: 204, description: 'Notification deleted' })
  async deleteNotification(@Param('id') id: string) {
    return this.notificationsService.deleteNotification(id);
  }

  @Post('email')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @UseGuards(RolesGuard, ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @ApiOperation({ summary: 'Send email' })
  @ApiResponse({ status: 201, description: 'Email sent' })
  async sendEmail(@Body() data: { to: string; subject: string; html: string; template?: string }) {
    return this.notificationsService.sendEmail(data.to, data.subject, data.html, data.template);
  }

  @Post('sms')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @UseGuards(RolesGuard, ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @ApiOperation({ summary: 'Send SMS' })
  @ApiResponse({ status: 201, description: 'SMS sent' })
  async sendSMS(@Body() data: { to: string; message: string }) {
    return this.notificationsService.sendSMS(data.to, data.message);
  }

  @Post('push')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @UseGuards(RolesGuard, ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @ApiOperation({ summary: 'Send push notification' })
  @ApiResponse({ status: 201, description: 'Push notification sent' })
  async sendPushNotification(@Body() data: { userId: string; title: string; body: string; data?: Record<string, unknown> }) {
    return this.notificationsService.sendPushNotification(data.userId, data.title, data.body, data.data);
  }
}
