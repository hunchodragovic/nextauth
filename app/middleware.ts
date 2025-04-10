import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname.startsWith("/profile");
    const isAuth = await getToken({
      req: request,
    });
    const protectedRoutes = ["/profile"];
    const isAuthRoute = request.nextUrl.pathname.startsWith("/auth/signin");
    const isProtectedRoute = protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    );
    if (isProtectedRoute && !isAuth) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);
// This function can be marked `async` if using `await` inside

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/auth/:path*"],
};
