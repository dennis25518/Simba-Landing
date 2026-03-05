import { Map } from "lucide-react";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Map className="w-12 h-12" />
            <h1 className="text-5xl font-black">Sitemap</h1>
          </div>
          <p className="text-xl text-red-100">Navigate our website easily</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Main Pages
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo(0, 0);
                    }}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Pages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company</h2>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Press
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Products & Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Products & Services
              </h2>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Customer App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Merchant App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Driver App
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Legal & Policies
              </h2>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-red-600 hover:text-red-700 font-semibold transition-colors cursor-pointer bg-none border-none"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-red-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-4">
                Have questions? We'd love to hear from you. Contact us at:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@simbaxp.com"
                    className="text-red-600 hover:text-red-700"
                  >
                    support@simbaxp.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+255685636220"
                    className="text-red-600 hover:text-red-700"
                  >
                    +255 685 636 220
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Dar es Salaam, Tanzania
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
