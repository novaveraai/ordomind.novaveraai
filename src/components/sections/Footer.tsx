import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const logoSrc = process.env.NODE_ENV === "development" 
    ? "/ordomind-logo.png" 
    : "/ordomind.novaveraai/ordomind-logo.png";

  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-sans text-sm font-bold uppercase tracking-widest text-foreground">
              <Image
                src={logoSrc}
                alt="OrdoMind Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              OrdoMind
            </div>
            <p className="max-w-[50ch] font-sans text-sm leading-relaxed text-zinc-400">
              &copy; 2026 Nova Vera AI &amp; Robotics Lab. Independent Intelligence &amp; Scheduling Engine.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              ["Features", "Intelligent Scheduling"],
              ["Technology", "Deterministic Engine"],
              ["Pricing", "Commercial Software"],
              ["Documentation", "User Guide"],
              ["GitHub", "Source Code"],
              ["Nova Vera AI", "Company Lab"],
            ].map(([name, note]) => (
              <a key={name} href="#" className="group flex flex-col gap-1">
                <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
                  {name}
                  <ArrowUpRight
                    size={11}
                    weight="bold"
                    className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  {note}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026 &nbsp;&middot;&nbsp; OrdoMind &nbsp;&middot;&nbsp; Engine Online</span>
          <span>Developed by Nova Vera AI &amp; Robotics Lab</span>
        </div>
      </div>
    </footer>
  );
}