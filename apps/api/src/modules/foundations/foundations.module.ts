import { Module } from '@nestjs/common';
import { FoundationsController } from './foundations.controller';
import { FoundationsService } from './foundations.service';
@Module({
  imports: [],
  controllers: [FoundationsController],
  providers: [FoundationsService],
  exports: [FoundationsService],
})
export class FoundationsModule {}
