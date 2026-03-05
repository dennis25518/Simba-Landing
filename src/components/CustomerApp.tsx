import React from "react";
import {
  ShoppingCart,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Clock,
  MapPin,
  Download,
} from "lucide-react";

const CustomerApp: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <ShoppingCart className="w-16 h-16 mx-auto text-blue-600 mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Shop with Simba Express
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Customer App
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse thousands of products from trusted merchants. Fast, secure
            checkout with real-time order tracking and flexible payment options.
          </p>
        </div>
      </section>

      {/* Products Marquee Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Hundreds of <span className="text-blue-600">products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Replacing daily orders to many suppliers with a single order placed
            through one platform.
          </p>
        </div>

        {/* Scrolling Products Banner */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            background: "white",
            paddingBottom: "2rem",
          }}
        >
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              display: flex;
              gap: 2rem;
              animation: marquee-scroll 50s linear infinite;
            }
            .marquee-product {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
              flex-shrink: 0;
              width: 140px;
            }
            .marquee-circle {
              height: 140px;
              width: 140px;
              border-radius: 9999px;
              background: #f9fafb;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .marquee-circle img {
              height: 100px;
              width: 100px;
              object-fit: contain;
            }
            .marquee-product span {
              font-weight: 700;
              font-size: 0.75rem;
              text-align: center;
              color: #1f2937;
              width: 100%;
            }
          `}</style>

          <div className="marquee">
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Uf_glass_mango.png" alt="Mango Juice" />
              </div>
              <span>MANGO JUICE</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/bwanasukari-removebg.png" alt="Bwana Sukari" />
              </div>
              <span>BWANA SUKARI</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Energy%20Can.png" alt="Energy Can" />
              </div>
              <span>ENERGY CAN</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Fursana.png" alt="Fursana" />
              </div>
              <span>FURSANA</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/guava.png" alt="Guava Juice" />
              </div>
              <span>GUAVA JUICE</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Juicy%20fruty.png" alt="Juicy Fruity" />
              </div>
              <span>JUICY FRUITY</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/kisima%20water.png" alt="Kisima Water" />
              </div>
              <span>KISIMA WATER</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Punch%20Can.png" alt="Punch" />
              </div>
              <span>PUNCH</span>
            </div>

            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Uf_glass_mango.png" alt="Mango Juice" />
              </div>
              <span>MANGO JUICE</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/bwanasukari-removebg.png" alt="Bwana Sukari" />
              </div>
              <span>BWANA SUKARI</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Energy%20Can.png" alt="Energy Can" />
              </div>
              <span>ENERGY CAN</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Fursana.png" alt="Fursana" />
              </div>
              <span>FURSANA</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/guava.png" alt="Guava Juice" />
              </div>
              <span>GUAVA JUICE</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Juicy%20fruty.png" alt="Juicy Fruity" />
              </div>
              <span>JUICY FRUITY</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/kisima%20water.png" alt="Kisima Water" />
              </div>
              <span>KISIMA WATER</span>
            </div>
            <div className="marquee-product">
              <div className="marquee-circle">
                <img src="/Punch%20Can.png" alt="Punch" />
              </div>
              <span>PUNCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Why Shop with Simba Express?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast Delivery",
                description:
                  "Get your orders delivered within 30-60 minutes in supported cities",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Transactions",
                description:
                  "Bank-level encryption protects all your personal and payment information",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Real-Time Tracking",
                description:
                  "Track your order live from merchant to your doorstep",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Wide Coverage",
                description:
                  "Shop from merchants across Dar es Salaam and surrounding areas",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multiple Payment Methods",
                description:
                  "Pay with M-Pesa, credit cards, bank transfers, or cash on delivery",
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "Trusted Merchants",
                description:
                  "Shop from verified sellers with excellent ratings and reviews",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
            How It Works
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Browse & Select",
                description:
                  "Browse thousands of products from trusted merchants in your area",
              },
              {
                step: "2",
                title: "Add to Cart",
                description:
                  "Select items, quantities, and add them to your shopping cart",
              },
              {
                step: "3",
                title: "Checkout Securely",
                description:
                  "Choose your preferred payment method and complete checkout",
              },
              {
                step: "4",
                title: "Track Live",
                description:
                  "Watch your order in real-time as it's prepared and delivered",
              },
              {
                step: "5",
                title: "Receive & Rate",
                description:
                  "Receive your order and rate your experience to help others",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
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

      {/* Web vs Mobile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            How Do You Want to Shop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Web Version */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border-2 border-blue-300 overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-200/50 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <Globe className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Web Version
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Shop directly from your computer or tablet using our
                  responsive web platform. Fast, secure, and easy to use.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">No download required</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">Instant access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">Works on all devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">
                      Real-time order tracking
                    </span>
                  </li>
                </ul>
                <button
                  onClick={() =>
                    window.open("https://simba-xp.vercel.app/", "_blank")
                  }
                  className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Shopping Now
                </button>
              </div>
            </div>

            {/* Mobile App */}
            <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-12 border-2 border-purple-300 overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-purple-200/50 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <Smartphone className="w-16 h-16 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mobile App
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Download our native mobile app for the best shopping
                  experience with push notifications and offline browsing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">Push notifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">Offline browsing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">Quick checkout</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 text-white text-xs">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700">Save favorites easily</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <Download size={20} />
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: "1M+", label: "Happy Customers" },
              { number: "10K+", label: "Trusted Merchants" },
              { number: "30-60", label: "Minutes Delivery" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  {stat.number}
                </div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of customers already enjoying SIMBA Express
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://simbaxp.vercel.app")
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-600/30 transition-all text-lg"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomerApp;
