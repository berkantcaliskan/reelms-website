import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
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
