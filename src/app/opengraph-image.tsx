import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akhil Sharma — Engineering Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #f8f5f1 0%, #f0ece7 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #b45309, #92400e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fef3c7",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            AS
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#78716c",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            Engineering Leader
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#292524",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Akhil Sharma
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#78716c",
            lineHeight: 1.6,
            maxWidth: "800px",
          }}
        >
          14+ years building and scaling teams across AI platforms, cloud
          infrastructure, and enterprise SaaS. MCP, RAG, Knowledge Graphs.
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 24px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e7e5e4",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#b45309" }}>
              $1.2M
            </span>
            <span style={{ fontSize: "14px", color: "#78716c" }}>
              Cloud savings
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 24px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e7e5e4",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#b45309" }}>
              22
            </span>
            <span style={{ fontSize: "14px", color: "#78716c" }}>
              Engineers led
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 24px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e7e5e4",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#b45309" }}>
              19.7%
            </span>
            <span style={{ fontSize: "14px", color: "#78716c" }}>
              AI Overview uplift
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
