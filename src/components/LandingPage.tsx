import React from "react";
import {
  ArrowRight,
  ShoppingCart,
  Store,
  Truck,
  Zap,
  Globe,
  Users,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import About from "./About";
import Career from "./Career";
import Press from "./Press";
import Support from "./Support";

const LandingPage: React.FC<{
  onNavigate: (path: string) => void;
  currentPage: "home" | "about" | "career" | "press" | "support";
}> = ({ onNavigate, currentPage }) => {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/simba-logo.png"
                alt="SIMBA"
                className="w-40 h-13 object-contain"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => onNavigate("home")}
                className="text-black font-bold hover:text-red-600 transition cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="text-black font-bold hover:text-red-600 transition cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => onNavigate("career")}
                className="text-black font-bold hover:text-red-600 transition cursor-pointer"
              >
                Career
              </button>
              <button
                onClick={() => onNavigate("press")}
                className="text-black font-bold hover:text-red-600 transition cursor-pointer"
              >
                Press
              </button>
              <button
                onClick={() => onNavigate("support")}
                className="text-black font-bold hover:text-red-600 transition cursor-pointer"
              >
                Support
              </button>
              <button
                onClick={() => onNavigate("user-app")}
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Conditionally Rendered */}
      {currentPage === "home" && (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                      Revolutionizing
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                        E-Commerce in Africa
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      SIMBA Express is a lightning-fast, commerce-first platform
                      transforming how businesses and customers connect across
                      Africa. One platform. Infinite possibilities.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-black text-red-600">
                        30+
                      </div>
                      <div className="text-sm text-gray-600">Cities</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-red-600">
                        10K+
                      </div>
                      <div className="text-sm text-gray-600">Merchants</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-red-600">
                        60min
                      </div>
                      <div className="text-sm text-gray-600">Delivery</div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <button
                      onClick={() => onNavigate("user-app")}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-red-600/30 transition-all active:scale-95 whitespace-nowrap"
                    >
                      Get Started Now
                      <ArrowRight size={20} />
                    </button>

                    {/* Trust Badge */}
                    <div className="flex items-center gap-4">
                      {/* User Avatars */}
                      <div className="flex -space-x-3">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                          alt="User"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                          alt="User"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                          alt="User"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                      </div>
                      {/* Trust Text */}
                      <div className="font-bold text-gray-900 text-sm">
                        TRUSTED BY 10K+ USERS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right visual */}
                <div className="relative h-96 hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 rounded-3xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/hero.jpg"
                      alt="SIMBA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scrolling Banner */}
          <section className="w-full bg-black text-white py-6 overflow-hidden">
            <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .marquee-content {
            display: flex;
            animation: scroll 20s linear infinite;
            white-space: nowrap;
          }
          .marquee-item {
            flex-shrink: 0;
            padding-right: 3rem;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 0.1em;
          }
        `}</style>
            <div className="marquee-content">
              <span className="marquee-item">• LOGISTICS</span>
              <span className="marquee-item">• DAR ES SALAAM</span>
              <span className="marquee-item">• TANZANIA</span>
              <span className="marquee-item">• REAL-TIME FULFILLMENT</span>
              <span className="marquee-item">• 24/7 FLEET</span>
              <span className="marquee-item">• SIMBA EXPRESS LOGISTICS</span>
              <span className="marquee-item">• LOGISTICS</span>
              <span className="marquee-item">• DAR ES SALAAM</span>
              <span className="marquee-item">• TANZANIA</span>
              <span className="marquee-item">• REAL-TIME FULFILLMENT</span>
              <span className="marquee-item">• 24/7 FLEET</span>
              <span className="marquee-item">• SIMBA EXPRESS LOGISTICS</span>
            </div>
          </section>

          {/* Three Apps Section */}
          <section id="apps" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="inline-block mb-6">
                  <span className="inline-block px-4 py-2 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                    OUR PLATFORM
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  Complete Commerce
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Solutions
                  </span>
                </h2>
                <p className="text-lg  text-black-700 max-w-3xl mx-auto leading-relaxed font-heavy">
                  Whether you're buying, selling, or delivering, Simba Exprss
                  has you covered. We provide seamless, integrated commerce
                  experiences for every participant in the ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Customer App */}
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-40 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:from-blue-700 group-hover:to-blue-800 transition-all">
                    <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-all">
                      <ShoppingCart className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Customer App
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Browse thousands of products from trusted merchants. Fast,
                      secure checkout with real-time order tracking and flexible
                      payment options.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Smart category browsing & search
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Dynamic delivery pricing
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Pay on delivery option
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={() =>
                        (window.location.href = "https://simbaxp.vercel.app")
                      }
                      className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <ShoppingCart size={18} />
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Merchant App */}
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-500 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-40 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center group-hover:from-green-700 group-hover:to-green-800 transition-all">
                    <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-all">
                      <Store className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Merchant App
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Reach thousands of customers instantly. Manage inventory
                      efficiently, fulfill orders seamlessly, and grow your
                      business exponentially.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Real-time inventory management
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Instant order notifications
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Business analytics & insights
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={() =>
                        (window.location.href =
                          "https://merchant.simbaxp.vercel.app")
                      }
                      className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Store size={18} />
                      Become a Merchant
                    </button>
                  </div>
                </div>

                {/* Driver App */}
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-40 bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center group-hover:from-orange-700 group-hover:to-orange-800 transition-all">
                    <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-all">
                      <Truck className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Driver App
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Earn flexibly on your schedule. Smart order routing,
                      real-time earnings tracking, and instant payouts for your
                      deliveries.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Intelligent route optimization
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Flexible work schedule
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          Instant secure payouts
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={() =>
                        (window.location.href =
                          "https://driver.simbaxp.vercel.app")
                      }
                      className="w-full py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Truck size={18} />
                      Start Delivering
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="inline-block mb-6">
                  <span className="inline-block px-4 py-2 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  Why SIMBA Leads
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    the Way
                  </span>
                </h2>
                <p className="text-lg text-black-700 max-w-3xl mx-auto leading-relaxed font-heavy">
                  Engineered for Africa's unique market needs. Designed to scale
                  across the continent. Optimized for speed and reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature cards */}
                {[
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Lightning Fast",
                    description:
                      "Delivery within 30-60 minutes in supported cities with real-time tracking and guaranteed reliability.",
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Pan-African Vision",
                    description:
                      "Starting in Tanzania. Expanding across East Africa with infrastructure built for continental scale.",
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Community Powered",
                    description:
                      "10K+ thriving merchants. 100K+ satisfied customers. Thousands of drivers earning daily.",
                  },
                  {
                    icon: <ShoppingCart className="w-8 h-8" />,
                    title: "Frictionless Commerce",
                    description:
                      "One-click ordering. Multiple payment methods. Secure transactions with pay-on-delivery flexibility.",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-2xl border border-gray-200 hover:border-red-500 hover:shadow-2xl transition-all duration-300 p-8 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center text-red-600 group-hover:from-red-200 group-hover:to-orange-200 transition-all">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section
            id="impact"
            className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20">
                <div className="inline-block mb-6">
                  <span className="inline-block px-4 py-2 bg-red-600/20 text-red-300 text-sm font-semibold rounded-full border border-red-500/30">
                    OUR IMPACT
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  Impact Across
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    Africa
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                  We're not just building a delivery service. We're creating
                  sustainable economic opportunities for thousands of African
                  entrepreneurs, drivers, and customers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "100 M+",
                    label: "In GMV",
                    description:
                      "Transaction value created for merchants and drivers",
                  },
                  {
                    number: "50K+",
                    label: "Jobs Created",
                    description:
                      "Drivers, merchants, and support staff employed",
                  },
                  {
                    number: "1M+",
                    label: "Happy Customers",
                    description: "And growing every single day",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700/50 hover:border-red-500/50 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4 group-hover:from-red-300 group-hover:to-orange-300 transition-all">
                        {stat.number}
                      </div>
                      <div className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                        {stat.label}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-block mb-8">
                  <span className="inline-block px-4 py-2 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                    JOIN THE MOVEMENT
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  Ready to Transform
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Commerce?
                  </span>
                </h2>
                <p className="text-xl text-black-700 mb-12 max-w-2xl mx-auto font-heavy leading-relaxed">
                  Join thousands of customers, merchants, and drivers already
                  transforming commerce across Africa with SIMBA Express.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <button
                    onClick={() =>
                      (window.location.href = "https://simbaxp.vercel.app")
                    }
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-600/30 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">Shop as Customer</span>
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://merchant.simbaxp.vercel.app")
                    }
                    className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-green-600/30 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">Partner as Merchant</span>
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://driver.simbaxp.vercel.app")
                    }
                    className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-600/30 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">Earn as Driver</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === "about" && <About />}
      {currentPage === "career" && <Career />}
      {currentPage === "press" && <Press />}
      {currentPage === "support" && <Support />}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="/simba-logo.png"
                  alt="SIMBA"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-400 font-semibold">
                Revolutionizing e-commerce and creating economic opportunities
                across Africa.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:text-white">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:text-white">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:text-white">in</span>
                </a>
              </div>
            </div>

            {/* Apps */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Apps
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Customer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Merchant
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Driver
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500 group-hover:text-red-400 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    +255 685 636 220
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500 group-hover:text-red-400 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    support@simbaxp.com
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500 group-hover:text-red-400 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    Dar es Salaam, Tanzania
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800"></div>

          {/* Bottom Footer */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500 text-center md:text-left font-semibold">
              &copy; 2026 SIMBA Express. All rights reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-end mt-6 md:mt-0 text-sm text-gray-500 font-semibold">
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
