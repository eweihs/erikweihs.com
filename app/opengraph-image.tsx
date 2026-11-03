import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-static";
export const alt = "Erik Weihs – Solution Architect & Engineering Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(path.join(process.cwd(), "app/fonts/fraunces-700.woff"));
  const dmSans700 = await readFile(path.join(process.cwd(), "app/fonts/dm-sans-700.woff"));
  const dmSans400 = await readFile(path.join(process.cwd(), "app/fonts/dm-sans-400.woff"));

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        position: "relative",
        background: "#f5f2ee",
        overflow: "hidden",
      }}
    >
      {/* Satori has no radial-gradient, so a blurred ellipse makes the glow behind the W */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "50%",
          width: 780,
          height: 580,
          borderRadius: "50%",
          background: "rgba(217,119,6,0.06)",
          filter: "blur(80px)",
          transform: "translateY(-50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: -160,
          top: 0,
          bottom: 0,
          width: 720,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", display: "flex", marginLeft: 80 }}>
          <div
            style={{
              fontSize: 500,
              fontWeight: 700,
              fontFamily: "Fraunces",
              color: "#E5DED7",
              lineHeight: 1,
            }}
          >
            W
          </div>
        </div>
      </div>

      {/* maxWidth keeps the text clear of the watermark */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 40px 80px 80px",
          position: "relative",
          maxWidth: 680,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            fontFamily: "Fraunces",
            background: "linear-gradient(110deg, #18181b 0%, #b45309 60%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Erik Weihs
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            fontFamily: "DM Sans",
            color: "#46464e",
            letterSpacing: "0.02em",
            marginBottom: 40,
          }}
        >
          Solution Architect & Engineering Lead
        </div>

        <div
          style={{
            width: 48,
            height: 3,
            background: "#b45309",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            fontFamily: "DM Sans",
            color: "#62626a",
            lineHeight: 1.5,
          }}
        >
          Building platforms. Leading teams. Creating impact.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 52,
          left: 80,
          fontSize: 16,
          fontWeight: 400,
          fontFamily: "DM Sans",
          color: "#a1a1aa",
          letterSpacing: "0.04em",
        }}
      >
        erikweihs.com
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: font, style: "normal", weight: 700 },
        { name: "DM Sans", data: dmSans700, style: "normal", weight: 700 },
        { name: "DM Sans", data: dmSans400, style: "normal", weight: 400 },
      ],
    },
  );
}
