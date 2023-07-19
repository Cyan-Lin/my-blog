// route handler enabling draft mode
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  draftMode().enable();
  return NextResponse.redirect(new URL("/blog", req.url), 307);
}
