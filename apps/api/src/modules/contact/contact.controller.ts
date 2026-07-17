import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from '../../common/decorators';
import { ContactService } from './contact.service';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Submit contact form' })
  @ApiResponse({ status: 201, description: 'Contact submission received' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async submitContact(@Body() data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) {
    return this.contactService.submitContact(data);
  }
}
