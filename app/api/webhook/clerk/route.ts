export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  const payload = await req.text();
  const headerPayload = await headers();

  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new NextResponse("Missing headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: any;

  try {
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (evt.type === "user.created") {
    const user = evt.data;

    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.email_addresses[0].email_address,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    });
  }

  return NextResponse.json({ success: true });
}