import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const tooth = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 24 27" width="112" height="126"><defs><linearGradient id="t" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#CFF3EE"/></linearGradient></defs><path d="M22 11.2C19.7 11.2 18.6 9.8 16 9.8C12.4 9.8 10.2 12.6 10.2 16.6C10.2 20.5 11.2 23.4 12.3 26.5C13.1 28.8 13.7 31.7 14.3 33.4C14.8 34.8 15.4 35.6 16.4 35.6C17.7 35.6 18.2 34.3 18.5 32.6C18.9 30.4 19.9 28 22 28C24.1 28 25.1 30.4 25.5 32.6C25.8 34.3 26.3 35.6 27.6 35.6C28.6 35.6 29.2 34.8 29.7 33.4C30.3 31.7 30.9 28.8 31.7 26.5C32.8 23.4 33.8 20.5 33.8 16.6C33.8 12.6 31.6 9.8 28 9.8C25.4 9.8 24.3 11.2 22 11.2Z" fill="url(#t)"/></svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B132B 0%, #0D5C57 100%)",
        }}
      >
        {/* satori renders plain img elements, not next/image */}
        <img
          alt=""
          width={112}
          height={126}
          src={`data:image/svg+xml;base64,${Buffer.from(tooth).toString("base64")}`}
        />
      </div>
    ),
    size,
  );
}
