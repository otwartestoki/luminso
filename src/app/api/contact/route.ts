import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Brakuje RESEND_API_KEY w zmiennych środowiskowych." },
        { status: 500 },
      );
    }

    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message || !isValidEmail(email)) {
      return Response.json(
        { error: "Uzupełnij poprawnie imię, email i wiadomość." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Luminso <kontakt@luminso.pl>",
      to: "kontakt@luminso.pl",
      replyTo: email,
      subject: `Nowa wiadomość ze strony od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza Luminso</h2>
        <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    void error;
    return Response.json(
      { error: "Błąd wysyłania wiadomości." },
      { status: 500 },
    );
  }
}
