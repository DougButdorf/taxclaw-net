import Link from "next/link";

export const metadata = {
  title: "TaxClaw — Privacy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-6 text-[color:var(--tc-muted)]">
        This site is a simple marketing page. We do not run third‑party trackers
        by default.
      </p>
      <h2 className="mt-10 text-xl font-semibold">Data we collect</h2>
      <p className="mt-3 text-[color:var(--tc-muted)]">None intentionally.</p>
      <h2 className="mt-10 text-xl font-semibold">Hosting logs</h2>
      <p className="mt-3 text-[color:var(--tc-muted)]">
        Like most websites, our hosting provider may record basic request logs
        (e.g., IP address, user agent) for security and reliability.
      </p>
      <h2 className="mt-10 text-xl font-semibold">TaxClaw app privacy</h2>
      <p className="mt-3 text-[color:var(--tc-muted)]">
        TaxClaw is local-first. In local mode, nothing leaves your machine. If
        you opt into cloud inference, document content is sent to the selected
        provider.
      </p>
      <div className="mt-12">
        <Link
          className="text-sm font-semibold text-[color:var(--tc-accent)] hover:underline"
          href="/"
        >
          ← Back
        </Link>
      </div>
    </main>
  );
}
