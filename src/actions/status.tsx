'use server';

import { UserStatus } from '@prisma/client';

export type Status = {
  id: string;
  name: string;
};

export const getAllStatus = async (): Promise<Status[]> => {
  return Object.entries(UserStatus).map(([key, value]) => ({
    id: key,
    name: value,
  }));
};
