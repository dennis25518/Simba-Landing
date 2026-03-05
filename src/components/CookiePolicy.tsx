import { Cookie } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-12 h-12" />
            <h1 className="text-5xl font-black">Cookie Policy</h1>
          </div>
          <p className="text-xl text-red-100">
            How we use cookies on our platform
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
            {/* What are Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What are Cookies?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cookies are small files that a website stores on your device
                (computer, tablet, or mobile phone) when you visit. They contain
                information about your browsing activities and preferences.
                Cookies help websites recognize you, remember your preferences,
                and provide a better user experience.
              </p>
            </div>

            {/* Why We Use Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why We Use Cookies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Simba Express uses cookies for several important reasons:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Authentication</strong> - To verify your identity
                    and keep you logged in securely
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Preferences</strong> - To remember your settings,
                    language preferences, and customizations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Analytics</strong> - To understand how users
                    interact with our platform and improve functionality
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Marketing</strong> - To deliver personalized content
                    and track marketing campaign effectiveness
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Security</strong> - To prevent fraud and protect
                    against unauthorized access
                  </span>
                </li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are necessary for the website to function
                    properly. They enable basic functionality such as page
                    navigation and access to secure areas. Without these
                    cookies, the website cannot function properly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies collect information about how you use our
                    website, such as which pages you visit and if you encounter
                    any errors. These cookies do not collect information that
                    identifies you and only capture aggregated data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies allow our website to remember choices you make
                    (such as language or region) and provide enhanced, more
                    personal features.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are used to track your visiting patterns and
                    behavior across websites. They are used by advertising
                    partners to build a profile of your interests and show you
                    relevant ads on other sites.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We may allow third-party partners to place cookies on your
                device to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Analyze platform usage through services like Google
                    Analytics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Display advertisements based on your interests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Facilitate social media integration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Process payments securely</span>
                </li>
              </ul>
            </div>

            {/* How Long Cookies Last */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Long Do Cookies Last?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Session Cookies</strong> - Deleted when you close
                    your browser
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Persistent Cookies</strong> - Remain on your device
                    for a set period (typically up to 2 years)
                  </span>
                </li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Use our cookie preference center to adjust your cookie
                    settings
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Adjust your browser settings to decline cookies (note: this
                    may affect site functionality)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Delete cookies from your browser's settings menu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Use "Do Not Track" features in your browser if available
                  </span>
                </li>
              </ul>
            </div>

            {/* Do Not Track */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Do Not Track Signals
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Some browsers include a Do Not Track feature. Currently, there
                is no industry standard for recognizing Do Not Track signals,
                and Simba Express does not respond to Do Not Track browser
                signals. However, you can use other tools to control cookies as
                described above.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="bg-red-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to periodically review this
                policy to stay informed about how we use cookies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For questions about this Cookie Policy, contact us at:{" "}
                <strong>cookies@simbaxp.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
