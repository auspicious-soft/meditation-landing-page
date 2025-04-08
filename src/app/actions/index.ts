// src/actions/index.ts
'use server';

import { cookies } from 'next/headers';

export const getTokenCustom = async (): Promise<string> => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    throw new Error('Token not found');
  }

  return token;
};
