import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { CsrfGuard } from './common/guards/csrf.guard';
import { AuditInterceptor } from './common/interceptors/audit.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const nodeEnv = configService.get('NODE_ENV', 'development');

  // Security headers
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      frameguard: { action: 'deny' },
      hsts: nodeEnv === 'production'
        ? { maxAge: 63072000, includeSubDomains: true, preload: true }
        : false,
    }),
  );
  app.enableCors({
    origin: [
      configService.get('FRONTEND_URL', 'http://localhost:3000'),
      configService.get('PORTAL_URL', 'http://localhost:3002'),
    ],
    credentials: true,
  });

  // Compression
  app.use(compression());

  // Cookie parser
  app.use(cookieParser());

  // CSRF protection
  app.useGlobalGuards(new CsrfGuard(configService));

  // Logging
  app.use(morgan('combined'));

  // Global prefix
  app.setGlobalPrefix('api/v1');

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global pipes, guards, interceptors, filters
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new AuditInterceptor(), new TransformInterceptor());

  // Swagger - only in non-production
  if (nodeEnv !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Aurora Havens API')
      .setDescription('Aurora Havens Digital Ecosystem API')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('auth', 'Authentication endpoints')
      .addTag('users', 'User management')
      .addTag('properties', 'Property listings and management')
      .addTag('investments', 'Investment opportunities and management')
      .addTag('foundations', 'Foundation programs and donations')
      .addTag('construction', 'Construction projects')
      .addTag('crm', 'Customer relationship management')
      .addTag('cms', 'Content management')
      .addTag('payments', 'Payment processing')
      .addTag('notifications', 'Notification system')
      .addTag('analytics', 'Analytics and reporting')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    console.log(`Swagger docs: http://localhost:${configService.get('PORT', 3001)}/api/docs`);
  }

  // Graceful shutdown
  app.enableShutdownHooks();

  const port = configService.get('PORT', 3001);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
