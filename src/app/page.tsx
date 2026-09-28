import { basePath } from "@/lib/site";

// Static export has no server redirect: pick the language client-side, with a meta-refresh fallback.
export default function Root() {
  const script = `location.replace("${basePath}/" + (/^en/i.test(navigator.language) ? "en" : "ar") + "/");`;
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta httpEquiv="refresh" content={`1; url=${basePath}/ar/`} />
        <title>2nd Home Clinic</title>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7efe6", color: "#3d2415", fontFamily: "sans-serif" }}>
        <p>
          <a href={`${basePath}/ar/`}>العربية</a> · <a href={`${basePath}/en/`}>English</a>
        </p>
      </body>
    </html>
  );
}
