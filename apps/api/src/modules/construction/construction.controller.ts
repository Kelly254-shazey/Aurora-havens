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
import { ConstructionService } from './construction.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Public } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('construction')
@Controller('construction')
export class ConstructionController {
  constructor(private readonly constructionService: ConstructionService) {}

  @Get('packages')
  @Public()
  @ApiOperation({ summary: 'Get all packages' })
  @ApiResponse({ status: 200, description: 'Return all packages' })
  async findAllPackages() {
    return this.constructionService.findAllPackages();
  }

  @Get('packages/:id')
  @Public()
  @ApiOperation({ summary: 'Get package by ID' })
  @ApiResponse({ status: 200, description: 'Return package' })
  @ApiResponse({ status: 404, description: 'Package not found' })
  async findPackageById(@Param('id') id: string) {
    return this.constructionService.findPackageById(id);
  }

  @Post('packages')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create package' })
  @ApiResponse({ status: 201, description: 'Package created' })
  async createPackage(@Body() data: any) {
    return this.constructionService.createPackage(data);
  }

  @Put('packages/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update package' })
  @ApiResponse({ status: 200, description: 'Package updated' })
  async updatePackage(@Param('id') id: string, @Body() data: any) {
    return this.constructionService.updatePackage(id, data);
  }

  @Get('projects')
  @Public()
  @ApiOperation({ summary: 'Get all projects' })
  @ApiResponse({ status: 200, description: 'Return all projects' })
  async findAllProjects(@Query() query: { status?: string; page?: number; limit?: number }) {
    return this.constructionService.findAllProjects(query);
  }

  @Get('projects/:id')
  @Public()
  @ApiOperation({ summary: 'Get project by ID' })
  @ApiResponse({ status: 200, description: 'Return project' })
  @ApiResponse({ status: 404, description: 'Project not found' })
  async findProjectById(@Param('id') id: string) {
    return this.constructionService.findProjectById(id);
  }

  @Post('projects')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create project' })
  @ApiResponse({ status: 201, description: 'Project created' })
  async createProject(@Body() data: any) {
    return this.constructionService.createProject(data);
  }

  @Put('projects/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update project' })
  @ApiResponse({ status: 200, description: 'Project updated' })
  async updateProject(@Param('id') id: string, @Body() data: any) {
    return this.constructionService.updateProject(id, data);
  }

  @Delete('projects/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete project' })
  @ApiResponse({ status: 204, description: 'Project deleted' })
  async removeProject(@Param('id') id: string) {
    return this.constructionService.removeProject(id);
  }

  @Get('projects/:id/updates')
  @Public()
  @ApiOperation({ summary: 'Get project updates' })
  @ApiResponse({ status: 200, description: 'Return project updates' })
  async getUpdates(@Param('id') id: string) {
    return this.constructionService.getUpdates(id);
  }

  @Post('projects/:id/updates')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add project update' })
  @ApiResponse({ status: 201, description: 'Update added' })
  async addUpdate(@Param('id') id: string, @Body() data: { title: string; description: string; progress: number; images?: string[] }) {
    return this.constructionService.addUpdate({ ...data, projectId: id });
  }

  @Get('projects/:id/images')
  @Public()
  @ApiOperation({ summary: 'Get project images' })
  @ApiResponse({ status: 200, description: 'Return project images' })
  async getImages(@Param('id') id: string) {
    return this.constructionService.getImages(id);
  }

  @Post('projects/:id/images')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add project image' })
  @ApiResponse({ status: 201, description: 'Image added' })
  async addImage(@Param('id') id: string, @Body() data: { url: string; caption: string; takenAt: Date }) {
    return this.constructionService.addImage({ ...data, projectId: id });
  }

  @Get('stats')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get construction statistics' })
  @ApiResponse({ status: 200, description: 'Return construction statistics' })
  async getStats() {
    return this.constructionService.getStats();
  }
}
