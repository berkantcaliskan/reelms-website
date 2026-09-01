import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }
  const resend = new Resend(apiKey);
  const { name, email, message } = await req.json();

  if (!name?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Reelms Help Center <onboarding@resend.dev>",
    to: "admin@reelms.io",
    subject: `Help Center: Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email || "Not provided"}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message.", detail: error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
