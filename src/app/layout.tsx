import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "DAO Proof of Contribution",
//   description:
//     "Minimal platform that tracks the contributions of a decentralized autonomous platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
