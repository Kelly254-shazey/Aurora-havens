import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

const CUSTOMER_ROLES = ['BUYER', 'TENANT', 'PROPERTY_OWNER', 'INVESTOR', 'DONOR', 'SELLER'];

@Injectable()
export class CustomerPortalGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Access denied');
    }

    if (user.role && (CUSTOMER_ROLES.includes(user.role) || ['SUPER_ADMIN', 'ADMIN'].includes(user.role))) {
      return true;
    }

    throw new ForbiddenException('Access denied: customer portal only');
  }
}
