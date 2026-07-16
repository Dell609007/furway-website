import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://furway.app/el/contact",
    languages: {
      en: "https://furway.app/contact",
      el: "https://furway.app/el/contact",
      "x-default": "https://furway.app/contact",
    },
  },
};
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-[#0D3D35]">

      <h1 className="text-5xl font-bold text-[#FF6B4A]">
        Επικοινωνία
      </h1>

      <p className="text-sm text-gray-500 mt-4 mb-10">
        Θα χαρούμε να επικοινωνήσετε μαζί μας.
      </p>

      <div className="space-y-8">

        <section>
          <p className="text-lg">
            Για υποστήριξη, επιχειρηματικά αιτήματα, ευκαιρίες
            συνεργασίας, συνεργασίες με δήμους ή γενικές ερωτήσεις
            σχετικά με τη Furway, παρακαλούμε επικοινωνήστε μαζί μας
            στη διεύθυνση:
          </p>

          <p className="text-xl font-semibold mt-6">
            info@furway.app
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Σχετικά με τη Furway
          </h2>

          <p>
            Η Furway είναι μια εφαρμογή με επίκεντρο την κοινότητα,
            αφιερωμένη στο να βοηθά τις κοινότητες να προστατεύουν τα
            ζώα, να υποστηρίζουν την ευημερία των αδέσποτων ζώων, να
            επανασυνδέουν τα χαμένα κατοικίδια με τις οικογένειές τους
            και να βελτιώνουν τον συντονισμό μεταξύ πολιτών, εθελοντών,
            οργανώσεων για την προστασία των ζώων και δήμων.
          </p>
        </section>

      </div>
    </div>
  );
}