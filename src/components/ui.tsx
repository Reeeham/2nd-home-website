import type { ComponentProps, ReactNode } from "react";

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Heading({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "start" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${a}`}>
      <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-xs font-semibold tracking-wide text-pink-700 uppercase">{eyebrow}</span>
      <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl text-plum">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-plum/70">{subtitle}</p>}
    </div>
  );
}

type BtnProps = ComponentProps<"a"> & { variant?: "primary" | "secondary" | "ghost" | "whatsapp"; size?: "md" | "lg" };
export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: BtnProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 active:scale-[.98]";
  const sizes = { md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" }[size];
  const variants = {
    primary: "bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-glow hover:shadow-[0_25px_60px_-15px_rgba(244,63,124,.6)] hover:-translate-y-0.5",
    secondary: "bg-white text-pink-700 ring-1 ring-pink-200 hover:bg-pink-50 hover:-translate-y-0.5",
    ghost: "text-plum hover:text-pink-600",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe5b] hover:-translate-y-0.5 shadow-[0_20px_50px_-20px_rgba(37,211,102,.6)]",
  }[variant];
  return (
    <a className={`${base} ${sizes} ${variants} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.4 7.4 9.1 6.8c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8m8.4-18.2A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7c1.7.9 3.7 1.4 5.7 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3" />
    </svg>
  );
}
