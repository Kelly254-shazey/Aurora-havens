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
import { InvestmentsService } from './investments.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Public } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('investments')
@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Get('opportunities')
  @Public()
  @ApiOperation({ summary: 'Get all investment opportunities' })
  @ApiResponse({ status: 200, description: 'Return all opportunities' })
  async findAllOpportunities(@Query() query: { type?: string; status?: string; page?: number; limit?: number }) {
    return this.investmentsService.findAllOpportunities(query);
  }

  @Get('opportunities/:id')
  @Public()
  @ApiOperation({ summary: 'Get opportunity by ID' })
  @ApiResponse({ status: 200, description: 'Return opportunity' })
  @ApiResponse({ status: 404, description: 'Opportunity not found' })
  async findOpportunityById(@Param('id') id: string) {
    return this.investmentsService.findOpportunityById(id);
  }

  @Post('opportunities')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create investment opportunity' })
  @ApiResponse({ status: 201, description: 'Opportunity created' })
  async createOpportunity(@Body() data: any) {
    return this.investmentsService.createOpportunity(data);
  }

  @Put('opportunities/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update investment opportunity' })
  @ApiResponse({ status: 200, description: 'Opportunity updated' })
  async updateOpportunity(@Param('id') id: string, @Body() data: any) {
    return this.investmentsService.updateOpportunity(id, data);
  }

  @Delete('opportunities/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete investment opportunity' })
  @ApiResponse({ status: 204, description: 'Opportunity deleted' })
  async removeOpportunity(@Param('id') id: string) {
    return this.investmentsService.removeOpportunity(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create investment' })
  @ApiResponse({ status: 201, description: 'Investment created' })
  @ApiResponse({ status: 400, description: 'Invalid investment amount' })
  async createInvestment(@Body() data: any, @Request() req: { user: { id: string } }) {
    return this.investmentsService.createInvestment({ ...data, investorId: req.user.id });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get investments' })
  @ApiResponse({ status: 200, description: 'Return investments' })
  async getInvestments(@Query() query: { status?: string }, @Request() req: { user: { id: string; role: string } }) {
    if (req.user.role === UserRole.INVESTOR) {
      return this.investmentsService.getInvestments({ investorId: req.user.id, ...query });
    }
    return this.investmentsService.getInvestments(query);
  }

  @Get('dashboard')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get investor dashboard' })
  @ApiResponse({ status: 200, description: 'Return investor dashboard' })
  async getDashboard(@Request() req: { user: { id: string } }) {
    return this.investmentsService.getInvestorDashboard(req.user.id);
  }

  @Get('stats')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get investment statistics' })
  @ApiResponse({ status: 200, description: 'Return investment statistics' })
  async getStats() {
    return this.investmentsService.getStats();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get investment by ID' })
  @ApiResponse({ status: 200, description: 'Return investment' })
  @ApiResponse({ status: 404, description: 'Investment not found' })
  async getInvestmentById(@Param('id') id: string) {
    return this.investmentsService.getInvestmentById(id);
  }

  @Put(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update investment status' })
  @ApiResponse({ status: 200, description: 'Investment status updated' })
  async updateInvestmentStatus(@Param('id') id: string, @Body() data: { status: string }) {
    return this.investmentsService.updateInvestmentStatus(id, data.status);
  }

  @Get(':id/returns')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get investment returns' })
  @ApiResponse({ status: 200, description: 'Return investment returns' })
  async getReturns(@Param('id') id: string) {
    return this.investmentsService.getReturns(id);
  }

  @Post(':id/returns')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add investment return' })
  @ApiResponse({ status: 201, description: 'Return added' })
  async addReturn(@Param('id') id: string, @Body() data: { amount: number; period: string; date: Date }) {
    return this.investmentsService.addReturn({ ...data, investmentId: id, status: 'PENDING', amount: data.amount as any });
  }

  @Get(':id/documents')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get investment documents' })
  @ApiResponse({ status: 200, description: 'Return investment documents' })
  async getDocuments(@Param('id') id: string) {
    return this.investmentsService.getDocuments(id);
  }

  @Post(':id/documents')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add investment document' })
  @ApiResponse({ status: 201, description: 'Document added' })
  async addDocument(@Param('id') id: string, @Body() data: { title: string; url: string; type: string }) {
    return this.investmentsService.addDocument({ ...data, investmentId: id });
  }
}
