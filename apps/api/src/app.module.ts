import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD } from '@nestjs/core';
import { ContactModule } from './modules/contact/contact.module';
import { CustomerPortalModule } from './modules/customer-portal/customer-portal.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { InvestmentsModule } from './modules/investments/investments.module';
import { FoundationsModule } from './modules/foundations/foundations.module';
import { ConstructionModule } from './modules/construction/construction.module';
import { CrmModule } from './modules/crm/crm.module';
import { CmsModule } from './modules/cms/cms.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 100,
        },
      ],
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    ContactModule,
    CustomerPortalModule,
    UsersModule,
    PropertiesModule,
    InvestmentsModule,
    FoundationsModule,
    ConstructionModule,
    CrmModule,
    CmsModule,
    PaymentsModule,
    NotificationsModule,
    AnalyticsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
