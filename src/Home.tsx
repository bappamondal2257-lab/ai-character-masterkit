import { useState } from 'react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

interface Feature {
  title: string
  description: string
}

interface Step {
  label: string
  title: string
  description: string
}

interface Faq {
  q: string
  a: string
}

const steps: Step[] = [
  {
    label: 'Capture',
    title: 'Lock the seed on your reference shot',
    description:
      'Generate your character once, record the seed number, tool, and exact prompt the moment the face is right.',
  },
  {
    label: 'Log',
    title: 'Enter it into the Identity Tracker',
    description:
      'One row per character. Seed, base prompt, negative prompt, and reference filename — all in one place.',
  },
  {
    label: 'Reuse',
    title: 'Apply the same seed to every new scene',
    description:
      'Swap outfit, pose, or background in the prompt and keep the seed fixed. The underlying face holds.',
  },
  {
    label: 'Audit',
    title: 'Spot-check against the reference',
    description:
      'Compare new renders side-by-side with row one. Drift shows up fast when you know what to look for.',
  },
]

const features: Feature[] = [
  {
    title: 'Identity Tracker Template',
    description:
      'A ready-to-use spreadsheet for logging every seed, prompt, and reference image tied to a character — so nothing lives in your memory alone.',
  },
  {
    title: 'Locked-Prompt Library',
    description:
      'Prompt structures built specifically to hold facial features, proportions, and outfits steady across scenes and tools.',
  },
  {
    title: '30-Day Content Calendar',
    description:
      'A full month of hooks, captions, and hashtags for promoting a consistent AI character on social media from day one.',
  },
  {
    title: 'Workflow Walkthrough',
    description:
      'The exact capture–log–reuse–audit loop above, broken down step-by-step so you can run it on your very first character today.',
  },
]

const testimonials: Testimonial[] = [
  {
    name: 'Add a customer name',
    role: 'Webcomic artist',
    quote:
      'Placeholder testimonial — replace with a real quote once you have customer feedback to feature here.',
    avatar: '/assets/testimonial-1.jpg',
  },
  {
    name: 'Add a customer name',
    role: 'AI content creator',
    quote:
      'Placeholder testimonial — replace with a real quote once you have customer feedback to feature here.',
    avatar: '/assets/testimonial-2.jpg',
  },
  {
    name: 'Add a customer name',
    role: 'Indie game developer',
    quote:
      'Placeholder testimonial — replace with a real quote once you have customer feedback to feature here.',
    avatar: '/assets/testimonial-3.jpg',
  },
]

