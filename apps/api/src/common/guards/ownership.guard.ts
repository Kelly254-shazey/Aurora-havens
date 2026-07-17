import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { db } from '../../database';
import { entities, relationships } from '../../database/schema';
import { eq } from 'drizzle-orm';

export const OWNERSHIP_KEY = 'ownership';
export const Ownership = (resourceType: string) => {
  return (target: unknown, propertyKey?: string, parameterIndex?: number) => {
    const { SetMetadata } = require('@nestjs/common');
    if (parameterIndex !== undefined) {
      return SetMetadata(OWNERSHIP_KEY, resourceType)(target, propertyKey!, parameterIndex);
    }
    return SetMetadata(OWNERSHIP_KEY, resourceType)(target, propertyKey!);
  };
};

@Injectable()
export class OwnershipGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const resourceType = this.reflector.getAllAndOverride<string>(OWNERSHIP_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!resourceType) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) throw new ForbiddenException('Access denied');

    const resourceId = request.params.id;
    if (!resourceId) return true;

    switch (resourceType) {
      case 'entity': {
        const [entity] = await db.select().from(entities).where(eq(entities.id, resourceId)).limit(1);
        if (!entity) return true;
        return entity.createdById === user.sub;
      }
      case 'relationship': {
        const [rel] = await db.select().from(relationships).where(eq(relationships.id, resourceId)).limit(1);
        if (!rel) return true;
        return rel.fromId === user.sub;
      }
      case 'self': {
        return resourceId === user.sub;
      }
      default:
        return true;
    }
  }
}
