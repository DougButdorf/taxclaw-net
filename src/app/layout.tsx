import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const OPENCLAW_URL = "https://openclaw.ai";
const GITHUB_URL = "https://github.com/DougButdorf/TaxClaw";

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

function OpenClawSkillBanner() {
  return (
    <div className="sticky top-0 z-20 border-b border-[color:var(--tc-border)] bg-[color:var(--tc-accent-2)] backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="text-sm font-semibold text-[color:var(--tc-text)]">
          🦞 TaxClaw is an OpenClaw skill
        </div>
        <div className="flex flex-col gap-1 text-xs text-[color:var(--tc-muted)] sm:flex-row sm:items-center sm:gap-3">
          <div>
            Install instantly:{" "}
            <code className="font-mono">openclaw skill install taxclaw</code>
          </div>
          <span className="hidden opacity-60 sm:inline">·</span>
          <div>
            Or point your agent at:{" "}
            <a
              className="font-semibold text-[color:var(--tc-accent)] hover:underline"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/DougButdorf/TaxClaw
            </a>
          </div>
          <span className="hidden opacity-60 sm:inline">·</span>
          <a
            className="text-[color:var(--tc-accent)] hover:underline"
            href={OPENCLAW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            What is OpenClaw?
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OpenClawSkillBanner />
        {children}
      </body>
    </html>
  );
}
