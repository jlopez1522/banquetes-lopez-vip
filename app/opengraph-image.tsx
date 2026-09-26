import { ImageResponse } from "next/og";

export const alt = "Banquetes López V.I.P. - celebraciones con identidad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          background: "#121011",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ color: "#ecd49a", fontSize: 24, letterSpacing: 8, textTransform: "uppercase" }}>
          Casa de banquetes en Bogotá
        </div>
        <div style={{ marginTop: 32, fontSize: 82, fontWeight: 700, lineHeight: 1 }}>
          Banquetes López V.I.P.
        </div>
        <div style={{ marginTop: 28, color: "#ecd49a", fontSize: 32 }}>
          Organización integral de eventos
        </div>
      </div>
    ),
    size,
  );
}
