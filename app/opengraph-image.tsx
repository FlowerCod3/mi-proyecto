/* eslint-disable @next/next/no-img-element -- ImageResponse renders regular img elements. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Amor, estética facial y manicure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [backgroundData, logoData] = await Promise.all([
  readFile(join(process.cwd(), "public", "power-of-dreams.jpg"), "base64"),
  readFile(join(process.cwd(), "public", "amor-logo-clean.png"), "base64"),
]);

const backgroundSrc = `data:image/jpeg;base64,${backgroundData}`;
const logoSrc = `data:image/png;base64,${logoData}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.34)), url(${backgroundSrc})`,
          backgroundPosition: "center 35%",
          backgroundSize: "cover",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          alt={alt}
          src={logoSrc}
          style={{
            height: "358px",
            objectFit: "contain",
            position: "relative",
            width: "820px",
          }}
        />
      </div>
    ),
    size,
  );
}
