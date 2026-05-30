import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A futuristic, highly animated education platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased h-[100dvh] bg-background text-foreground flex overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
