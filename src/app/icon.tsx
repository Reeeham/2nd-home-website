import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "linear-gradient(135deg,#c89a6b,#6e4626)", color: "#fff", fontSize: 300, fontWeight: 800, fontFamily: "serif" }}>
        2
      </div>
    ),
    size,
  );
}
