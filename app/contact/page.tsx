import Link from "next/link";

export default function ContactPage() {
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

      <h1 className="text-5xl font-bold text-[#FF6B4A]">
        Contact
      </h1>

      <p className="text-sm text-gray-500 mt-4 mb-10">
        We'd love to hear from you.
      </p>

      <div className="space-y-8">

        <section>
          <p className="text-lg">
            For support, business inquiries, partnership opportunities,
            municipality collaborations, or general questions about Furway,
            please contact us at:
          </p>

          <p className="text-xl font-semibold mt-6">
            info@furway.app
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            About Furway
          </h2>

          <p>
            Furway is a community-driven platform dedicated to helping
            communities protect animals, support stray animal welfare,
            reunite lost pets with their families, and improve collaboration
            between citizens, volunteers, animal welfare organizations,
            and municipalities.
          </p>
        </section>

      </div>
    </main>
  );
}