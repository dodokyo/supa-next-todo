import { NextRequest, NextResponse } from "next/server";

const COOKIE_COUNTER = "cookie-counter";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.cookies.get(COOKIE_COUNTER)?.value) {
    const prev = request.cookies.get(COOKIE_COUNTER)?.value;
    response.cookies.set(COOKIE_COUNTER, `${Number(prev) + 1}`);
  } else {
    response.cookies.set(COOKIE_COUNTER, "1");
  }

  return response;
}

export const config = {
  matcher: ["/", "/todo-no-rls", "/api/:path*"],
};
