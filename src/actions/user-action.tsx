'use server';

import { prisma } from '../lib/prisma';
const bcrypt = require('bcrypt');
import { revalidatePath } from 'next/cache';

export const login = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (
    user &&
    user.status === 'ATIVO' &&
    (await bcrypt.compare(password, user && user.password))
  ) {
    const person = await prisma.persons.findFirst({
      where: {
        userId: user.id,
      },
    });
    return {
      id: user.id,
      name: person?.name,
      email: user.email,
    };
  }
  return null;
};

export async function addUser(formData: any) {
  await prisma.$transaction(async (tx: any) => {
    const encryptedPassword = await bcrypt.hash(formData.password, 8);
    const user = await tx.users.create({
      data: {
        role: formData.role ? formData.role : 'COMUM',
        email: formData.email,
        password: encryptedPassword,
        status: formData.status,
      },
    });

    await tx.persons.create({
      data: {
        name: formData.name,
        userId: user.id,
        stateId: formData.stateId,
        cityId: formData.cityId,
      },
    });

    return user;
  });
  revalidatePath('/admin/users/*');
}

export async function editUser(id: string, formData: any) {
  const { name, email, role, cityId, stateId, status } = formData;
  const person = await prisma.persons.findMany({
    where: {
      userId: id,
    },
  });

  await prisma.persons.update({
    data: {
      name,
      cityId,
      stateId,
    },
    where: {
      id: person[0].id,
    },
  });

  await prisma.users.update({
    data: {
      email,
      status,
      role,
    },
    where: {
      id,
    },
  });

  revalidatePath('/admin/users/*');
}

export async function findAllusers() {
  return await prisma.users.findMany({
    include: {
      person: true,
    },
  });
}

export async function findById(id: string) {
  return await prisma.users.findUnique({
    where: {
      id,
    },
    include: {
      person: true,
    },
  });
}

export async function deleteUser(id: string) {
  await prisma.users.update({
    where: {
      id,
    },
    data: {
      status: 'INATIVO',
    },
  });
  revalidatePath('/admin/users/*');
}
