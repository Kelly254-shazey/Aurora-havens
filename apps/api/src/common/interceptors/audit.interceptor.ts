import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { db } from '../../database';
import { activities } from '../../database/schema';

const MUTATION_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'] as const;

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;

    if (!MUTATION_METHODS.includes(method as typeof MUTATION_METHODS[number])) {
      return next.handle();
    }

    const user = request.user;
    const route = request.route?.path || request.url;
    const startTime = Date.now();

    return next.handle().pipe(
      tap(async () => {
        try {
          const actionMap: Record<string, string> = {
            POST: 'CREATE',
            PUT: 'UPDATE',
            PATCH: 'UPDATE',
            DELETE: 'DELETE',
          };

          await db.insert(activities).values({
            id: crypto.randomUUID(),
            userId: user?.sub || null,
            action: actionMap[method] as never,
            entityType: route.split('/')[2] || 'unknown',
            description: `${method} ${route}`,
            ipAddress: request.ip || request.connection?.remoteAddress,
            userAgent: request.headers['user-agent'],
            metadata: JSON.stringify({
              method,
              route,
              duration: Date.now() - startTime,
            }),
          });
        } catch {
          // Audit logging should never break the request
        }
      }),
    );
  }
}
