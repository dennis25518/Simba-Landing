import React from "react";
import {
  Store,
  TrendingUp,
  BarChart3,
  Users,
  Package,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

const MerchantApp: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Store className="w-16 h-16 mx-auto text-green-600 mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Grow Your Business with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Simba Express Merchant
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach thousands of customers instantly. Manage inventory
            efficiently, fulfill orders seamlessly, and grow your business
            exponentially.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Scale Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "10K+ Customers",
                description:
                  "Reach thousands of verified customers actively shopping on Simba Express",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Order Fulfillment",
                description:
                  "Deliver orders within 30-60 minutes with our logistics partners",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Sales Analytics",
                description:
                  "Track your sales, analytics, and performance in real-time",
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: "Inventory Management",
                description:
                  "Easy-to-use tools to manage stock and prevent stockouts",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Grow Revenue",
                description:
                  "Increase sales and revenue with nationwide customer reach",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multi-City Expansion",
                description:
                  "Expand your business across multiple cities with Simba Express",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 hover:shadow-lg transition-all"
              >
                <div className="text-green-600 mb-4">{benefit.icon}</div>
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

      {/* How to Get Started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Get Started in 3 Steps
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Register Your Store",
                description:
                  "Create your merchant account and complete your business profile verification",
              },
              {
                step: "2",
                title: "Add Your Products",
                description:
                  "Upload your products with descriptions, images, and pricing",
              },
              {
                step: "3",
                title: "Start Selling",
                description:
                  "Receive orders, fulfill them, and grow your business with real customers",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white font-bold text-lg">
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

      {/* Tools & Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Powerful Merchant Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Dashboard Features
              </h3>
              {[
                "Real-time order management",
                "Sales and revenue tracking",
                "Customer reviews and ratings",
                "Automated order notifications",
                "Payment processing and payouts",
                "Promotional tools and discounts",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-600 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 border-2 border-green-300">
              <Store className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Merchant Success
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our merchants earn on average 3x more revenue compared to
                traditional retail channels. With access to thousands of
                customers and guaranteed delivery partnerships, your business
                will grow faster than ever.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-green-600">
                    50K+
                  </span>
                  <span className="text-gray-700">Active Merchants</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-green-600">
                    100M+
                  </span>
                  <span className="text-gray-700">In GMV Created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Simple Commission Structure
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            No hidden fees. You only pay when you sell.
          </p>
          <div className="bg-white rounded-2xl p-12 border-2 border-green-300">
            <div className="text-5xl font-black text-green-600 mb-2">5-15%</div>
            <p className="text-xl text-gray-700 mb-8">
              Commission per order (varies by category)
            </p>
            <p className="text-gray-600 leading-relaxed">
              Start with a competitive commission rate and earn discounts as you
              grow. No monthly fees, no advertising costs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Join thousands of merchants already succeeding on SIMBA Express
          </p>
          <button
            onClick={() =>
              window.open(
                "https://simba-merchant-app.vercel.app/dashboard",
                "_blank",
              )
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg cursor-pointer border-none"
          >
            Visit Merchant Website
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MerchantApp;
