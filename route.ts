import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !body.phone || !body.address) {
    return NextResponse.json({ error: "اطلاعات ضروری ناقص است." }, { status: 400 });
  }
  const orderId = "SR-" + Math.floor(100000 + Math.random() * 900000);
  return NextResponse.json({ ok: true, orderId });
}