import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-5xl font-black">Privacy Policy</h1>
          </div>
          <p className="text-xl text-red-100">
            Your privacy is important to us
          </p>
          <p className="text-sm text-red-200 mt-4">
            Last updated: March 5, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Simba Express ("we," "us," "our," or "Company") operates the
                Simba Express platform. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personal Information
                  </h3>
                  <p className="leading-relaxed">
                    We collect information you voluntarily provide, including
                    name, email address, phone number, physical address, payment
                    information, and any other details you provide when creating
                    an account or using our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Automatic Information
                  </h3>
                  <p className="leading-relaxed">
                    We automatically collect certain information about your
                    device and how you interact with our platform, including IP
                    address, browser type, operating system, pages visited, and
                    the time and date of your visits.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Location Information
                  </h3>
                  <p className="leading-relaxed">
                    With your permission, we collect your location information
                    to provide delivery services, improve our platform, and send
                    you relevant offers in your area.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>To process transactions and deliver services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    To send you marketing communications and promotional offers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>To improve our platform and user experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    To comply with legal obligations and enforce our terms
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>To prevent fraud and enhance platform security</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sharing Your Information
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Service Providers</strong> - Third parties who
                    assist us in operating our platform and conducting our
                    business
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Legal Requirements</strong> - When required by law
                    or to protect our legal rights
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Business Transfers</strong> - In the event of
                    merger, acquisition, or sale of assets
                  </span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Request correction of inaccurate or incomplete information
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Request deletion of your personal information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="bg-red-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Simba Express</strong>
                </p>
                <p>Email: privacy@simbaxp.com</p>
                <p>Phone: +255 (0) 700 000 000</p>
                <p>Address: Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
