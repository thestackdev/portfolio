type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return `<!DOCTYPE html>
  <html>
  <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  </head>
  
  <body class="bg-gray-100 text-black">
      <div class="container mx-auto my-10">
          <div class="border-black my-10 rounded-md bg-white px-10 py-4">
              <h1 class="leading-tight">You received the following message from the contact form</h1>
              <p>${message}</p>
              <hr>
              <p>The sender's email is: ${senderEmail}</p>
          </div>
      </div>
  </body>
  </html>
  `
}
