"use client";
import { useEffect, useState } from "react";
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) { setIsHovering(true); } else { setIsHovering(false); }
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;
  return (
    <>
      <style jsx global>{`* { cursor: none !important; }`}</style>
      <div className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-100 ease-out" style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${isHovering ? 0.5 : 1})`, boxShadow: "0 0 15px rgba(230,0,0,0.8)" }} />
      <div className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50 transition-all duration-300 ease-out" style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${isHovering ? 1.5 : 1})`, opacity: isHovering ? 1 : 0.6 }} />
    </>
  );
}
