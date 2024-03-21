'use server';

import { Roles } from '@prisma/client';

type roles = {
  id: string;
  name: string;
};

export const getAllRoles = async (): Promise<roles[]> => {
  return Object.entries(Roles).map(([key, value]) => ({
    id: key,
    name: value,
  }));
};
