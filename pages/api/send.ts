import ContactFormEmail from "@/email/contact-form-email";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderEmail, message } = req.body;

    if (!senderEmail || !message) {
      throw new Error("Missing message or email");
    }

    const data = await resend.emails.send({
      from: "Contact Form <hello@shanmukeshwar.dev>",
      to: ["shanmukeshwar03@gmail.com"],
      subject: "Message from contact form",
      react: ContactFormEmail({ message, senderEmail }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
