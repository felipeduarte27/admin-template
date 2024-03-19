'use server';

import { prisma } from '../lib/prisma';
import { States } from '@prisma/client';

export const getAllStates = async (): Promise<States[]> => {
  return await prisma.states.findMany();
};
