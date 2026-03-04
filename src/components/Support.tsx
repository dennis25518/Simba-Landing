import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ChevronDown,
  Send,
} from "lucide-react";

const Support: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order in real-time through the SIMBA Express customer app. Simply navigate to 'Active Orders' and select your order to see live updates.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept mobile money (M-Pesa), credit cards, bank transfers, and cash on delivery. Choose your preferred method at checkout.",
    },
    {
      question: "What is the delivery timeframe?",
      answer:
        "In supported cities, we offer 30-60 minute delivery during peak hours (10 AM - 10 PM) and 60-120 minutes during off-peak hours.",
    },
    {
      question: "How can I become a merchant?",
      answer:
        "Download the SIMBA Merchant app, complete the registration process, set up your store, and start selling. Our onboarding team will guide you through each step.",
    },
    {
      question: "Is my personal data safe?",
      answer:
        "Yes. We use bank-level encryption and comply with all data protection regulations to keep your information secure.",
    },
    {
      question: "What areas do you deliver to?",
      answer:
        "We currently deliver across Dar es Salaam and surrounding areas. We're expanding to more cities. Check the app to see if your area is covered.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to support you. Find answers to your questions or contact
            us directly.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                detail: "+255 685 636 220",
                subtext: "Available 24/7",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                detail: "support@simbaxp.com",
                subtext: "Response within 2 hours",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Live Chat",
                detail: "In-app Support",
                subtext: "Instant assistance",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Us",
                detail: "Dar es Salaam",
                subtext: "Monday - Friday",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200 text-center hover:border-red-500 hover:shadow-lg transition-all"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-red-600 font-semibold mb-1">
                  {contact.detail}
                </p>
                <p className="text-sm text-gray-500">{contact.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg hover:border-red-500 transition-all"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-red-600 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border border-red-100">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Monday - Friday
                    </p>
                    <p className="text-gray-600">8:00 AM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Saturday - Sunday
                    </p>
                    <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  For urgent issues, call our emergency support line 24/7 at
                  +255 685 636 220
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
