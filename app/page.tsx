export default function HomePage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-[#F0F5F4] pt-24">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-6xl font-bold mb-6 text-[#FF6B4A]">
          Furway
        </h1>

        <p className="text-2xl text-[#0D3D35] mb-10">
          Helping communities protect animals.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/download"
            className="px-8 py-4 bg-[#00897B] text-white rounded-xl hover:opacity-90 transition"
          >
            Download App
          </a>

          <a
            href="/about"
            className="px-8 py-4 border-2 border-[#00897B] text-[#00897B] rounded-xl hover:bg-[#00897B] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}