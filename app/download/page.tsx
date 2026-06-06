"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function DownloadPage() {
      const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
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

  setMessage("Thank you for joining the journey 🐾");
  setEmail("");
};
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-[#0D3D35]">

      <div className="flex justify-end mb-6">
        <Link
          href="/"
          className="text-[#00897B] font-semibold hover:opacity-70 transition"
        >
          🐾 Furway
        </Link>
      </div>

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
   className="w-[260px] h-16 px-6 text-center bg-white border border-gray-300 rounded-xl shadow-sm"
/>

  <div className="mt-4">
  <button
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