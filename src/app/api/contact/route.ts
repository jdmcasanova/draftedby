import { NextResponse } from "next/server";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/site";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const SUCCESS_MESSAGE = "Thanks. We received your message and will reply by email soon.";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
  }

  if (!isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Please write a message with a little more detail." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
  const preview = message.length > 160 ? `${message.slice(0, 157)}...` : message;

  console.info("[draftedby/contact] submission received", {
    name,
    email,
    messagePreview: preview,
    hasResendConfig: Boolean(apiKey && fromEmail),
  });

  if (!apiKey || !fromEmail) {
    console.info("[draftedby/contact] resend not configured, returning log-only success");
    return NextResponse.json({ message: SUCCESS_MESSAGE });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;">
      <h1 style="font-family:Georgia,serif;font-weight:400;color:#1C1917;font-size:28px;margin:0 0 18px;">
        New Drafted By contact form message
      </h1>
      <p style="font-size:14px;line-height:1.7;color:#57534E;margin:0 0 12px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="font-size:14px;line-height:1.7;color:#57534E;margin:0 0 24px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <div style="border-top:1px solid #E7E5E4;padding-top:18px;font-size:15px;line-height:1.8;color:#1C1917;white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${COMPANY_NAME} <${fromEmail}>`,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Drafted By contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html,
    }),
  });

  if (!response.ok) {
    const payload = await response.text().catch(() => "");
    console.error("[draftedby/contact] resend failed", response.status, payload);
    return NextResponse.json({ error: "We could not send your message right now." }, { status: 500 });
  }

  return NextResponse.json({ message: SUCCESS_MESSAGE });
}
