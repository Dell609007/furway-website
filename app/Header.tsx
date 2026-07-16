"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const isGreek = pathname.startsWith("/el");
  const homeHref = isGreek ? "/el" : "/";

  // Υπολογίζει το αντίστοιχο path στην άλλη γλώσσα (π.χ. /about <-> /el/about)
  const otherLangHref = isGreek
    ? pathname.replace(/^\/el/, "") || "/"
    : `/el${pathname}`;

  return (
    <header className="max-w-6xl mx-auto w-full px-6 pt-4 flex justify-between items-center">
      <Link href={homeHref} className="hover:opacity-80 transition">
        <Image
          src="/furway-logo-transparent-1024.png"
          alt="Furway"
          width={90}
          height={90}
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href={homeHref}
          className="text-[#00897B] font-semibold hover:opacity-70 transition"
        >
          {isGreek ? "🐾 Αρχική" : "🐾 Home"}
        </Link>

        <Link
          href={otherLangHref}
          className="text-sm text-gray-600 hover:text-[#00897B] transition border border-gray-300 rounded-full px-3 py-1"
          aria-label={isGreek ? "Switch to English" : "Αλλαγή σε Ελληνικά"}
        >
          {isGreek ? "EN" : "ΕΛ"}
        </Link>
      </div>
    </header>
  );
}