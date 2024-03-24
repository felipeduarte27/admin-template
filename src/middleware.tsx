import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isLoggedIn: boolean = false;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('sduhfasjdfaklsj');

  if (isLoggedIn) {
    return NextResponse.next();
  }

  return NextResponse.json(null, {
    status: 401,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/users/:path*',
};
