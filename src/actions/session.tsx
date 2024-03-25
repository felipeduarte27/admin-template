'use server';

import { sessionOptions, SessionData, defaultSession } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { login as loginDB } from './user-action';
import { redirect } from 'next/navigation';

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggoedIn) {
    session.isLoggoedIn = defaultSession.isLoggoedIn;
  }

  return session;
};

export const login = async (formData: any): Promise<any> => {
  return await loginDB(formData.email, formData.senha);
};

export const loginWeb = async (formData: any) => {
  const user = await login(formData);
  console.log('chegou aqui');
  if (!user) {
    return { error: 'Credencias Inválidas !' };
  }

  const session = await getSession();

  session.id = user.id;
  session.email = user.email;
  session.name = user.name;
  session.role = user.role;
  session.isLoggoedIn = true;

  await session.save();

  redirect('/admin');
};

export const loginApi = async (formData: any) => {
  const user = await login(formData);

  if (!user) {
    return null;
  }

  const session = await getSession();

  session.id = user.id;
  session.email = user.email;
  session.name = user.name;
  session.role = user.role;
  session.isLoggoedIn = true;

  await session.save();

  return session;
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect('/');
};
