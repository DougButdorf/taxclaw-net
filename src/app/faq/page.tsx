import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata = {
  title: "FAQ — TaxClaw",
  description: "Answers to common questions about TaxClaw tax document extraction.",
};

type QA = { q: string; a: string };

type Section = {
  title: string;
  items: QA[];
};

const SECTIONS: Section[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "What does TaxClaw actually do?",
        a: "TaxClaw reads common tax PDFs/images (W‑2s, 1099s, K‑1s) and extracts the key boxes into structured data you can review and export. It’s built to save you from manual re-typing.",
      },
      {
        q: "How do I install it?",
        a: "Install TaxClaw as an OpenClaw skill, then open the local app at http://localhost:8421. You’ll also need Ollama running for Local mode.",
      },
      {
        q: "What tax forms does it support?",
        a: "W‑2, 1099‑NEC, 1099‑INT, 1099‑DIV, 1099‑DA, 1099‑B, 1099‑MISC, 1099‑OID, K‑1, and consolidated‑1099.",
      },
      {
        q: "Does it work on Windows / Linux / Mac?",
        a: "Yes—any OS that can run OpenClaw + Ollama should work. Local performance depends on your CPU/GPU and the OCR model you choose.",
      },
    ],
  },
  {
    title: "Privacy & data",
    items: [
      {
        q: "Does my tax data leave my computer?",
        a: "In Local mode, no—everything stays on your machine. In Cloud mode, the document is sent to Claude for extraction.",
      },
      {
        q: "What’s the difference between Local and Cloud mode?",
        a: "Local mode uses Ollama (recommended: glm-ocr) and keeps data fully private, but accuracy can vary by scan quality. Cloud mode is typically more accurate, but requires an API key and a privacy acknowledgment.",
      },
      {
        q: "Where is my data stored?",
        a: "Locally, in the TaxClaw/OpenClaw workspace on your computer (plus whatever exports you download). Cloud mode still saves your results locally, but the uploaded document is processed by the cloud provider.",
      },
    ],
  },
  {
    title: "Extraction quality",
    items: [
      {
        q: "Why are all my fields empty after uploading?",
        a: "Most often the OCR model isn’t running/selected, or the document is a low-quality scan (blurry, skewed, tiny text). Switch to glm-ocr, re-run extraction, and try a cleaner PDF/image if you can.",
      },
      {
        q: "What’s the best local model to use?",
        a: "Use glm-ocr in Ollama—it's the best default balance of OCR + form understanding for TaxClaw. If you’re not getting text, confirm Ollama is running and the model is actually installed.",
      },
      {
        q: "What do the confidence scores mean? (🟢🟡🔴)",
        a: "They’re a quick “how sure is the model” signal for each field. 🟢 = likely correct, 🟡 = plausible but check it, 🔴 = treat as a guess.",
      },
      {
        q: "What does “Needs review” mean?",
        a: "TaxClaw flags a doc as “Needs review” when one or more important fields are missing or low-confidence. It’s not an error—just a heads-up to eyeball the highlighted fields.",
      },
      {
        q: "My doc was classified wrong — how do I fix it?",
        a: "Change the document type (e.g., 1099‑INT vs 1099‑DIV) and re-run extraction. Classification matters because each form has different boxes and field rules.",
      },
      {
        q: "Can I edit extracted fields if they’re wrong?",
        a: "Yes—edit the fields in the review UI, then export again. Your edits are what get exported.",
      },
    ],
  },
  {
    title: "1099-DA & crypto",
    items: [
      {
        q: "I uploaded a 1099-DA. What do I do next?",
        a: "Use TaxClaw to extract the proceeds and transaction details, then reconcile cost basis in a crypto tax tool (we recommend Koinly). Export your data and use it as your starting point.",
      },
      {
        q: "What is cost basis and why do I need it?",
        a: "Cost basis is what you originally paid for the asset (plus certain fees/adjustments). You need it to calculate gains/losses—proceeds alone only tells you the sale side.",
      },
      {
        q: "TaxClaw extracted my proceeds but not cost basis — is that normal?",
        a: "Yes—many 1099‑DA forms don’t include complete cost basis, or the broker reports it separately/partially. That’s why cost basis reconciliation (e.g., in Koinly) is usually still required.",
      },
    ],
  },
  {
    title: "Exporting & filing",
    items: [
      {
        q: "How do I export my data?",
        a: "Go to Exports and choose CSV (wide or long), JSON, or download the original ZIP. Export after you’ve reviewed and corrected any flagged fields.",
      },
      {
        q: "What’s the difference between the export formats?",
        a: "CSV (wide) = one row per document with lots of columns; CSV (long) = one row per field/value (better for analytics and pipelines). JSON preserves structure and is easiest for developers; ZIP is the original files.",
      },
      {
        q: "Can I share exports with my tax preparer?",
        a: "Yes—CSV is usually the easiest for a preparer to scan, and the ZIP is helpful if they want the originals. Always spot-check totals and key IDs (SSN/EIN, payer name, amounts) before you send.",
      },
    ],
  },
  {
    title: "Pro & roadmap",
    items: [
      {
        q: "What’s TaxClaw Pro?",
        a: "Pro is the paid tier that helps fund development and typically includes higher-accuracy Cloud extraction features and priority support. If you just want fully local/private, the core Local workflow is still the default.",
      },
      {
        q: "How do I support the project?",
        a: "Buy Pro (if it’s useful), share feedback/bug reports, and tell a friend who hates typing W‑2s. If you’re doing 1099‑DA/crypto, using the Koinly link also helps support ongoing work.",
      },
    ],
  },
];

function FAQItem({ q, a }: QA) {
  return (
    <details className="group rounded-xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] px-4 py-3">
      <summary className="cursor-pointer list-none select-none font-semibold text-[color:var(--tc-text)]">
        <div className="flex items-start justify-between gap-4">
          <span>{q}</span>
          <span className="mt-0.5 text-[color:var(--tc-muted)] transition-transform group-open:rotate-180">
            ▼
          </span>
        </div>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-[color:var(--tc-muted)]">
        {a}
      </div>
    </details>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          FAQ
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[color:var(--tc-muted)]">
          Common questions about installation, privacy, extraction quality, and
          exports.
        </p>

        <div className="mt-10 grid gap-8">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-3">
                {section.items.map((item) => (
                  <FAQItem key={item.q} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[color:var(--tc-border)] bg-[color:var(--tc-panel)] p-6">
          <div className="text-lg font-semibold">Still have questions?</div>
          <p className="mt-2 text-sm text-[color:var(--tc-muted)]">
            Send us a note — bug reports and feature requests are welcome.
          </p>
          <div className="mt-4">
            <a
              href="https://formspree.io/f/xpqjowpa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[color:var(--tc-accent)] px-5 text-sm font-semibold text-[#08101f] transition-colors hover:brightness-110"
            >
              Contact us →
            </a>
          </div>
        </div>
      </main>

      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <SiteFooter />
      </div>
    </div>
  );
}
