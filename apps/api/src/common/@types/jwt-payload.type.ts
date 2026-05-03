import { Roles } from '@shared/enums/role.enum';

export type JwtPayload = {
  sub: string;
  role: Roles;
  permissions?: string[];
};
