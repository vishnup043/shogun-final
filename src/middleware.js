import { NextResponse } from "next/server";

export async function middleware(request) {
  // Skip authentication check for /checkout
  if (request.nextUrl.pathname.startsWith('/checkout')) {
    return NextResponse.next();
  }

  // Authentication check for other routes
  const isAuthenticated = checkAuth(request);
  if (!isAuthenticated) {
    // Redirect unauthenticated users to login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow authenticated users to proceed
  return NextResponse.next();
}

// Helper function to check authentication (example)
function checkAuth(request) {
  // Example: Check for an auth token in cookies
  // Replace with your actual authentication logic (e.g., JWT, session, etc.)
  const token = request.cookies.get('auth-token')?.value;
  return !!token; // Return true if token exists, false otherwise
}

export const config = {
  matcher: [
    "/user/:path*",
    "/order/:path*",
    "/checkout/:path*",
  ],
};