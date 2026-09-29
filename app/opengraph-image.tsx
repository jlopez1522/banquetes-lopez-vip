import { ImageResponse } from "next/og";

export const alt = "Eventos López VIP - no realizamos eventos, cumplimos sueños";
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
          background: "#090909",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ color: "#f1cf78", fontSize: 24, letterSpacing: 8, textTransform: "uppercase" }}>
          Recepciones y eventos
        </div>
        <div style={{ marginTop: 32, fontSize: 82, fontWeight: 700, lineHeight: 1 }}>
          Eventos López VIP
        </div>
        <div style={{ marginTop: 28, color: "#f1cf78", fontSize: 32 }}>
          No realizamos eventos, cumplimos sueños
        </div>
      </div>
    ),
    size,
  );
}
