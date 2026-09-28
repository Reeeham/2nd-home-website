import type { ReactNode } from "react";
import "./globals.css";

// The <html>/<body> shell is rendered per-locale in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
