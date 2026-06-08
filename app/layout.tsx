import Link from "next/link";
import Image from "next/image";
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
  title: "Furway",
  description: "Helping communities protect animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F0F5F4]">

  <header className="max-w-6xl mx-auto w-full px-6 pt-4 flex justify-between items-center">

  <Link
    href="/"
    className="hover:opacity-80 transition"
  >
    <Image
      src="/furway-logo-transparent-1024.png"
      alt="Furway"
      width={90}
      height={90}
    />
  </Link>

  <Link
    href="/"
    className="text-[#00897B] font-semibold hover:opacity-70 transition"
  >
    🐾 Home
  </Link>

</header>

  <main className="flex-1">
    {children}
  </main>

  <footer className="py-6">
  <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
    <p className="mb-5">© 2026 Furway</p>

    <div className="flex justify-center gap-6">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</footer>
</body>
    </html>
  );
}
