import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteHost = siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(52, 84, 209, 0.35), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "#3454d1",
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", color: "#9ca3af", fontSize: "26px" }}>
            {siteHost}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "76px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Adrián Pico Martínez
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "36px",
            color: "#9ca3af",
            marginTop: "24px",
          }}
        >
          Ingeniero de Sistemas · Frontend Software Engineer
        </div>
      </div>
    ),
    { ...size },
  );
}
