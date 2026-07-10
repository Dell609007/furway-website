"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DownloadForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [utmSource, setUtmSource] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get("utm_source");
    if (utm) {
      setUtmSource(utm);
    }
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async () => {
    try {
      const trimmedEmail = email.trim();

      if (!trimmedEmail) {
        setMessage("Please enter your email address.");
        return;
      }

      if (!EMAIL_REGEX.test(trimmedEmail)) {
        setMessage("Please enter a valid email address.");
        return;
      }

      const { error } = await supabase
        .from("early_supporters")
        .insert([{ email: trimmedEmail, "Κανάλι": utmSource ?? "direct" }]);

      if (error) {
        if (error.message.toLowerCase().includes("duplicate")) {
          setMessage("This email is already on the list 🐾");
        } else {
          setMessage("Something went wrong. Please try again.");
        }
        return;
      }

      setMessage("");
      setEmail("");
      setShowToast(true);

      fetch("https://backend-service-hub.replit.app/api/supporters/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      }).catch(() => {});
    } catch (err: any) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#00897B] text-white px-6 py-4 rounded-xl shadow-lg max-w-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🐾</span>
            <div>
              <p className="font-semibold">Thank you for joining the journey!</p>
              <p className="text-sm text-white/90 mt-1">
                We&apos;ll let you know as soon as we have news.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="ml-2 text-white/80 hover:text-white text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 mb-8">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[260px] h-16 px-6 text-center placeholder:text-center bg-white border border-gray-300 rounded-xl shadow-sm"
        />

        <div className="mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            style={{ width: "260px" }}
            className="h-16 bg-[#00897B] text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            Join the Journey 🐾
          </button>

          {message && (
            <p className="mt-4 text-sm text-[#00897B] font-medium">
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}