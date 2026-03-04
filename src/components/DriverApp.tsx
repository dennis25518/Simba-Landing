import React from "react";
import {
  Truck,
  Clock,
  DollarSign,
  HeadsetIcon,
  Award,
  MapPin,
  Download,
  Smartphone,
  Star,
} from "lucide-react";

const DriverApp: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Truck className="w-16 h-16 mx-auto text-orange-600 mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Earn On Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
              Own Schedule
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of drivers earning competitive income with
            flexibility. Download the SIMBA Driver app today and start
            delivering.
          </p>
        </div>
      </section>

      {/* Why Drive with SIMBA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Why Earn with SIMBA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Your Schedule",
                description:
                  "Work whenever you want. Set your own hours and take breaks when needed.",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Competitive Earnings",
                description:
                  "Earn between 3,000 - 8,000 KES per day with bonuses for consistency and ratings.",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Coverage Everywhere",
                description:
                  "Deliver across multiple cities and neighborhoods with high demand.",
              },
              {
                icon: <HeadsetIcon className="w-8 h-8" />,
                title: "24/7 Support",
                description:
                  "Get help anytime with our dedicated driver support team.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Performance Rewards",
                description:
                  "Earn bonuses for completion rates, ratings, and safe driving records.",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Driver Appreciation",
                description:
                  "Referral bonuses, insurance coverage, and exclusive driver perks.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="text-orange-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Get Started Delivering
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Download the App",
                description:
                  "Get the SIMBA Driver app on iOS or Android from the app stores",
              },
              {
                step: "2",
                title: "Complete Your Profile",
                description:
                  "Add vehicle details, license information, and bank account for payouts",
              },
              {
                step: "3",
                title: "Pass Verification",
                description:
                  "Complete background checks and safety verification (usually 24-48 hours)",
              },
              {
                step: "4",
                title: "Start Accepting Deliveries",
                description:
                  "Turn on the app and start accepting delivery requests in real-time",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Driver Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                To Get Started
              </h3>
              <ul className="space-y-4">
                {[
                  "18+ years old",
                  "Valid driver's license",
                  "Own or have access to a vehicle",
                  "Smartphone with GPS capability",
                  "Valid bank account for payouts",
                  "Insurance coverage for vehicle",
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-orange-600 text-white">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We Provide
              </h3>
              <ul className="space-y-4">
                {[
                  "Insurance coverage during deliveries",
                  "Real-time earning updates",
                  "24/7 driver support hotline",
                  "Performance bonuses",
                  "Referral rewards program",
                  "Safe driver recognition program",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
            Potential Earnings
          </h2>
          <div className="bg-white rounded-2xl p-12 border-2 border-orange-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-orange-600 mb-2">
                  500-1000
                </div>
                <p className="text-gray-600">Per delivery</p>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-600 mb-2">
                  5000-8000
                </div>
                <p className="text-gray-600">Per day (8-10 deliveries)</p>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-600 mb-2">
                  20000+
                </div>
                <p className="text-gray-600">Per week potential</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              Earnings depend on completed deliveries, ratings, and local
              demand. Top drivers earn significantly more with bonuses and
              incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            What Our Drivers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "James K.",
                role: "Driver, Nairobi",
                text: "I love the flexibility. I work when I want and earn between 6-8k per day. The app is very user-friendly.",
              },
              {
                name: "David O.",
                role: "Driver, Kisumu",
                text: "The support team is amazing. They help with any issues immediately. Great opportunity for steady income.",
              },
              {
                name: "Samuel M.",
                role: "Driver, Mombasa",
                text: "Best part is the transparency. I can see my earnings in real-time and get paid fast.",
              },
              {
                name: "Peter N.",
                role: "Driver, Nairobi",
                text: "Referral bonuses are awesome! I've made extra money by referring other drivers.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 mx-auto opacity-90" />
          </div>
          <h2 className="text-4xl font-black mb-6">Download the Driver App</h2>
          <p className="text-xl mb-10 opacity-95">
            Join our growing network of delivery drivers earning flexible income
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              Download on App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              Get on Google Play
            </a>
          </div>
          <p className="text-sm opacity-75">
            Questions? Contact driver support at drivers@simba.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default DriverApp;
