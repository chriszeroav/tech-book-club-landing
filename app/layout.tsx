import type { Metadata } from "next";
import { Martian_Mono, Inter } from "next/font/google";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Tech Book Club Landing",
  description: "Tech Book Club Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${martianMono.variable} ${inter.variable} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
