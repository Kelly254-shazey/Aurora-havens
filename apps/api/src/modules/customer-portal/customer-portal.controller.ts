import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CustomerPortalGuard } from '../../common/guards/customer-portal.guard';
import { CustomerPortalService } from './customer-portal.service';

@ApiTags('customer-portal')
@Controller('portal')
@UseGuards(JwtAuthGuard, CustomerPortalGuard)
@ApiBearerAuth()
export class CustomerPortalController {
  constructor(private readonly portalService: CustomerPortalService) {}

  private getUserId(req: { user: { sub: string } }): string {
    return req.user.sub;
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Get customer dashboard' })
  async getDashboard(@Req() req: { user: { sub: string } }) {
    return this.portalService.getDashboard(this.getUserId(req));
  }

  @Get('roles')
  @ApiOperation({ summary: 'Get user roles' })
  async getUserRoles(@Req() req: { user: { sub: string } }) {
    return this.portalService.getUserRoles(this.getUserId(req));
  }

  @Post('roles')
  @ApiOperation({ summary: 'Assign role' })
  async assignRole(@Req() req: { user: { sub: string } }, @Body() body: { role: string; sourceEvent: string }) {
    return this.portalService.assignRole(this.getUserId(req), body.role, body.sourceEvent);
  }

  @Delete('roles/:role')
  @ApiOperation({ summary: 'Remove role' })
  async removeRole(@Req() req: { user: { sub: string } }, @Param('role') role: string) {
    return this.portalService.removeRole(this.getUserId(req), role);
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get profile' })
  async getProfile(@Req() req: { user: { sub: string } }) {
    return this.portalService.getProfile(this.getUserId(req));
  }

  @Put('profile')
  @ApiOperation({ summary: 'Update profile' })
  async updateProfile(@Req() req: { user: { sub: string } }, @Body() body: { firstName?: string; lastName?: string; phone?: string; avatar?: string }) {
    return this.portalService.updateProfile(this.getUserId(req), body);
  }

  @Get('saved-properties')
  @ApiOperation({ summary: 'Get saved properties' })
  async getSavedProperties(@Req() req: { user: { sub: string } }) {
    return this.portalService.getSavedProperties(this.getUserId(req));
  }

  @Post('saved-properties/:propertyId')
  @ApiOperation({ summary: 'Toggle save property' })
  async toggleSaveProperty(@Req() req: { user: { sub: string } }, @Param('propertyId') propertyId: string) {
    return this.portalService.toggleSaveProperty(this.getUserId(req), propertyId);
  }

  @Get('viewings')
  @ApiOperation({ summary: 'Get viewings' })
  async getViewings(@Req() req: { user: { sub: string } }) {
    return this.portalService.getViewings(this.getUserId(req));
  }

  @Post('viewings')
  @ApiOperation({ summary: 'Create viewing' })
  async createViewing(@Req() req: { user: { sub: string } }, @Body() body: { propertyId: string; scheduledAt: string; notes?: string }) {
    return this.portalService.createViewing(this.getUserId(req), body);
  }

  @Get('offers')
  @ApiOperation({ summary: 'Get offers' })
  async getOffers(@Req() req: { user: { sub: string } }) {
    return this.portalService.getOffers(this.getUserId(req));
  }

  @Post('offers')
  @ApiOperation({ summary: 'Create offer' })
  async createOffer(@Req() req: { user: { sub: string } }, @Body() body: { propertyId: string; amount: number; notes?: string }) {
    return this.portalService.createOffer(this.getUserId(req), body);
  }

  @Get('leases')
  @ApiOperation({ summary: 'Get leases' })
  async getLeases(@Req() req: { user: { sub: string } }) {
    return this.portalService.getLeases(this.getUserId(req));
  }

  @Get('maintenance')
  @ApiOperation({ summary: 'Get maintenance requests' })
  async getMaintenance(@Req() req: { user: { sub: string } }) {
    return this.portalService.getMaintenanceRequests(this.getUserId(req));
  }

  @Post('maintenance')
  @ApiOperation({ summary: 'Create maintenance request' })
  async createMaintenance(@Req() req: { user: { sub: string } }, @Body() body: { propertyId: string; title: string; description: string; priority: string }) {
    return this.portalService.createMaintenanceRequest(this.getUserId(req), body);
  }

  @Get('payments')
  @ApiOperation({ summary: 'Get payment history' })
  async getPayments(@Req() req: { user: { sub: string } }, @Query('page') page?: string, @Query('limit') limit?: string) {
    return this.portalService.getPayments(this.getUserId(req), page ? parseInt(page) : 1, limit ? parseInt(limit) : 20);
  }

  @Get('documents')
  @ApiOperation({ summary: 'Get documents' })
  async getDocuments(@Req() req: { user: { sub: string } }) {
    return this.portalService.getDocuments(this.getUserId(req));
  }

  @Post('documents')
  @ApiOperation({ summary: 'Upload document' })
  async uploadDocument(@Req() req: { user: { sub: string } }, @Body() body: { entityId: string; filename: string; url: string; mimeType: string; fileSize: number }) {
    return this.portalService.uploadDocument(this.getUserId(req), body);
  }

  @Get('notifications')
  @ApiOperation({ summary: 'Get notifications' })
  async getNotifications(@Req() req: { user: { sub: string } }, @Query('page') page?: string, @Query('limit') limit?: string) {
    return this.portalService.getNotifications(this.getUserId(req), page ? parseInt(page) : 1, limit ? parseInt(limit) : 20);
  }

  @Put('notifications/:id/read')
  @ApiOperation({ summary: 'Mark notification read' })
  async markNotificationRead(@Req() req: { user: { sub: string } }, @Param('id') id: string) {
    return this.portalService.markNotificationRead(this.getUserId(req), id);
  }

  @Put('notifications/read-all')
  @ApiOperation({ summary: 'Mark all notifications read' })
  async markAllNotificationsRead(@Req() req: { user: { sub: string } }) {
    return this.portalService.markAllNotificationsRead(this.getUserId(req));
  }

  @Get('conversations')
  @ApiOperation({ summary: 'Get conversations' })
  async getConversations(@Req() req: { user: { sub: string } }) {
    return this.portalService.getConversations(this.getUserId(req));
  }

  @Get('conversations/:id/messages')
  @ApiOperation({ summary: 'Get conversation messages' })
  async getMessages(@Req() req: { user: { sub: string } }, @Param('id') conversationId: string) {
    return this.portalService.getMessages(this.getUserId(req), conversationId);
  }

  @Post('conversations/:id/messages')
  @ApiOperation({ summary: 'Send message' })
  async sendMessage(@Req() req: { user: { sub: string } }, @Param('id') conversationId: string, @Body() body: { content: string }) {
    return this.portalService.sendMessage(this.getUserId(req), conversationId, body.content);
  }

  @Get('security/login-history')
  @ApiOperation({ summary: 'Get login history' })
  async getLoginHistory(@Req() req: { user: { sub: string } }) {
    return this.portalService.getLoginHistory(this.getUserId(req));
  }

  @Get('security/sessions')
  @ApiOperation({ summary: 'Get active sessions' })
  async getActiveSessions(@Req() req: { user: { sub: string } }) {
    return this.portalService.getActiveSessions(this.getUserId(req));
  }

  @Delete('security/sessions/:id')
  @ApiOperation({ summary: 'Revoke session' })
  async revokeSession(@Req() req: { user: { sub: string } }, @Param('id') sessionId: string) {
    return this.portalService.revokeSession(this.getUserId(req), sessionId);
  }
}
