import Link from "next/link";

const GITHUB_URL = "https://github.com/DougButdorf/TaxClaw";

export function SiteHeader() {
  return (
    <header className="sticky top-[56px] z-20 border-b border-[color:var(--tc-border)] bg-[color:var(--tc-bg)] backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-lg" aria-hidden>
            🧾🦀
          </span>
          <span>TaxClaw</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[color:var(--tc-muted)] sm:flex">
          <Link className="hover:text-[color:var(--tc-text)]" href="/#how">
            How it works
          </Link>
          <Link className="hover:text-[color:var(--tc-text)]" href="/digital-assets">
            🪙 Digital Assets
          </Link>
          <Link className="hover:text-[color:var(--tc-text)]" href="/faq">
            FAQ
          </Link>
          <Link className="hover:text-[color:var(--tc-text)]" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-[color:var(--tc-text)]" href="/#install">
            Install
          </Link>
          <Link className="hover:text-[color:var(--tc-text)]" href="/#pricing">
            Free vs Pro
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--tc-border)] py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span aria-hidden>🧾🦀</span>
            <span>TaxClaw</span>
          </div>
          <div className="mt-3 max-w-md text-sm text-[color:var(--tc-muted)]">
            TaxClaw is a data extraction tool, not a tax preparation service. AI
            extraction may produce errors. Always verify extracted data against
            your original documents. Outbranch Network LLC is not a CPA firm,
            law firm, or tax advisor. Use of TaxClaw does not constitute tax
            advice or create a professional relationship. Affiliate links to
            third-party services are disclosed where they appear. © 2026
            Outbranch Network LLC. MIT Licensed (core).{" "}
            <a
              href="https://github.com/DougButdorf/TaxClaw/blob/main/TERMS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--tc-text)] hover:underline"
            >
              Terms of Use
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/DougButdorf/TaxClaw/blob/main/PRIVACY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--tc-text)] hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-sm text-[color:var(--tc-muted)]">
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--tc-text)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
