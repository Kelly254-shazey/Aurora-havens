import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@aurora-havens/shared';
import { ROLES_KEY } from '../guards/roles.guard';
import { OWNERSHIP_KEY } from '../guards/ownership.guard';

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
export const Public = () => SetMetadata('isPublic', true);
export const CurrentUser = () => SetMetadata('currentUser', true);
export const Ownership = (resourceType: string) => SetMetadata(OWNERSHIP_KEY, resourceType);
