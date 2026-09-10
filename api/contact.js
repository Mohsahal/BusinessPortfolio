import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, businessName, email, phone, service, budget, details } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const htmlContent = `
      <h2>New Contact Inquiry from INFOB</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone/WhatsApp:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Business Name:</strong> ${businessName || 'Not provided'}</p>
      <p><strong>Service Requested:</strong> ${service || 'Not specified'}</p>
      <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
      <h3>Project Details:</h3>
      <p>${details || 'No details provided.'}</p>
    `;

    // Send the email
    const data = await resend.emails.send({
      from: 'INFOB Contact Form <onboarding@resend.dev>', // Update this when you add a custom domain to Resend
      to: ['hello@infob.in'], // This is the email where you will receive the notifications
      subject: `New Project Inquiry from ${name}`,
      html: htmlContent,
      reply_to: email,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return res.status(400).json({ error: data.error.message });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully.', id: data.id });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
