import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", background: "#f7efe6", color: "#3d2415", minHeight: "100vh", display: "grid", placeItems: "center", margin: 0 }}>
        <main style={{ textAlign: "center" }}>
          <p style={{ fontSize: 96, fontWeight: 800, margin: 0, color: "#8f5f36" }}>404</p>
          <p>Page not found · الصفحة غير موجودة</p>
          <p style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Link href="/ar">العربية</Link>
            <Link href="/en">English</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
