import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/nav";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#FAFAF7",
        padding: "0 96px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 40,
          top: "50%",
          transform: "translateY(-50%)",
          width: 420,
          height: 420,
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          background: "#D5AF54",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 130,
          top: "62%",
          width: 220,
          height: 220,
          borderRadius: "40% 60% 55% 45% / 60% 45% 55% 40%",
          background: "#12130F",
          display: "flex",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D5AF54" }} />
        <span
          style={{
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#521421",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {siteConfig.fullName}
        </span>
      </div>
      <span
        style={{
          marginTop: 20,
          fontSize: 104,
          color: "#12130F",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        {siteConfig.name}
      </span>
      <span
        style={{
          marginTop: 16,
          fontSize: 28,
          color: "#55584A",
          fontFamily: "Arial, sans-serif",
          maxWidth: 620,
        }}
      >
        Tax, GST, audit, and compliance handled with precision.
      </span>
    </div>,
    { ...size },
  );
}
