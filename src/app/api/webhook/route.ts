import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { WebhookData } from "@/lib/models";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const doc = new WebhookData({ payload: body });
    await doc.save();

    return NextResponse.json({ success: true, id: doc._id });
  } catch (err) {
    console.error("Webhook save error:", err);
    return NextResponse.json(
      { error: "Failed to save webhook" },
      { status: 500 }
    );
  }
}
