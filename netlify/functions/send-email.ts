import { Resend } from "resend";

const process = globalThis as any;

const resend = new Resend(process.process.env.RESEND_API_KEY);
export async function handler(event: any) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,

        body: "Method Not Allowed",
      };
    }

    const data = JSON.parse(event.body);

    const { type, name, email, message, projectType, budget } = data;

    const subject =
      type === "project"
        ? `New Project Inquiry from ${name}`
        : `New General Query from ${name}`;

    const html =
      type === "project"
        ? `
          <h2>New Project Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Project Type:</strong> ${projectType}</p>

          <p><strong>Budget:</strong> ${budget}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `
        : `
          <h2>New General Query</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: "muzafar.techx@gmail.com",

      replyTo: email,

      subject,

      html,
    });

    return {
      statusCode: 200,

      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,

      body: JSON.stringify({
        success: false,

        error,
      }),
    };
  }
}
