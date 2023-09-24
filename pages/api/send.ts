import ContactFormEmail from "@/email/contact-form-email";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async (request: Request) => {
  try {
    const { senderEmail, message } = await request.json();

    if (!senderEmail || !message) {
      throw new Error("Missing message or email");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <hello@shanmukeshwar.dev>",
        to: ["shanmukeshwar03@gmail.com"],
        subject: "Message from contact form",
        html: ContactFormEmail({ message, senderEmail }),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    } else {
      const data = await res.json();
      throw new Error(data.error);
    }
  } catch (error) {
    const e = error as Error;
    return new Response(JSON.stringify(e.message), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
