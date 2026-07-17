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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CmsService } from './cms.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Public } from '../../common/decorators';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('cms')
@Controller('cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  // Pages
  @Get('pages')
  @Public()
  @ApiOperation({ summary: 'Get all pages' })
  @ApiResponse({ status: 200, description: 'Return all pages' })
  async findAllPages(@Query() query: { isPublished?: string }) {
    return this.cmsService.findAllPages({ isPublished: query.isPublished === 'true' });
  }

  @Get('pages/:slug')
  @Public()
  @ApiOperation({ summary: 'Get page by slug' })
  @ApiResponse({ status: 200, description: 'Return page' })
  @ApiResponse({ status: 404, description: 'Page not found' })
  async findPageBySlug(@Param('slug') slug: string) {
    return this.cmsService.findPageBySlug(slug);
  }

  @Post('pages')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create page' })
  @ApiResponse({ status: 201, description: 'Page created' })
  async createPage(@Body() data: Record<string, unknown>) {
    return this.cmsService.createPage(data as never);
  }

  @Put('pages/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update page' })
  @ApiResponse({ status: 200, description: 'Page updated' })
  async updatePage(@Param('id') id: string, @Body() data: Record<string, unknown>) {
    return this.cmsService.updatePage(id, data);
  }

  @Delete('pages/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete page' })
  @ApiResponse({ status: 204, description: 'Page deleted' })
  async removePage(@Param('id') id: string) {
    return this.cmsService.removePage(id);
  }

  // Blog Posts
  @Get('posts')
  @Public()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: 'Return all posts' })
  async findAllPosts(@Query() query: { category?: string; isPublished?: string; search?: string; page?: number; limit?: number }) {
    return this.cmsService.findAllPosts({ ...query, isPublished: query.isPublished === 'true' });
  }

  @Get('posts/:slug')
  @Public()
  @ApiOperation({ summary: 'Get post by slug' })
  @ApiResponse({ status: 200, description: 'Return post' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  async findPostBySlug(@Param('slug') slug: string) {
    return this.cmsService.findPostBySlug(slug);
  }

  @Post('posts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 201, description: 'Post created' })
  async createPost(@Body() data: Record<string, unknown>) {
    return this.cmsService.createPost(data as never);
  }

  @Put('posts/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update post' })
  @ApiResponse({ status: 200, description: 'Post updated' })
  async updatePost(@Param('id') id: string, @Body() data: Record<string, unknown>) {
    return this.cmsService.updatePost(id, data);
  }

  @Delete('posts/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete post' })
  @ApiResponse({ status: 204, description: 'Post deleted' })
  async removePost(@Param('id') id: string) {
    return this.cmsService.removePost(id);
  }

  // Testimonials
  @Get('testimonials')
  @Public()
  @ApiOperation({ summary: 'Get all testimonials' })
  @ApiResponse({ status: 200, description: 'Return all testimonials' })
  async findAllTestimonials(@Query() query: { isPublished?: string }) {
    return this.cmsService.findAllTestimonials({ isPublished: query.isPublished === 'true' });
  }

  @Post('testimonials')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create testimonial' })
  @ApiResponse({ status: 201, description: 'Testimonial created' })
  async createTestimonial(@Body() data: Record<string, unknown>) {
    return this.cmsService.createTestimonial(data as never);
  }

  @Put('testimonials/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update testimonial' })
  @ApiResponse({ status: 200, description: 'Testimonial updated' })
  async updateTestimonial(@Param('id') id: string, @Body() data: Record<string, unknown>) {
    return this.cmsService.updateTestimonial(id, data);
  }

  @Delete('testimonials/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete testimonial' })
  @ApiResponse({ status: 204, description: 'Testimonial deleted' })
  async removeTestimonial(@Param('id') id: string) {
    return this.cmsService.removeTestimonial(id);
  }

  // Gallery
  @Get('gallery')
  @Public()
  @ApiOperation({ summary: 'Get all gallery images' })
  @ApiResponse({ status: 200, description: 'Return all gallery images' })
  async findAllGalleryImages(@Query() query: { category?: string }) {
    return this.cmsService.findAllGalleryImages(query);
  }

  @Post('gallery')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add gallery image' })
  @ApiResponse({ status: 201, description: 'Image added' })
  async createGalleryImage(@Body() data: Record<string, unknown>) {
    return this.cmsService.createGalleryImage(data as never);
  }

  @Delete('gallery/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete gallery image' })
  @ApiResponse({ status: 204, description: 'Image deleted' })
  async removeGalleryImage(@Param('id') id: string) {
    return this.cmsService.removeGalleryImage(id);
  }

  // News
  @Get('news')
  @Public()
  @ApiOperation({ summary: 'Get all news' })
  @ApiResponse({ status: 200, description: 'Return all news' })
  async findAllNews(@Query() query: { category?: string; isPublished?: string; page?: number; limit?: number }) {
    return this.cmsService.findAllNews({ ...query, isPublished: query.isPublished === 'true' });
  }

  @Get('news/:slug')
  @Public()
  @ApiOperation({ summary: 'Get news by slug' })
  @ApiResponse({ status: 200, description: 'Return news' })
  @ApiResponse({ status: 404, description: 'News not found' })
  async findNewsBySlug(@Param('slug') slug: string) {
    return this.cmsService.findNewsBySlug(slug);
  }

  @Post('news')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create news' })
  @ApiResponse({ status: 201, description: 'News created' })
  async createNews(@Body() data: Record<string, unknown>) {
    return this.cmsService.createNews(data as never);
  }

  // Settings
  @Get('settings')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all settings' })
  @ApiResponse({ status: 200, description: 'Return all settings' })
  async getAllSettings() {
    return this.cmsService.getAllSettings();
  }

  @Get('settings/:key')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get setting by key' })
  @ApiResponse({ status: 200, description: 'Return setting' })
  async getSetting(@Param('key') key: string) {
    return this.cmsService.getSetting(key);
  }

  @Put('settings/:key')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update setting' })
  @ApiResponse({ status: 200, description: 'Setting updated' })
  async setSetting(@Param('key') key: string, @Body() data: { value: unknown }) {
    return this.cmsService.setSetting(key, data.value);
  }
}
