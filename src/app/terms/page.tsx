import Link from "next/link";

export const metadata = {
  title: "TaxClaw — Terms",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
      <p className="mt-6 text-[color:var(--tc-muted)]">
        TaxClaw is provided “as is”, without warranty of any kind.
      </p>
      <h2 className="mt-10 text-xl font-semibold">Not tax advice</h2>
      <p className="mt-3 text-[color:var(--tc-muted)]">
        TaxClaw and this website do not provide tax, legal, or accounting advice.
        Verify all extracted values against source documents and consult a
        qualified professional.
      </p>
      <h2 className="mt-10 text-xl font-semibold">Local-first by default</h2>
      <p className="mt-3 text-[color:var(--tc-muted)]">
        TaxClaw is designed to run locally by default. If you opt into cloud
        inference, document content is transmitted to the selected provider.
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
