import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121011",
          border: "3px solid #ecd49a",
          color: "#ecd49a",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        BL
      </div>
    ),
    size,
  );
}
