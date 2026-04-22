import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akhilsharma.dev"),
  title: "Akhil Sharma — Engineering Leader",
  description:
    "Senior Engineering Manager with 14+ years building and scaling teams across AI platforms, cloud infrastructure, and enterprise SaaS.",
  openGraph: {
    title: "Akhil Sharma — Engineering Leader",
    description:
      "Senior Engineering Manager with 14+ years building and scaling teams across AI platforms, cloud infrastructure, and enterprise SaaS.",
    type: "website",
    url: "https://akhilsharma.dev",
    siteName: "Akhil Sharma",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Sharma — Engineering Leader",
    description:
      "Senior Engineering Manager with 14+ years building and scaling teams across AI platforms, cloud infrastructure, and enterprise SaaS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akhil Sharma",
  jobTitle: "Senior Engineering Manager",
  url: "https://akhilsharma.dev",
  email: "isser.akhil@gmail.com",
  sameAs: ["https://linkedin.com/in/akhilssharma"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Concordia University",
  },
  knowsAbout: [
    "AI Platforms",
    "Cloud Infrastructure",
    "Enterprise SaaS",
    "Knowledge Graphs",
    "MCP Protocol",
    "Team Leadership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
