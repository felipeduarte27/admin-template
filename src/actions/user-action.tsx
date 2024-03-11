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
    user.status === 'ACTIVE' &&
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
        roleId: formData.roleId,
        email: formData.email,
        password: encryptedPassword,
        status: formData.status,
      },
    });

    await tx.persons.create({
      data: {
        name: formData.name,
        userId: user.id,
      },
    });

    setTimeout(() => {}, 3000);
    return user;
  });
  revalidatePath('/admin/*');
}

export async function editUser(id: string, formData: any) {
  const { name, email, role } = formData;
  const person = await prisma.persons.findMany({
    where: {
      userId: id,
    },
  });

  await prisma.persons.update({
    data: {
      name,
    },
    where: {
      id: person[0].id,
    },
  });

  await prisma.users.update({
    data: {
      email,
      roleId: role,
    },
    where: {
      id,
    },
  });

  revalidatePath('/admin/users/*');
}

export async function findAllRoles() {
  return await prisma.roles.findMany();
}

export async function findAllusers() {
  return await prisma.users.findMany({
    include: {
      person: true,
      role: true,
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
      status: 'INACTIVE',
    },
  });
  revalidatePath('/admin/users/*');
}
