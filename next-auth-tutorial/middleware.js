import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // Allow access only if the user is authenticated
      return !!token;
    },
  },
});

// Add additional middleware logic
export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(`User role: ${token?.role}`);
  if (
    req?.nextUrl?.pathname?.startsWith("/CreateUser") &&
    token?.role != "admin"
  ) {
    return NextResponse.rewrite(new URL("/Denied", req.url));
  }
  return NextResponse.next(); // Continue with the default behavior
}

export const config = { matcher: ["/CreateUser"] };
