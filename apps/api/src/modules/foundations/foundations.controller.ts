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
import { FoundationsService } from './foundations.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Public } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('foundations')
@Controller('foundations')
export class FoundationsController {
  constructor(private readonly foundationsService: FoundationsService) {}

  @Get('programs')
  @Public()
  @ApiOperation({ summary: 'Get all programs' })
  @ApiResponse({ status: 200, description: 'Return all programs' })
  async findAllPrograms(@Query() query: { category?: string; status?: string; page?: number; limit?: number }) {
    return this.foundationsService.findAllPrograms(query);
  }

  @Get('programs/:id')
  @Public()
  @ApiOperation({ summary: 'Get program by ID' })
  @ApiResponse({ status: 200, description: 'Return program' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  async findProgramById(@Param('id') id: string) {
    return this.foundationsService.findProgramById(id);
  }

  @Post('programs')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a program' })
  @ApiResponse({ status: 201, description: 'Program created' })
  async createProgram(@Body() data: {
    title: string;
    description: string;
    category: string;
    image: string;
    goals: string;
    targetAmount: number;
    status?: string;
    startDate: Date;
    endDate?: Date;
  }) {
    return this.foundationsService.createProgram({ ...data, category: data.category as any, targetAmount: data.targetAmount as any });
  }

  @Put('programs/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a program' })
  @ApiResponse({ status: 200, description: 'Program updated' })
  async updateProgram(@Param('id') id: string, @Body() data: any) {
    return this.foundationsService.updateProgram(id, data);
  }

  @Delete('programs/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a program' })
  @ApiResponse({ status: 204, description: 'Program deleted' })
  async removeProgram(@Param('id') id: string) {
    return this.foundationsService.removeProgram(id);
  }

  @Post('donations')
  @Public()
  @ApiOperation({ summary: 'Create a donation' })
  @ApiResponse({ status: 201, description: 'Donation created' })
  async createDonation(@Body() data: {
    programId: string;
    amount: number;
    currency?: string;
    paymentMethod: string;
    donorId?: string;
    isRecurring?: boolean;
    recurringInterval?: string;
    message?: string;
    isAnonymous?: boolean;
  }) {
    return this.foundationsService.createDonation({ ...data, amount: data.amount as any, paymentMethod: data.paymentMethod as any, donorId: data.donorId || '' });
  }

  @Get('donations')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get donations' })
  @ApiResponse({ status: 200, description: 'Return donations' })
  async getDonations(@Query() query: { programId?: string; donorId?: string; page?: number; limit?: number }) {
    return this.foundationsService.getDonations(query);
  }

  @Get('donations/stats')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get donation statistics' })
  @ApiResponse({ status: 200, description: 'Return donation statistics' })
  async getDonationStats() {
    return this.foundationsService.getDonationStats();
  }

  @Get('events')
  @Public()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({ status: 200, description: 'Return all events' })
  async findAllEvents(@Query() query: { programId?: string; status?: string }) {
    return this.foundationsService.findAllEvents(query);
  }

  @Post('events')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create an event' })
  @ApiResponse({ status: 201, description: 'Event created' })
  async createEvent(@Body() data: any) {
    return this.foundationsService.createEvent(data);
  }

  @Post('volunteers')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Register as volunteer' })
  @ApiResponse({ status: 201, description: 'Volunteer registered' })
  async createVolunteer(@Body() data: any, @Request() req: { user: { id: string } }) {
    return this.foundationsService.createVolunteer({ ...data, userId: req.user.id });
  }

  @Get('volunteers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get volunteers' })
  @ApiResponse({ status: 200, description: 'Return volunteers' })
  async getVolunteers(@Query() query: { programId?: string; eventId?: string }) {
    return this.foundationsService.getVolunteers(query);
  }

  @Get('success-stories')
  @Public()
  @ApiOperation({ summary: 'Get success stories' })
  @ApiResponse({ status: 200, description: 'Return success stories' })
  async findAllSuccessStories(@Query() query: { programId?: string; isPublished?: boolean }) {
    return this.foundationsService.findAllSuccessStories(query);
  }

  @Post('success-stories')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FOUNDATION_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create success story' })
  @ApiResponse({ status: 201, description: 'Success story created' })
  async createSuccessStory(@Body() data: any) {
    return this.foundationsService.createSuccessStory(data);
  }

  @Get('impact')
  @Public()
  @ApiOperation({ summary: 'Get impact statistics' })
  @ApiResponse({ status: 200, description: 'Return impact statistics' })
  async getImpactStats() {
    return this.foundationsService.getImpactStats();
  }
}
