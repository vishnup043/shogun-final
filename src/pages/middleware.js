import { NextResponse } from "next/server";

export async function middleware(request) {
  // Skip authentication check for /checkout
  if (request.nextUrl.pathname.startsWith('/checkout')) {
    return NextResponse.next();
  }

  // Optionally keep auth checks for other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/order/:path*",
    "/checkout/:path*",
  ],
};