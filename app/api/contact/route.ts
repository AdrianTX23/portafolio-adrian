import { NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { getResendClient } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados mensajes seguidos — intenta de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Revisa los campos del formulario." },
      { status: 400 },
    );
  }

  const resend = getResendClient();
  if (!resend) {
    return NextResponse.json(
      { error: "El servicio de correo no está configurado." },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;
  const to = process.env.CONTACT_EMAIL_TO ?? "adrian-pico-28@hotmail.com";
  const from = process.env.CONTACT_EMAIL_FROM ?? "Portafolio <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nuevo mensaje de ${name} vía el portafolio`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
