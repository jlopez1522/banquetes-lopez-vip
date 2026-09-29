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
          background: "#090909",
          border: "3px solid #c78b24",
          color: "#f1cf78",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        LV
      </div>
    ),
    size,
  );
}
