import DownloadForm from "./DownloadForm";

export default function DownloadPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-[#0D3D35]">
      <h1 className="text-5xl font-bold text-[#FF6B4A] mb-10">
        Furway is coming soon
      </h1>

      <div className="space-y-6 text-lg">
        <p>This journey starts with a community that cares.</p>
        <p>
          Join our Early Supporters List and help us build a future where
          stray animals are seen, lost pets are reunited faster and
          communities can work together to protect animals.
        </p>
      </div>

      <DownloadForm />

      <p className="mt-8 text-sm text-gray-600 max-w-xl">
        We will only use your email to send Furway-related updates,
        early access opportunities, launch announcements, and information
        about our future Kickstarter campaign.
      </p>

      <p className="mt-6 text-sm text-gray-600 max-w-xl">
        As Furway grows, our mission remains the same: keeping the core
        platform accessible and free for the people who help strays every day.
      </p>
    </div>
  );
}