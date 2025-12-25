import Footer from "@/components/footer";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shanmukeshwar | Senior Software Development Engineer",
  description:
    "Senior Software Development Engineer specializing in Rust, distributed systems, and backend architecture.",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`${inter.className} bg-bg-primary text-text-secondary antialiased`}
      >
        <ActiveSectionContextProvider>
          <Header />
          <main className="px-4">{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
