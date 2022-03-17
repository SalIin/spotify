import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = <string>process.env.JWT_SECRET;

interface Request extends NextApiRequest, Pick<NextRequest, "nextUrl"> {}

export async function middleware(req: Request) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth") || pathname === "/login" || token)
    return NextResponse.next();

  return NextResponse.redirect("/login");
}
