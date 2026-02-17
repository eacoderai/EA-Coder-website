const nodemailer = require('nodemailer');

async function sendMail(to, source) {
  const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  const from = process.env.ZOHO_FROM || user;
  const notify = process.env.ZOHO_NOTIFY || '';
  const brand = process.env.BRAND_NAME || 'EACoder AI';

  if (!user || !pass) {
    throw new Error('SMTP not configured');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `You're on the ${brand} waitlist 🎉`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0b1220">
      <h2 style="margin:0 0 12px">${brand} — Waitlist Confirmed</h2>
      <p>Thanks for joining the waitlist! You're officially in. We'll email you as soon as early access opens.</p>
      <ul>
        <li>Perks: early-bird discount and beta invites</li>
        <li>Source: ${source || 'Website'}</li>
      </ul>
      <p style="margin-top:16px">Stay tuned,<br/>The ${brand} Team</p>
      <p style="color:#6b7280;font-size:12px;margin-top:16px">Not financial advice. Test strategies on demo accounts.</p>
    </div>
  `;

  const message = {
    from: `${brand} <${from}>`,
    to,
    subject,
    html,
  };

  if (notify) {
    message.bcc = notify;
  }

  await transporter.sendMail(message);
}

async function forwardToFormspree(body) {
  const url =
    process.env.FORMSPREE_URL ||
    'https://formspree.io/f/xreapqvd';
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch {
    return false;
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const email = (body?.email || '').toString().trim();
    const source = (body?.source || 'Website').toString().trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      res.status(400).json({ error: 'Invalid email' });
      return;
    }

    try {
      await sendMail(email, source);
      // Also forward to Formspree for your records (optional)
      await forwardToFormspree({ email, source });
      res.status(200).json({ ok: true });
      return;
    } catch (e) {
      // Fallback to Formspree only
      const ok = await forwardToFormspree({ email, source });
      if (ok) {
        res.status(200).json({ ok: true, fallback: true });
      } else {
        res.status(502).json({ error: 'Failed to send confirmation' });
      }
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

