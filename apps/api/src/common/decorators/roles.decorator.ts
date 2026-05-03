import { SetMetadata } from '@nestjs/common';
import { Roles } from '@shared/enums/role.enum';

export const RolesDecorator = (...roles: Roles[]) =>
  SetMetadata(process.env.ROLES_KEY, roles);
