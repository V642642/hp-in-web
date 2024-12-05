import { NextResponse } from "next/server";

export async function middleware(req) {


  return NextResponse.redirect('my.hiringplug.com');

  if (req.geo?.country === "CA" && req?.nextUrl?.host === process.env.NEXT_PUBLIC_BASE_URL) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CA_URL}${req.nextUrl.pathname}`);
  }else if (req.geo?.country === "IN" && req?.nextUrl?.host === process.env.NEXT_PUBLIC_BASE_URL) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_IN_URL}${req.nextUrl.pathname}`);
  }else {
    return NextResponse.next();
  }
}
