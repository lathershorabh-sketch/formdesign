import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json(); // ✅ RECEIVE DATA

    const {
      firstName,
      surname,
      phone,
      email,
      dob,
      language,
      address,
      postcode,
      criminalRecord,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["lathershorabh@gmail.com"],
      subject: "New Form Submission",
      html: `
        <h2>New Driver Signup 🚗</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Surname:</strong> ${surname}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><strong>Criminal Record:</strong> ${criminalRecord}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}