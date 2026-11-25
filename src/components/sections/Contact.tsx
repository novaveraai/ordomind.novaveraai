import Image from "next/image";
import { EnvelopeSimple, Globe, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  const logoSrc = process.env.NODE_ENV === "development" 
    ? "/novavera-logo.png" 
    : "/ordomind.novaveraai/novavera-logo.png";

  return (
    <section id="contact" className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Nova Vera AI &mdash; Contact
          </span>
          <h2 className="font-sans text-4xl font-semibold tracking-tighter text-foreground md:text-6xl">
            Ready to organize <span className="text-accent">your time?</span>
          </h2>
          <p className="max-w-[60ch] mx-auto font-sans text-base text-zinc-400">
            Have questions about OrdoMind or need enterprise licensing? Reach out to Nova Vera AI &amp; Robotics Lab.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
              Developed by
            </span>
            <div className="relative h-16 w-48">
              <Image
                src={logoSrc}
                alt="Nova Vera AI & Robotics Lab"
                fill
                className="object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <a
            href="https://novaveraai.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          >
            <Globe size={18} />
            nova vera website
          </a>
          <a
            href="mailto:contact@novaveraai.com"
            className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          >
            <EnvelopeSimple size={18} />
            Email us
          </a>
          <a
            href="https://github.com/novaveraai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          >
            <GithubLogo size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}