const faqs: Faq[] = [
  {
    q: 'What AI tools does this work with?',
    a: 'The method is tool-agnostic. The seed-tracking system and prompt structures apply to any platform that exposes a seed parameter, which covers most major AI image generators.',
  },
  {
    q: 'Do I need any technical or design experience?',
    a: 'No. Everything ships as plain templates — a spreadsheet, prompt text, and a written guide. There is no coding or installation involved in using them.',
  },
  {
    q: 'Is the $49 a one-time payment?',
    a: 'Yes. It is a single one-time payment for lifetime access to the current edition of the Masterkit, including future updates to this edition.',
  },
  {
    q: "What's your refund policy?",
    a: 'Replace this answer with your actual refund policy before publishing this page.',
  },
]

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="bg-elegance-bg">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-elegance-border/60 bg-elegance-bg/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg tracking-wide text-elegance-ink">
            Identity<span className="text-elegance-gold">Ledger</span>
          </span>
          <a
            href="#pricing"
            className="rounded border border-elegance-gold/50 px-5 py-2 text-sm font-medium tracking-wide text-elegance-goldSoft transition hover:bg-elegance-gold/10"
          >
            Get the Masterkit
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-fade">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 inline-block rounded border border-elegance-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-elegance-goldSoft">
              2026 Edition
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-elegance-ink md:text-5xl">
              One seed. Every scene.
              <br />
              <span className="italic text-elegance-goldSoft">The same face.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-elegance-muted">
              The AI Character Consistency Masterkit gives you the seed-tracking system,
              locked-prompt library, and workflow that stop your character's face from
              drifting between generations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#pricing"
                className="rounded bg-elegance-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-elegance-bg shadow-goldTight transition hover:bg-elegance-goldSoft"
              >
                Get instant access — $49
              </a>
              <a
                href="#whats-included"
                className="text-sm font-medium text-elegance-muted underline-offset-4 hover:text-elegance-ink hover:underline"
              >
                See what's inside
              </a>
            </div>
          </div>

          {/* Signature element: the Seed Ledger — one seed, three scenes, one identity */}
          <div className="rounded border border-elegance-gold/30 bg-elegance-surface p-6 shadow-gold md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-elegance-muted">
              Identity Tracker — Row 1
            </p>
            <p className="mt-2 font-mono text-3xl text-elegance-goldSoft">Seed 482917</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Forest, cloak', 'Battle armor', 'Tavern, rain'].map((scene) => (
                <div
                  key={scene}
                  className="rounded border border-elegance-border bg-elegance-surfaceAlt px-3 py-4 text-center"
                >
                  <p className="text-xs text-elegance-ink">{scene}</p>
                  <p className="mt-2 font-mono text-[11px] text-elegance-gold">482917</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-elegance-muted">
              Same seed, three different scenes — the underlying identity never moves.
              This is the row format the Identity Tracker uses for every character you build.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl text-elegance-ink md:text-3xl">
            Same prompt. Different face. Sound familiar?
          </h2>
          <p className="mt-4 text-elegance-muted">
            Without a system for tracking seeds, reference images, and prompt structure,
            AI-generated characters drift — different eyes, different proportions, a
            different outfit you didn't ask for. That makes it nearly impossible to build a
            recognizable character across a comic, a game, or a content series.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-elegance-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl text-elegance-ink">
            The four-step loop
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-elegance-muted">
            This is the actual sequence taught in the workflow walkthrough — run it once
            per character and repeat it for every new scene.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.label} className="rounded border border-elegance-border bg-elegance-surface p-5">
                <p className="font-mono text-xs text-elegance-gold">0{i + 1}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-elegance-goldSoft">
                  {step.label}
                </p>
                <h3 className="mt-2 text-base font-semibold text-elegance-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-elegance-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="whats-included" className="border-t border-elegance-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl text-elegance-ink md:text-4xl">
            What's inside the Masterkit
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded border border-elegance-border bg-elegance-surface p-6 transition hover:border-elegance-gold/40"
              >
                <h3 className="font-display text-xl text-elegance-goldSoft">{f.title}</h3>
                <p className="mt-2 text-elegance-muted">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded border border-elegance-border">
            <img
              src="/assets/identity-tracker-preview.jpg"
              alt="Preview of the Identity Tracker spreadsheet template showing seed numbers, prompts, and reference columns"
              loading="lazy"
              className="w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs text-elegance-muted">
            Replace this image with a real screenshot of the Identity Tracker before publishing.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-elegance-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl text-elegance-ink">
            What creators are saying
          </h2>
          <p className="mt-3 text-center text-elegance-muted">
            Swap these placeholders for real customer testimonials once you have them.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded border border-elegance-border bg-elegance-surface p-6">
                <p className="text-elegance-ink">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    loading="lazy"
                    className="h-10 w-10 rounded-full border border-elegance-border object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-elegance-ink">{t.name}</p>
                    <p className="text-xs text-elegance-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t border-elegance-border/60 bg-elegance-surfaceAlt/40 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl text-elegance-ink md:text-4xl">
            Get the full Masterkit today
          </h2>
          <p className="mt-4 text-elegance-muted">
            Everything above, delivered in one download — no subscription, no upsells.
          </p>

          <div className="mt-10 rounded border border-elegance-gold/30 bg-elegance-surface p-8 shadow-gold md:p-10">
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-2xl text-elegance-muted line-through">$149</span>
              <span className="font-display text-5xl text-elegance-gold">$49</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-elegance-muted">
              One-time payment · Lifetime access
            </p>

            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
              {[
                'Identity Tracker Template (spreadsheet)',
                'Locked-prompt template library',
                '30-day social media content calendar',
                'Step-by-step consistency workflow guide',
                'Free updates for the 2026 edition',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-elegance-ink">
                  <span className="mt-0.5 font-mono text-elegance-gold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-10 block w-full rounded bg-elegance-gold px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-elegance-bg shadow-goldTight transition hover:bg-elegance-goldSoft"
            >
              Buy now — $49
            </a>
            <p className="mt-3 text-xs text-elegance-muted">
              Replace this button's href with your checkout URL (Stripe, Gumroad, Lemon
              Squeezy, etc.) before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-elegance-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-3xl text-elegance-ink">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded border border-elegance-border bg-elegance-surface"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-elegance-ink"
                  >
                    <span className="font-medium">{item.q}</span>
                    <span className="font-mono text-elegance-gold">{isOpen ? '–' : '+'}</span>
                  </button>
                  {isOpen && <p className="px-5 pb-4 text-sm text-elegance-muted">{item.a}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-elegance-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-elegance-muted">
          <span>© {new Date().getFullYear()} AI Character Consistency Masterkit. All rights reserved.</span>
          <span>Need help? Contact us at support@your-domain.com</span>
        </div>
      </footer>
    </main>
  )
}

export default Home
        
