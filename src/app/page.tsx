const GITHUB_URL = "https://github.com/DougButdorf/TaxClaw";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      {title ? (
        <h2 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] px-3 py-1 text-sm text-[color:var(--tc-text)]">
      {label}
    </div>
  );
}

function Button({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex h-12 w-full items-center justify-center rounded-xl px-5 text-sm font-semibold transition-colors sm:w-auto";
  const primary =
    "bg-[color:var(--tc-accent)] text-[#08101f] hover:brightness-110";
  const secondary =
    "border border-[color:var(--tc-border)] bg-transparent text-[color:var(--tc-text)] hover:bg-[color:var(--tc-accent-2)]";

  return (
    <a
      href={href}
      className={`${base} ${variant === "primary" ? primary : secondary}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-[56px] z-10 border-b border-[color:var(--tc-border)] bg-[color:var(--tc-bg)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="text-lg" aria-hidden>
              🧾🦀
            </span>
            <span>TaxClaw</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[color:var(--tc-muted)] sm:flex">
            <a className="hover:text-[color:var(--tc-text)]" href="#how">
              How it works
            </a>
            <a className="hover:text-[color:var(--tc-text)]" href="#privacy">
              Privacy
            </a>
            <a className="hover:text-[color:var(--tc-text)]" href="#install">
              Install
            </a>
            <a className="hover:text-[color:var(--tc-text)]" href="#pricing">
              Free vs Pro
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1100px] px-5 sm:px-8">
        {/* 1) Hero */}
        <Section id="hero">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] px-4 py-2 text-xl">
                  🧾🦀
                </div>
                <div className="text-sm text-[color:var(--tc-muted)]">
                  Local-first tax extraction
                </div>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Your taxes. Your machine. Your data.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--tc-muted)]">
                TaxClaw turns W‑2s, 1099s, and K‑1 PDFs into clean data — locally
                by default, without uploading your SSN to anyone.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={GITHUB_URL} variant="primary">
                  Get TaxClaw free
                </Button>
                <Button href={GITHUB_URL} variant="secondary">
                  View on GitHub
                </Button>
              </div>

              <p className="mt-4 text-sm text-[color:var(--tc-muted)]">
                Runs on your machine. Exports CSV/JSON. No account required.
              </p>
            </div>

            <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6">
              <div className="flex flex-wrap gap-2">
                <Pill label="Local mode (default)" />
                <Pill label="CSV / JSON exports" />
                <Pill label="W‑2 · 1099s · K‑1" />
                <Pill label="1099‑DA ready" />
              </div>
              <div className="mt-6 rounded-xl border border-[color:var(--tc-border)] bg-[color:var(--tc-bg)] p-4 font-mono text-xs leading-5 text-[color:var(--tc-muted)]">
                <div className="text-[color:var(--tc-text)]">$ taxclaw ingest</div>
                <div>→ extract fields (local)</div>
                <div>→ flag anything uncertain</div>
                <div>→ export clean CSV/JSON</div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2) The problem */}
        <Section id="problem" title="Why are we still retyping boxes in 2026?">
          <ul className="space-y-4 text-[color:var(--tc-muted)]">
            <li>
              You’re handed a stack of PDFs and asked to become a human OCR
              engine.
            </li>
            <li>
              One fat-fingered digit can turn into hours of cleanup (or a
              notice).
            </li>
            <li>
              Most “AI tax tools” start with: <em>upload your most sensitive documents to our servers.</em>
            </li>
          </ul>
        </Section>

        {/* 3) How it works */}
        <Section id="how" title="How it works">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "📥 Upload",
                body: "Drop your PDF (or let your agent do it).",
              },
              {
                title: "🤖 Extract",
                body: "AI reads the fields. Locally. No uploads to strangers.",
              },
              {
                title: "✅ Review",
                body: "Check anything flagged. Edit if needed.",
              },
              {
                title: "📤 Export",
                body: "Clean CSV or JSON. Hand it to your CPA or spreadsheet.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5"
              >
                <div className="text-base font-semibold">{s.title}</div>
                <div className="mt-2 text-sm leading-6 text-[color:var(--tc-muted)]">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 4) Install TaxClaw */}
        <Section id="install" title="Install TaxClaw">
          <p className="max-w-2xl text-[color:var(--tc-muted)]">
            It&apos;s an OpenClaw skill — install in seconds.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5">
              <div className="text-sm font-semibold">Option 1 — Agent install (recommended for OpenClaw users)</div>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-[color:var(--tc-border)] bg-[color:var(--tc-bg)] p-4 text-xs leading-5 text-[color:var(--tc-text)]">
                <code>{`Tell your agent: "Install the TaxClaw skill"
Or send directly: openclaw skill install taxclaw`}</code>
              </pre>
            </div>

            <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5">
              <div className="text-sm font-semibold">Option 2 — GitHub (any machine)</div>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-[color:var(--tc-border)] bg-[color:var(--tc-bg)] p-4 text-xs leading-5 text-[color:var(--tc-text)]">
                <code>{`git clone https://github.com/DougButdorf/TaxClaw
cd taxclaw && ./setup.sh && ./start.sh
# Opens at http://localhost:8421`}</code>
              </pre>
            </div>

            <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5">
              <div className="text-sm font-semibold">Option 3 — What is OpenClaw?</div>
              <p className="mt-4 text-sm leading-6 text-[color:var(--tc-muted)]">
                OpenClaw is a local AI agent platform. TaxClaw is built as a native skill — your agent can install, run,
                and interact with it directly.
              </p>
              <a
                className="mt-4 inline-block text-sm font-semibold text-[color:var(--tc-accent)] hover:underline"
                href="https://openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more at openclaw.ai →
              </a>
            </div>
          </div>
        </Section>

        {/* 5) Privacy first */}
        <Section id="privacy" title="Privacy first">
          <p className="max-w-2xl text-[color:var(--tc-muted)]">
            Tax docs aren’t “just paperwork.” They’re your SSN, your income,
            your accounts — your whole financial life.
          </p>
          <p className="mt-4 max-w-2xl text-[color:var(--tc-muted)]">
            Most AI tools lead with <em>“upload your PDFs.”</em> TaxClaw doesn’t.
          </p>

          <div className="mt-8 grid gap-3 sm:max-w-2xl">
            <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5">
              <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div>
                <div className="font-semibold">🟢 Local mode (default)</div>
                <div className="mt-1 text-sm text-[color:var(--tc-muted)]">
                  nothing leaves your machine.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5">
              <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-amber-300" />
              <div>
                <div className="font-semibold">🟡 Cloud mode (optional)</div>
                <div className="mt-1 text-sm text-[color:var(--tc-muted)]">
                  opt-in only — with an explicit privacy warning before you
                  proceed.
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-[color:var(--tc-muted)]">
            If you choose cloud inference, document content is sent to the
            selected provider. Local is the default.
          </p>
        </Section>

        {/* 5) Supported forms */}
        <Section id="forms" title="Supported forms">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "W‑2",
              "1099‑DA",
              "1099‑NEC",
              "1099‑INT",
              "1099‑DIV",
              "1099‑R",
              "1099‑B",
              "1099‑MISC",
              "1099‑G",
              "1099‑K",
              "K‑1",
              "Consolidated brokerage 1099",
            ].map((f) => (
              <div
                key={f}
                className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-4"
              >
                <div className="text-sm font-semibold">{f}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-accent-2)] p-5">
            <div className="font-semibold">🪙 1099‑DA</div>
            <div className="mt-1 text-sm text-[color:var(--tc-muted)]">
              First mandatory year is 2026. TaxClaw is ready.
            </div>
          </div>
        </Section>

        {/* 6) Agent interface panel */}
        <Section id="agent" title="">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                🤖 Your agent already knows what to do.
              </h2>
              <div className="mt-4 space-y-3 text-[color:var(--tc-muted)]">
                <p>Got a tax doc? Forward it to your AI assistant.</p>
                <p>
                  Just say &quot;add this to TaxClaw&quot; — and it’s done.
                </p>
                <p>Shows up here automatically. Already extracted.</p>
                <p>No uploading. No UI. Just review.</p>
                <p>Everything stays local. Nothing goes to the cloud.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6">
              <div className="rounded-xl border border-[color:var(--tc-border)] bg-[color:var(--tc-bg)] p-5">
                <div className="text-sm font-semibold">Agent Inbox</div>
                <div className="mt-3 space-y-2 text-sm text-[color:var(--tc-muted)]">
                  <div>• New PDF received</div>
                  <div>• Classified as: 1099‑INT</div>
                  <div>• Extracted fields (local)</div>
                  <div>• Flagged: 2 low-confidence boxes</div>
                  <div>• Ready: CSV / JSON</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-[color:var(--tc-muted)]">
                <span className="italic">
                  Under the hood: <code>taxclaw ingest &lt;file&gt; --filer doug --year 2025</code>
                </span>
              </div>
            </div>
          </div>
        </Section>


        {/* 7) Free vs Pro */}
        <Section id="pricing" title="Free vs Pro">
          <div className="grid gap-4 lg:grid-cols-2">
            {[{
              title: "🆓 Free",
              rows: [
                ["Extraction mode", "Local Ollama + Cloud (opt-in)"],
                ["Documents", "Unlimited"],
                ["Exports", "CSV, JSON"],
                ["Broker PDFs", "Standard forms"],
                ["Power workflows", "—"],
              ],
            },
            {
              title: "💼 Pro (coming soon)",
              rows: [
                ["Documents", "Unlimited"],
                ["Exports", "TurboTax 8949 export"],
                ["Broker PDFs", "Consolidated 1099 support"],
                ["Power workflows", "Batch/CPA mode"],
              ],
            }].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6"
              >
                <div className="text-lg font-semibold">{card.title}</div>
                <div className="mt-4 space-y-3">
                  {card.rows.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4">
                      <div className="text-sm text-[color:var(--tc-muted)]">{k}</div>
                      <div className="text-sm font-medium text-[color:var(--tc-text)]">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[color:var(--tc-muted)]">
            You can run TaxClaw fully local forever. Pro is for power-user
            exports + batch workflows (coming soon).
          </p>
        </Section>

        {/* Sponsor callout */}
        <div className="mt-6 rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6">
          <div className="text-sm text-[color:var(--tc-muted)]">
            💛 TaxClaw is free and open source. If it saves you time this tax season,
            consider sponsoring the project.{" "}
            <a
              href="https://github.com/sponsors/DougButdorf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--tc-text)] hover:underline"
            >
              Sponsor on GitHub →
            </a>
          </div>
        </div>

        {/* 9) Footer */}
        <footer className="border-t border-[color:var(--tc-border)] py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <span aria-hidden>🧾🦀</span>
                <span>TaxClaw</span>
              </div>
              <div className="mt-3 max-w-md text-sm text-[color:var(--tc-muted)]">
                TaxClaw is a data extraction tool, not a tax preparation service. AI extraction may produce errors. Always verify extracted data against your original documents. Outbranch Network LLC is not a CPA firm, law firm, or tax advisor. Use of TaxClaw does not constitute tax advice or create a professional relationship. Affiliate links to third-party services are disclosed where they appear. © 2026 Outbranch Network LLC. MIT Licensed (core).{" "}
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
      </main>
    </div>
  );
}
