import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, topic, customTopic, message } = await req.json();

  if (!name?.trim() || !message?.trim() || !topic?.trim()) {
    return NextResponse.json({ error: "Name, topic, and message are required." }, { status: 400 });
  }

  const resolvedTopic = topic === "Other" ? (customTopic?.trim() || "Other") : topic;

  const { error } = await resend.emails.send({
    from: "Reelms Reports <onboarding@resend.dev>",
    to: "admin@reelms.io",
    subject: resolvedTopic,
    text: `Name: ${name}\nEmail: ${email || "Not provided"}\nTopic: ${resolvedTopic}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send report.", detail: error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
