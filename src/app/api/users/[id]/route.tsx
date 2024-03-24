import { NextResponse } from 'next/server';
import { findById } from '@/actions/user-action';

export async function GET(request: Request, context: any) {
  const { params } = context;

  const users = await findById(params.id);

  return NextResponse.json(
    {
      ...users,
    },
    {
      status: 200,
    }
  );
}
