export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-0 pb-16">
        
      <h1 className="text-4xl font-bold text-[#FF6B4A] mb-8">
        About Furway
      </h1>

      <div className="max-w-4xl text-lg text-[#0D3D35] space-y-6 mb-14">
        <p>
          Furway is a community-driven platform dedicated to improving the
          lives of animals through community awareness, collaboration, and
          real-time information.
        </p>

        <p>
          Every day, stray animals, lost pets, injured animals, and animals in
          need go unnoticed. Many people care, but often lack the information
          needed to take action at the right moment.
        </p>

        <p>
          Furway brings communities together by enabling people to report
          missing pets, report animals in danger, share animal sightings, and
          contribute to local animal welfare efforts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0D3D35] mb-4">
            🐾 Invisible Citizens
          </h2>

          <p className="text-gray-700">
            They live in our neighborhoods. Most people never notice them.
            Stray animals are part of our communities, yet their needs often
            remain unseen. Furway helps make animals visible through shared
            information and community awareness.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0D3D35] mb-4">
            📍 Community Map
          </h2>

          <p className="text-gray-700">
            Imagine a shared global map where people can mark where they saw
            an animal in need. A hungry dog, a lost pet, an injured animal, or
            a colony that needs food. With Furway, communities can share this
            information in real time and respond faster when animals need
            attention.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0D3D35] mb-4">
            🐶 Missing Pets
          </h2>

          <p className="text-gray-700">
            Furway helps owners share missing pet reports, so nearby
            community members get notified right away. The community shares
            real-time sightings, increasing the chances of a safe reunion.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0D3D35] mb-4">
            🍲 Care Patrol
          </h2>

          <p className="text-gray-700">
            A digital neighborhood watch for stray animal care.
          </p>

          <p className="text-gray-700 mt-4">
            Track feeding activity, water availability, shortages, and urgent
            situations in real time, helping communities coordinate care and
            ensure that no area is overlooked.
          </p>
        </div>

      </div>

      <div className="bg-[#00897B] text-white rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-6">
          Our Mission
        </h2>

        <div className="space-y-3 text-lg">
          <p>Make animals visible.</p>
          <p>Reconnect lost pets with their families.</p>
          <p>Connect communities.</p>
          <p>
            Enable faster response when animals are lost, injured, or at risk.
          </p>
          <p>Create a world where fewer animals go unnoticed.</p>
        </div>
      </div>
    </div>
  );
}