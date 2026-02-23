import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaxClaw — Your taxes. Your machine. Your data.",
  description:
    "TaxClaw turns W‑2s, 1099s, and K‑1 PDFs into clean data — locally by default, without uploading your SSN to anyone.",
  metadataBase: new URL("https://taxclaw.net"),
  openGraph: {
    title: "TaxClaw",
    description:
      "Your taxes. Your machine. Your data. Local-first tax PDF extraction.",
    url: "https://taxclaw.net",
    siteName: "TaxClaw",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
