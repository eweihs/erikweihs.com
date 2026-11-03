import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  const font = await readFile(path.join(process.cwd(), "app/fonts/fraunces-700.woff"));

  return new ImageResponse(
    <div
      style={{
        width: 800,
        height: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
      }}
    >
      <div
        style={{
          fontSize: 600,
          fontWeight: 700,
          fontFamily: "Fraunces",
          background: "linear-gradient(110deg, #78350f 0%, #b45309 55%, #d97706 100%)",
          backgroundClip: "text",
          color: "transparent",
          lineHeight: 1,
        }}
      >
        W
      </div>
    </div>,
    {
      width: 800,
      height: 800,
      fonts: [{ name: "Fraunces", data: font, style: "normal", weight: 700 }],
    },
  );
}
