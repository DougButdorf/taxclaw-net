import Link from "next/link";

import { SiteFooter, SiteHeader } from "../../components/site-chrome";

const KOINLY_AFFILIATE_URL =
  "https://koinly.io/?via=4C2DBEFF&utm_source=affiliate";
const GITHUB_URL = "https://github.com/DougButdorf/TaxClaw";

export const metadata = {
  title: "1099-DA & Digital Asset Taxes — TaxClaw",
  description:
    "You extracted your 1099-DA. Now get cost basis right. Without it, the IRS assumes $0 basis — and you pay taxes on your full proceeds.",
};

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 sm:py-20">
      {title ? (
        <h2 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[color:var(--tc-accent)] px-5 text-sm font-semibold text-[#08101f] transition-colors hover:brightness-110 sm:w-auto"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function DigitalAssetsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[1100px] px-5 sm:px-8">
        {/* 1) Hero */}
        <Section>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 text-sm text-[color:var(--tc-muted)]">
                Digital assets · 1099‑DA
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                You extracted your 1099‑DA. Now finish the job.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--tc-muted)]">
                A 1099‑DA shows what you sold and the proceeds — <b>not</b> what
                you paid. Without cost basis, your gains can get reported as{" "}
                <b>“$0 basis”</b> (aka: taxed on the full proceeds).
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={KOINLY_AFFILIATE_URL}>
                  Reconcile Cost Basis with Koinly
                </Button>
              </div>

              <p className="mt-4 text-sm text-[color:var(--tc-muted)]">
                Runs in your browser. Import from wallets/exchanges. Export a tax
                report.
              </p>
            </div>

            <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6">
              <div className="text-sm font-semibold">The practical reality</div>
              <div className="mt-3 space-y-2 text-sm text-[color:var(--tc-muted)]">
                <div>• Proceeds are on the 1099‑DA</div>
                <div>• Basis comes from your full history</div>
                <div>• Reconcile → calculate gains/losses</div>
                <div>• Export a filing-ready report</div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2) Why this matters */}
        <Section title="Why this matters">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "The IRS cares about gains, not proceeds.",
                body: "Proceeds are just the sale amount. Cost basis is the proof of what you actually invested — so your taxable gain is correct.",
              },
              {
                icon: "⚠️",
                title: "Missing basis usually means you overpay.",
                body: "If basis is treated as $0, your “gain” becomes your entire proceeds. That can turn a small profit into a big tax bill.",
              },
              {
                icon: "🧩",
                title: "It won’t be on your 1099‑DA.",
                body: "Exchanges report what you sold. What you paid comes from wallet transfers, other exchanges, and older history — the stuff that lives outside this one form.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-5"
              >
                <div className="text-2xl" aria-hidden>
                  {c.icon}
                </div>
                <div className="mt-3 text-base font-semibold">{c.title}</div>
                <div className="mt-2 text-sm leading-6 text-[color:var(--tc-muted)]">
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 3) What Koinly does */}
        <Section title="What Koinly does (the practical next step)">
          <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6 text-[color:var(--tc-muted)]">
            Koinly connects to your wallets and exchanges, reconstructs your full
            transaction history, and calculates cost basis using methods like{" "}
            <b className="text-[color:var(--tc-text)]">FIFO / HIFO / LIFO</b>.
            Then it generates a{" "}
            <b className="text-[color:var(--tc-text)]">tax‑ready report</b> you
            can use for filing.
          </div>
        </Section>

        {/* 4) How TaxClaw fits in */}
        <Section title="How TaxClaw fits in">
          <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6">
            <p className="text-[color:var(--tc-muted)]">
              TaxClaw extracts your 1099‑DA data locally. Koinly reconciles cost
              basis. Together you have everything you need to file.
            </p>

            <div className="mt-5">
              <div className="text-sm font-semibold">Install TaxClaw</div>
              <pre className="mt-3 overflow-x-auto rounded-xl border border-[color:var(--tc-border)] bg-[color:var(--tc-bg)] p-4 text-xs leading-5 text-[color:var(--tc-text)]">
                <code>{`openclaw skill install taxclaw`}</code>
              </pre>
              <a
                className="mt-3 inline-block text-sm font-semibold text-[color:var(--tc-accent)] hover:underline"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View TaxClaw on GitHub →
              </a>
            </div>
          </div>
        </Section>

        {/* 5) Final CTA */}
        <Section>
          <div className="rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-accent-2)] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Get your cost basis right before you file.
            </h2>
            <p className="mt-3 max-w-2xl text-[color:var(--tc-muted)]">
              You already did step 1 with TaxClaw — this is the fast way to turn
              proceeds into <b className="text-[color:var(--tc-text)]">actual gains/losses</b>.
            </p>
            <div className="mt-6">
              <Button href={KOINLY_AFFILIATE_URL}>Open Koinly →</Button>
            </div>
          </div>
        </Section>

        {/* 6) Affiliate disclosure */}
        <div className="pb-12">
          <div className="text-xs text-[color:var(--tc-muted)]">
            TaxClaw may earn a commission if you sign up for a paid Koinly plan
            via links on this page.
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm font-semibold text-[color:var(--tc-accent)] hover:underline"
            >
              ← Back to TaxClaw
            </Link>
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
