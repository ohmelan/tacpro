"use server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/content/nav";
export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (String(formData.get("company_website") ?? "").trim()) {
    return { status: "success", message: "Thank you — we'll be in touch within one business day." };
  }
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const phoneCode = String(formData.get("phone_code") ?? "+91").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const preferredLanguage = String(formData.get("preferredLanguage") ?? "").trim();
  const state = String(formData.get("state") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";
  if (!name || !email || !phone || !message) {
    return { status: "error", message: "Please fill in your name, email, phone, and message." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  if (!/^\d{10}$/.test(cleanPhone)) {
    return { status: "error", message: "Please enter a valid 10-digit phone number." };
  }
  if (!consent) {
    return { status: "error", message: "Please authorize us to contact you before sending." };
  }
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  if (!smtpHost || !smtpUser || !smtpPassword) {
    return {
      status: "error",
      message: `This form isn't fully configured yet — please email us directly at ${siteConfig.email}.`,
    };
  }
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, 
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL_FROM || `"TAC Website" <${smtpUser}>`,
      to: process.env.CONTACT_EMAIL_TO || siteConfig.email,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneCode} ${phone}\nOrganization: ${organization || "Not specified"}\nService: ${service || "Not specified"}\nPreferred language: ${preferredLanguage || "Not specified"}\nState: ${state || "Not specified"}\n\n${message}`,
    });
    return { status: "success", message: "Thank you — we'll be in touch within one business day." };
  } catch (err) {
    console.error("Contact form send failed", err);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email us directly at ${siteConfig.email}.`,
    };
  }
}
