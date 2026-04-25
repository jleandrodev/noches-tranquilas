import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const token = request.headers.get("x-kiwify-token");

  if (token !== process.env.KIWIFY_WEBHOOK_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const event = body.event as string;
  const email = (body.customer as Record<string, string>)?.email;
  const orderId = body.order_id as string | undefined;

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  if (event === "purchase.approved" || event === "subscription.active") {
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    await prisma.assinatura.upsert({
      where: { userId: user.id },
      update: { status: "ATIVA", kiwifyOrderId: orderId },
      create: {
        userId: user.id,
        status: "ATIVA",
        kiwifyOrderId: orderId,
      },
    });
  }

  if (event === "subscription.canceled") {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      await prisma.assinatura.updateMany({
        where: { userId: user.id },
        data: { status: "CANCELADA" },
      });
    }
  }

  return NextResponse.json({ ok: true });
}
