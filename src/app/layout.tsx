import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valida Boleto",
  description: "Selo de Confiança Descentralizado para Boletos",
  icons: {
    icon: "https://github.com/mullerhub.png",
  },
  openGraph: {
    title: "ValidaBoleto",
    description: "Selo de Confiança Descentralizado para Boletos",
    images: [
      {
        url: "https://github.com/mullerhub.png",
        alt: "Logo ValidaBoleto",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
