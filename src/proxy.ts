import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = process.env.username;
const PASSWORD = process.env.password;

/** Length-independent comparison so a wrong guess can't be timed against a right one. */
function safeEqual(a: string, b: string) {
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  let diff = aBytes.length ^ bBytes.length;
  for (let i = 0; i < aBytes.length; i++) {
    diff |= aBytes[i] ^ (bBytes[i] ?? 0);
  }
  return diff === 0;
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export function proxy(request: NextRequest) {
  // Fail closed: without credentials configured nobody gets in.
  if (!USERNAME || !PASSWORD) {
    return new NextResponse("Site is locked: set username and password in .env", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return unauthorized();

  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return unauthorized();
  }

  const separator = decoded.indexOf(":");
  if (separator === -1) return unauthorized();

  const user = decoded.slice(0, separator);
  const pass = decoded.slice(separator + 1);

  // Both compared every time so failure timing doesn't reveal which field was wrong.
  const userOk = safeEqual(user, USERNAME);
  const passOk = safeEqual(pass, PASSWORD);
  if (!userOk || !passOk) return unauthorized();

  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"],
};
