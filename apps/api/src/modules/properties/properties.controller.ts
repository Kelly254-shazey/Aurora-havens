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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PropertiesService } from './properties.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Public } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  @Public()
  @ApiOperation({ summary: 'Get all properties' })
  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'minPrice', required: false })
  @ApiQuery({ name: 'maxPrice', required: false })
  @ApiQuery({ name: 'bedrooms', required: false })
  @ApiQuery({ name: 'bathrooms', required: false })
  @ApiQuery({ name: 'city', required: false })
  @ApiQuery({ name: 'state', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'sortBy', required: false })
  @ApiQuery({ name: 'sortOrder', required: false })
  @ApiResponse({ status: 200, description: 'Return all properties' })
  async findAll(@Query() query: Record<string, string>) {
    return this.propertiesService.findAll({
      type: query.type,
      status: query.status,
      minPrice: query.minPrice ? Number(query.minPrice) : undefined,
      maxPrice: query.maxPrice ? Number(query.maxPrice) : undefined,
      bedrooms: query.bedrooms ? Number(query.bedrooms) : undefined,
      bathrooms: query.bathrooms ? Number(query.bathrooms) : undefined,
      city: query.city,
      state: query.state,
      features: query.features ? query.features.split(',') : undefined,
      search: query.search,
      page: query.page ? Number(query.page) : 1,
      limit: query.limit ? Number(query.limit) : 12,
      sortBy: query.sortBy,
      sortOrder: query.sortOrder as 'asc' | 'desc',
    });
  }

  @Get('featured')
  @Public()
  @ApiOperation({ summary: 'Get featured properties' })
  @ApiResponse({ status: 200, description: 'Return featured properties' })
  async getFeatured() {
    return this.propertiesService.getFeatured();
  }

  @Get('stats')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.PROPERTY_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get property statistics' })
  @ApiResponse({ status: 200, description: 'Return property statistics' })
  async getStats() {
    return this.propertiesService.getStats();
  }

  @Get('favorites')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user favorites' })
  @ApiResponse({ status: 200, description: 'Return user favorites' })
  async getFavorites(@Request() req: { user: { id: string } }) {
    return this.propertiesService.getUserFavorites(req.user.id);
  }

  @Get(':slug')
  @Public()
  @ApiOperation({ summary: 'Get property by slug' })
  @ApiResponse({ status: 200, description: 'Return property' })
  @ApiResponse({ status: 404, description: 'Property not found' })
  async findBySlug(@Param('slug') slug: string) {
    return this.propertiesService.findBySlug(slug);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.PROPERTY_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a property' })
  @ApiResponse({ status: 201, description: 'Property created' })
  async create(
    @Body() data: {
      title: string;
      description: string;
      type: string;
      status: string;
      price: number;
      currency?: string;
      bedrooms?: number;
      bathrooms?: number;
      squareFeet?: number;
      lotSize?: number;
      yearBuilt?: number;
      address: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
      };
      features?: string[];
      mapCoordinates?: { lat: number; lng: number };
      agentId?: string;
      isFeatured?: boolean;
      isNew?: boolean;
    },
    @Body('images') images?: Array<{ url: string; alt: string; isPrimary?: boolean }>,
  ) {
    return this.propertiesService.create({ ...data, type: data.type as any, price: data.price as any, status: data.status as any } as any, images);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.PROPERTY_MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a property' })
  @ApiResponse({ status: 200, description: 'Property updated' })
  @ApiResponse({ status: 404, description: 'Property not found' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<{
      title: string;
      description: string;
      type: string;
      status: string;
      price: number;
      bedrooms: number;
      bathrooms: number;
      squareFeet: number;
      isFeatured: boolean;
      isNew: boolean;
      isSold: boolean;
    }>,
  ) {
    return this.propertiesService.update(id, data as any);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a property' })
  @ApiResponse({ status: 204, description: 'Property deleted' })
  @ApiResponse({ status: 404, description: 'Property not found' })
  async remove(@Param('id') id: string) {
    return this.propertiesService.remove(id);
  }

  @Post(':id/favorite')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Toggle property favorite' })
  @ApiResponse({ status: 200, description: 'Favorite toggled' })
  async toggleFavorite(
    @Param('id') id: string,
    @Request() req: { user: { id: string } },
  ) {
    return this.propertiesService.toggleFavorite(req.user.id, id);
  }

  @Post(':id/inquiry')
  @Public()
  @ApiOperation({ summary: 'Create property inquiry' })
  @ApiResponse({ status: 201, description: 'Inquiry created' })
  async createInquiry(
    @Param('id') id: string,
    @Body() data: {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      message?: string;
    },
    @Request() req?: { user?: { id: string } },
  ) {
    return this.propertiesService.createInquiry({
      propertyId: id,
      userId: req?.user?.id,
      ...data,
    });
  }
}
