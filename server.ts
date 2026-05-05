import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    console.log("Contact Form Submission Received:");
    console.log(`To: kaleababera35@gmail.com`);
    console.log(`From: ${name} (${email})`);
    console.log(`Message: ${message}`);

    // INTEGRATION NOTE: 
    // To send actual emails, you would use a service like Resend or SendGrid here.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    res.json({ 
      success: true, 
      message: "Message received! We'll get back to you soon." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Development URL: http://localhost:${PORT}`);
  });
}

startServer();
