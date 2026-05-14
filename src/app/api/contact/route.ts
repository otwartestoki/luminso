import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Luminso <kontakt@luminso.pl>",
      to: "kontakt@luminso.pl",
      replyTo: email,
      subject: `Nowa wiadomość ze strony od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza Luminso</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Błąd wysyłania wiadomości" }, { status: 500 });
  }
}