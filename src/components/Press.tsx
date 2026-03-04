import React from "react";
import {
  ArrowLeft,
  Newspaper,
  Calendar,
  ExternalLink,
  Download,
  Mail,
} from "lucide-react";

const Press: React.FC<{ onNavigate: (path: string) => void }> = ({
  onNavigate,
}) => {
  const pressReleases = [
    {
      title: "SIMBA Express Reaches 1 Million Customers Milestone",
      date: "March 2026",
      excerpt:
        "Breaking records in African e-commerce with unprecedented growth across Tanzania.",
      category: "Milestone",
    },
    {
      title: "SIMBA Merchant Network Hits 10,000+ Active Sellers",
      date: "February 2026",
      excerpt:
        "Empowering the next generation of African entrepreneurs through our platform.",
      category: "Growth",
    },
    {
      title: "50,000 Driver Jobs Created Through SIMBA Express",
      date: "January 2026",
      excerpt:
        "Flexible earning opportunities transforming livelihoods across East Africa.",
      category: "Impact",
    },
    {
      title: "SIMBA Express Expands Beyond Tanzania",
      date: "December 2025",
      excerpt:
        "Pan-African expansion announced, bringing commerce transformation to East Africa.",
      category: "Expansion",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Home</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Latest news, press releases, and brand resources for SIMBA Express
          </p>
        </div>
      </section>

      {/* Press Contacts */}
      <section className="py-16 bg-red-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Press Inquiries
                </h3>
                <a
                  href="mailto:press@simbaxp.com"
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  press@simbaxp.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Media Kit</h3>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download size={16} />
                  Download Media Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-12">
            Latest News
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release, idx) => (
              <article
                key={idx}
                className="border-l-4 border-red-600 pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-all p-6"
              >
                <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                    {release.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={16} />
                    {release.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {release.excerpt}
                </p>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors">
                  Read More
                  <ExternalLink size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Media Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Logos & Branding",
                description:
                  "Official SIMBA Express logos and brand guidelines for media use.",
                action: "Download",
              },
              {
                title: "Founder Bios",
                description:
                  "Detailed biographies and professional photos of our founders.",
                action: "View",
              },
              {
                title: "Company Facts",
                description:
                  "Key facts, statistics, and milestones for your articles.",
                action: "Download",
              },
            ].map((resource, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors">
                  {resource.action}
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Featured In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "TechCrunch",
              "Forbes Africa",
              "The Next Big Thing",
              "African Tech",
            ].map((publication, idx) => (
              <div
                key={idx}
                className="text-lg font-bold text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
              >
                {publication}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Get Press Updates</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our press release mailing list for the latest news
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 font-semibold focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
