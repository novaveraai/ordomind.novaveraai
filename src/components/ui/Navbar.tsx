"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${scrolled ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl backdrop-saturate-150" : "border-b border-transparent bg-transparent"}`}>
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link href="/" className="flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-widest text-foreground transition-opacity hover:opacity-80">
          <Image src="/ordomind-logo.png" alt="OrdoMind Logo" width={32} height={32} className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(230,0,0,0.5)]" />
          OrdoMind
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-accent">Features</a>
          <a href="#technology" className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-accent">Technology</a>
          <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-accent">Contact</a>
        </nav>
        <a href="https://github.com/novaveraai/ordomind.novaveraai" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent hover:text-white active:translate-y-[1px]">
          Download <ArrowUpRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}