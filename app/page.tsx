export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold">Furway</h1>

      <p className="mt-4 max-w-xl text-lg text-gray-600">
        Helping communities protect animals.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="rounded-lg bg-black px-5 py-3 text-white">
          Download App
        </button>

        <button className="rounded-lg border px-5 py-3">
          Learn More
        </button>
      </div>
    </main>
  );
}