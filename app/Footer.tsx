"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isGreek = pathname.startsWith("/el");
  const prefix = isGreek ? "/el" : "";

  return (
    <footer className="py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
        <p className="mb-5">© 2026 Furway</p>

        <div className="flex justify-center gap-6">
          <a href={`${prefix}/privacy`}>
            {isGreek ? "Πολιτική Απορρήτου" : "Privacy Policy"}
          </a>
          <a href={`${prefix}/terms`}>
            {isGreek ? "Όροι Χρήσης" : "Terms of Service"}
          </a>
          <a href={`${prefix}/contact`}>
            {isGreek ? "Επικοινωνία" : "Contact"}
          </a>
        </div>
      </div>
    </footer>
  );
}