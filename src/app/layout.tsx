import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Budeshi - Government Procurement Data Platform",
  description:
    "Access comprehensive government procurement data, track projects, analyze contractor performance, and contribute to transparency in public procurement across Nigeria.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    url: "https://budeshi.ng/",
    title: "Budeshi - Government Procurement Data Platform",
    description:
      "Access comprehensive government procurement data, track projects, analyze contractor performance, and contribute to transparency in public procurement across Nigeria.",
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1ckIM7rxCJyUBf2oLqIfaeFt3MgHwNScr", // Corrected for OG usage
        width: 1200,
        height: 630,
        alt: "Budeshi Open Contracting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budeshi - Government Procurement Data Platform",
    description:
      "Access comprehensive government procurement data, track projects, analyze contractor performance, and contribute to transparency in public procurement across Nigeria.",
    images: [
      "https://drive.google.com/uc?export=view&id=1ckIM7rxCJyUBf2oLqIfaeFt3MgHwNScr", // Same fix as above
    ],
    site: "https://budeshi.ng/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
