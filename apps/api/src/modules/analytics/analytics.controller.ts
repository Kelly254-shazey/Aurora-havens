import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('analytics')
@Controller('analytics')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get dashboard stats' })
  @ApiResponse({ status: 200, description: 'Return dashboard stats' })
  async getDashboardStats() {
    return this.analyticsService.getDashboardStats();
  }

  @Get('revenue/monthly')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get monthly revenue' })
  @ApiQuery({ name: 'months', required: false })
  @ApiResponse({ status: 200, description: 'Return monthly revenue' })
  async getMonthlyRevenue(@Query('months') months?: number) {
    return this.analyticsService.getMonthlyRevenue(months);
  }

  @Get('donations/monthly')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiOperation({ summary: 'Get monthly donations' })
  @ApiQuery({ name: 'months', required: false })
  @ApiResponse({ status: 200, description: 'Return monthly donations' })
  async getMonthlyDonations(@Query('months') months?: number) {
    return this.analyticsService.getMonthlyDonations(months);
  }

  @Get('investments/monthly')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get monthly investments' })
  @ApiQuery({ name: 'months', required: false })
  @ApiResponse({ status: 200, description: 'Return monthly investments' })
  async getMonthlyInvestments(@Query('months') months?: number) {
    return this.analyticsService.getMonthlyInvestments(months);
  }

  @Get('properties/by-type')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get properties by type' })
  @ApiResponse({ status: 200, description: 'Return properties by type' })
  async getPropertyByType() {
    return this.analyticsService.getPropertyByType();
  }

  @Get('leads/by-source')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Get leads by source' })
  @ApiResponse({ status: 200, description: 'Return leads by source' })
  async getLeadBySource() {
    return this.analyticsService.getLeadBySource();
  }

  @Get('leads/by-status')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Get leads by status' })
  @ApiResponse({ status: 200, description: 'Return leads by status' })
  async getLeadByStatus() {
    return this.analyticsService.getLeadByStatus();
  }

  @Get('donations/by-category')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiOperation({ summary: 'Get donations by category' })
  @ApiResponse({ status: 200, description: 'Return donations by category' })
  async getDonationByCategory() {
    return this.analyticsService.getDonationByCategory();
  }

  @Get('activity/recent')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get recent activity' })
  @ApiQuery({ name: 'limit', required: false })
  @ApiResponse({ status: 200, description: 'Return recent activity' })
  async getRecentActivity(@Query('limit') limit?: number) {
    return this.analyticsService.getRecentActivity(limit);
  }

  @Get('conversion')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Get conversion rate' })
  @ApiResponse({ status: 200, description: 'Return conversion rate' })
  async getConversionRate() {
    return this.analyticsService.getConversionRate();
  }

  @Get('properties/stats')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get property stats' })
  @ApiResponse({ status: 200, description: 'Return property stats' })
  async getPropertyStats() {
    return this.analyticsService.getPropertyStats();
  }

  @Get('properties/top')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiOperation({ summary: 'Get top properties' })
  @ApiQuery({ name: 'limit', required: false })
  @ApiResponse({ status: 200, description: 'Return top properties' })
  async getTopProperties(@Query('limit') limit?: number) {
    return this.analyticsService.getTopProperties(limit);
  }
}
