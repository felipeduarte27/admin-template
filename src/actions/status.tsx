'use server';

import { UserStatus } from '@prisma/client';

type status = {
  id: string;
  name: string;
};

export const getAllStatus = async (): Promise<status[]> => {
  return Object.entries(UserStatus).map(([key, value]) => ({
    id: key,
    name: value,
  }));
};
