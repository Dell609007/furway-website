import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://furway.app/privacy",
    languages: {
      en: "https://furway.app/privacy",
      el: "https://furway.app/el/privacy",
      "x-default": "https://furway.app/privacy",
    },
  },
};
export default function PrivacyPage() {
return ( <div className="max-w-4xl mx-auto px-6 py-8 text-[#0D3D35]">


  <h1 className="text-5xl font-bold text-[#FF6B4A]">
    Privacy Policy
  </h1>

  <p className="text-sm text-gray-500 mt-4 mb-10">
    Last Updated: June 4, 2026
  </p>

  <div className="space-y-8">

    <section>
      <p>
        Furway ("we", "our", or "us") is committed to protecting your
        privacy and handling your personal information responsibly.
      </p>

      <p className="mt-4">
        This Privacy Policy explains what information we collect, how we
        use it, and the choices available to you when using the Furway
        platform.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">
        1. Information We Collect
      </h2>

      <h3 className="font-semibold mb-2">Account Information</h3>

      <ul className="list-disc ml-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Profile picture</li>
        <li>
          Authentication information provided through Google Sign-In or
          email registration
        </li>
      </ul>

<h3 className="font-semibold mb-2">
  Communications and Launch Notifications
</h3>
<ul className="list-disc ml-6 mb-4">
  <li>
    Email addresses submitted by users who choose to join launch
    notifications, early access programs, newsletters, or similar
    Furway communications
  </li>
</ul>

          <h3 className="font-semibold mb-2">User Content</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Missing pet reports</li>
            <li>Animal sightings</li>
            <li>Animal welfare reports</li>
            <li>Incident reports</li>
            <li>Photos uploaded by users</li>
            <li>Profile photos</li>
          </ul>

          <h3 className="font-semibold mb-2">Location Information</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Device location (when permission is granted)</li>
            <li>
              Locations associated with animal reports, sightings, and
              incidents
            </li>
          </ul>

          <h3 className="font-semibold mb-2">Technical Information</h3>
          <ul className="list-disc ml-6">
            <li>Device and application information</li>
            <li>
              Log and diagnostic information necessary for operating and
              improving the service
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            2. How We Use Information
          </h2>

          <ul className="list-disc ml-6">
            <li>Provide and maintain the Furway platform</li>
            <li>Enable user authentication and account management</li>
            <li>Display animal-related reports and sightings</li>
            <li>Improve community coordination around animal welfare</li>
            <li>Help reunite lost pets with their families</li>
            <li>Improve platform safety, reliability, and performance</li>
<li>Comply with legal obligations</li>
            <li>
  Store and update a user&apos;s most recent known location in
  order to provide nearby reports, community alerts, and
  location-based platform functionality
</li>
            <li>
  Contact users who have voluntarily consented to receive
  follow-up communications regarding feedback, reports, feature
  requests, user research, community initiatives, testimonials,
  or other activities related to the development and improvement
  of Furway
</li>
          </ul>
          <p className="mt-4">
  Where users have provided their consent, Furway may contact them
  regarding submitted feedback, reports, feature suggestions,
  participation in user research, community campaigns, testimonials,
  or other initiatives related to the development and promotion of
  the platform. Users may withdraw their consent at any time by
  contacting info@furway.app.
</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            3. Google Sign-In
          </h2>

          <p>
            Users may choose to sign in using their Google account.
          </p>

          <p className="mt-4">
            When using Google Sign-In, Furway may receive basic profile
            information such as your name, email address, and profile picture,
            subject to the permissions granted by you and Google's policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            4. Location Data
          </h2>

          <ul className="list-disc ml-6 mb-4">
            <li>Display animal sightings and reports</li>
            <li>Improve the relevance of nearby information</li>
            <li>Support community-based animal welfare activities</li>
          </ul>

          <p>
            Location information is collected only when necessary for platform
            functionality and when permission has been granted by the user.
          </p>

          <p className="mt-4">
            Furway stores a user&apos;s most recent known location in order to
            provide nearby reports, location-based notifications, and
            community safety features.
          </p>

          <p className="mt-4">
            The stored location is updated when the user accesses the
            platform. Furway does not maintain a historical record of user
            movements and only stores the user&apos;s most recent known
            location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            5. Push Notifications
          </h2>
          <p>
            Furway may send push notifications related to missing pets,
            emergency animal welfare reports, safety alerts, account-related
            notifications, and moderation actions.
          </p>

          <p className="mt-4">
            To provide these notifications, Furway may store notification
            tokens associated with a user&apos;s device.
          </p>

          <p className="mt-4">
            Users may disable push notifications at any time through their
            device settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            6. Reporting and Community Safety
          </h2>
          <p>
            Users may report content, animal reports, comments, or user
            profiles that they believe violate community guidelines or
            applicable laws.
          </p>

          <p className="mt-4">
            Information submitted through reporting tools may be reviewed by
            Furway administrators for moderation, safety, fraud prevention,
            and platform integrity purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            7. Photos and User Content
          </h2>

          <ul className="list-disc ml-6 mb-4">
            <li>Missing pets</li>
            <li>Animal sightings</li>
            <li>Animals in need</li>
            <li>Community reports</li>
            <li>User profiles</li>
          </ul>

          <p>
            Users retain ownership of the content they submit.
          </p>

          <p className="mt-4">
  Users may optionally upload screenshots, images, or other supporting
  materials when submitting reports, flagging content, or participating
  in community safety and moderation activities. Such content may be
  stored, reviewed, and processed solely for the purpose of evaluating
  reports, improving platform safety, preventing misuse, and supporting
  the intended functionality of the service.
</p>

          <p className="mt-4">
            If a user deletes their account, personal account information such
            as their profile details, email address, and profile photo may be
            removed from the platform. However, certain reports, sightings,
            missing pet reports, and other community contributions may remain
            available in an anonymized form where necessary to preserve the
            integrity, historical accuracy, and functionality of the service.
          </p>

          <p className="mt-4">
            By submitting content, users grant Furway permission to store,
            process, and display such content within the platform for its
            intended purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            8. AI-Assisted Image Processing
          </h2>

          <p>
            Furway may use artificial intelligence technologies to analyze
            images submitted by users.
          </p>

          <p className="mt-4">
            This processing may help identify animals, improve report quality,
            and support platform functionality.
          </p>

          <p className="mt-4">
            Furway may use OpenAI and other service providers to support image
            analysis and related platform functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            9. Cookies and Similar Technologies
          </h2>

          <p>
            Furway may use essential cookies and similar technologies necessary
            for authentication, security, and core platform functionality.
          </p>

          <p className="mt-4">
            These technologies help maintain user sessions, protect accounts,
            and ensure the proper operation of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            10. Data Storage and Security
          </h2>

          <p>
            Furway uses trusted third-party infrastructure providers, including
            Supabase, to store and manage platform data.
          </p>

          <p className="mt-4">
            We implement reasonable technical and organizational measures
            designed to protect personal information from unauthorized access,
            loss, misuse, or disclosure.
          </p>

          <p className="mt-4">
            However, no method of electronic storage or transmission can be
            guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            11. Data Sharing
          </h2>

          <p>
            We do not sell personal information.
          </p>

          <p className="mt-4">
            Information may be shared with the third-party service providers
            Furway uses to operate the platform — currently Google
            (authentication), Supabase (data storage), and OpenAI (image
            analysis used to filter inappropriate content and support
            matching of stray animal reports) — only to the extent necessary
            to provide these services.
          </p>

          <p className="mt-4">
            We may disclose information if required to comply with applicable
            laws or legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            12. Your Rights
          </h2>

          <p className="mb-4">
            Depending on your location and applicable laws, including the GDPR,
            you may have the right to:
          </p>

          <ul className="list-disc ml-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Restrict certain processing activities</li>
            <li>Object to certain processing activities</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            13. Changes to This Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time.
          </p>

          <p className="mt-4">
            Any changes will be posted on this page with an updated revision
            date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            14. Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy or your personal
            information, please contact us at:
          </p>

          <p className="mt-4 font-semibold">
            info@furway.app
          </p>
        </section>

      </div>
    </div>
  );
}