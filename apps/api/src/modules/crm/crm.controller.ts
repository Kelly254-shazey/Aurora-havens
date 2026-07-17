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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CrmService } from './crm.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('crm')
@Controller('crm')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  // Leads
  @Get('leads')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT, UserRole.PROPERTY_MANAGER)
  @ApiOperation({ summary: 'Get all leads' })
  @ApiResponse({ status: 200, description: 'Return all leads' })
  async findAllLeads(@Query() query: {
    status?: string;
    source?: string;
    assignedToId?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    return this.crmService.findAllLeads(query);
  }

  @Get('leads/stats')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Get lead statistics' })
  @ApiResponse({ status: 200, description: 'Return lead statistics' })
  async getLeadStats() {
    return this.crmService.getLeadStats();
  }

  @Get('leads/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT, UserRole.PROPERTY_MANAGER)
  @ApiOperation({ summary: 'Get lead by ID' })
  @ApiResponse({ status: 200, description: 'Return lead' })
  @ApiResponse({ status: 404, description: 'Lead not found' })
  async findLeadById(@Param('id') id: string) {
    return this.crmService.findLeadById(id);
  }

  @Post('leads')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Create lead' })
  @ApiResponse({ status: 201, description: 'Lead created' })
  async createLead(@Body() data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    source: string;
    propertyId?: string;
    assignedToId?: string;
  }) {
    return this.crmService.createLead({ ...data, source: data.source as any });
  }

  @Put('leads/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Update lead' })
  @ApiResponse({ status: 200, description: 'Lead updated' })
  async updateLead(@Param('id') id: string, @Body() data: any) {
    return this.crmService.updateLead(id, data);
  }

  @Delete('leads/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete lead' })
  @ApiResponse({ status: 204, description: 'Lead deleted' })
  async removeLead(@Param('id') id: string) {
    return this.crmService.removeLead(id);
  }

  @Post('leads/:id/notes')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Add lead note' })
  @ApiResponse({ status: 201, description: 'Note added' })
  async addLeadNote(@Param('id') id: string, @Body() data: { content: string }, @Request() req: { user: { id: string } }) {
    return this.crmService.addLeadNote(id, { ...data, authorId: req.user.id });
  }

  @Post('leads/:id/activities')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.SALES_AGENT)
  @ApiOperation({ summary: 'Add lead activity' })
  @ApiResponse({ status: 201, description: 'Activity added' })
  async addLeadActivity(@Param('id') id: string, @Body() data: any, @Request() req: { user: { id: string } }) {
    return this.crmService.addLeadActivity(id, { ...data, authorId: req.user.id } as never);
  }

  // Support Tickets
  @Get('tickets')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CUSTOMER_SUPPORT)
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({ status: 200, description: 'Return all tickets' })
  async findAllTickets(@Query() query: {
    status?: string;
    priority?: string;
    category?: string;
    assignedToId?: string;
    page?: number;
    limit?: number;
  }) {
    return this.crmService.findAllTickets(query);
  }

  @Get('tickets/stats')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CUSTOMER_SUPPORT)
  @ApiOperation({ summary: 'Get ticket statistics' })
  @ApiResponse({ status: 200, description: 'Return ticket statistics' })
  async getTicketStats() {
    return this.crmService.getTicketStats();
  }

  @Get('tickets/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CUSTOMER_SUPPORT)
  @ApiOperation({ summary: 'Get ticket by ID' })
  @ApiResponse({ status: 200, description: 'Return ticket' })
  @ApiResponse({ status: 404, description: 'Ticket not found' })
  async findTicketById(@Param('id') id: string) {
    return this.crmService.findTicketById(id);
  }

  @Post('tickets')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CUSTOMER_SUPPORT)
  @ApiOperation({ summary: 'Create ticket' })
  @ApiResponse({ status: 201, description: 'Ticket created' })
  async createTicket(@Body() data: {
    userId: string;
    subject: string;
    description: string;
    category: string;
    priority?: string;
  }) {
    return this.crmService.createTicket(data as any);
  }

  @Put('tickets/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CUSTOMER_SUPPORT)
  @ApiOperation({ summary: 'Update ticket' })
  @ApiResponse({ status: 200, description: 'Ticket updated' })
  async updateTicket(@Param('id') id: string, @Body() data: any) {
    return this.crmService.updateTicket(id, data);
  }

  @Post('tickets/:id/messages')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CUSTOMER_SUPPORT)
  @ApiOperation({ summary: 'Add ticket message' })
  @ApiResponse({ status: 201, description: 'Message added' })
  async addTicketMessage(@Param('id') id: string, @Body() data: { content: string; attachments?: string[] }, @Request() req: { user: { id: string } }) {
    return this.crmService.addTicketMessage(id, { ...data, senderId: req.user.id, attachments: data.attachments || [] } as any);
  }
}
