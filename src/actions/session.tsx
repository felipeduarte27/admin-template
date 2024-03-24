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

export const login = async (formData: any) => {
  const session = await getSession();

  const user = await loginDB(formData.email, formData.senha);

  if (!user) {
    return { error: 'Credencias Inválidas !' };
  }

  session.id = user.id;
  session.email = user.email;
  session.name = user.name;
  session.role = user.role;
  session.isLoggoedIn = true;

  await session.save();

  redirect('/admin');
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect('/');
};
