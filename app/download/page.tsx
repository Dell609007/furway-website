"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function DownloadPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async () => {
    try {
      if (!email) {
        setMessage("Please enter your email address.");
        return;
      }

      const { error } = await supabase
        .from("early_supporters")
        .insert([{ email }]);

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
        body: JSON.stringify({ email }),
      }).catch(() => {
        // silent fail - email already saved, confirmation email is a bonus
      });
    } catch (err: any) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 text-[#0D3D35]">

      {/* Toast popup */}
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

      <h1 className="text-5xl font-bold text-[#FF6B4A] mb-10">
        Furway is coming soon
      </h1>

      <div className="space-y-6 text-lg">

        <p>
          This journey starts with a community that cares.
        </p>

        <p>
          Join our Early Supporters List and help us build a future where
          stray animals are seen, lost pets are reunited faster and
          communities can work together to protect animals.
        </p>

      </div>

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

      <p className="mt-8 text-sm text-gray-600 max-w-xl">
        We will only use your email to send Furway-related updates,
        early access opportunities, launch announcements, and information
        about our future Kickstarter campaign.
      </p>

      <p className="mt-6 text-sm text-gray-600 max-w-xl">
        As Furway grows, our mission remains the same: keeping the core
        platform accessible and free for the people who help strays every day.
      </p>

    </main>
  );
}