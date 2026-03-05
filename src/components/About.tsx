import React from "react";
import { Target, Heart, Users, Zap, Globe, TrendingUp } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About SIMBA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Express
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing e-commerce across Africa by building seamless,
            integrated commerce experiences and creating sustainable economic
            opportunities for millions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 border border-red-100">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To transform commerce across Africa by providing seamless,
                affordable, and reliable solutions that empower customers to
                shop confidently, merchants to reach their full potential, and
                drivers to earn with dignity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-10 h-10 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become Africa's most trusted commerce ecosystem, enabling
                continental-scale trade that uplifts entire communities and
                creates economic opportunities for millions of entrepreneurs and
                workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "People First",
                description:
                  "We prioritize the needs and success of our customers, merchants, and employees.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description:
                  "We build with and for our communities, fostering inclusive growth.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We pursue relentless excellence in every product, service, and interaction.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Impact",
                description:
                  "We measure success by the positive impact we create for African economies.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <div className="text-red-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenario */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
            Real-World Scenario
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            
            <p className="text-lg text-justify">
              Asha owns a small retail shop in Buguruni, Dar es Salaam. Her shop
              sells basic household goods cooking oil, sugar, soap, rice, and
              snacks. It is her only source of income and supports her family.
            </p>

            <p className="text-lg text-justify">
              Every week, Asha faces the same problem: restocking.
            </p>

            <p className="text-lg text-justify">
              To restock her shop, she must wake up as early as 4:30 a.m., close
              her shop for the day, and travel to Kariakoo. She carries cash
              because most suppliers do not accept digital payments. Sometimes
              she visits three or four different wholesalers to get everything
              she needs one for rice, another for cooking oil, another for soap.
            </p>

            <p className="text-lg text-justify">
              Transport costs keep rising. Daladala fares add up, and when she
              buys in bulk, she must hire a boda boda or a small truck to bring
              the goods back. On many days, traffic delays mean she returns late
              in the evening.
            </p>

            <p className="text-lg text-justify">
              While Asha is away, her shop is closed. Customers come, find the
              door locked, and leave. Some never return. She loses sales, not
              because demand is low, but because she cannot be in two places at
              once.
            </p>

            <p className="text-lg text-justify">
              Sometimes, after all the effort, she finds that certain items are
              out of stock or prices have changed unexpectedly. With no price
              transparency or guaranteed supply, planning is difficult. She
              often restocks less than she needs, fearing losses.
            </p>

            <p className="text-lg font-semibold text-red-600 text-justify">
              This cycle repeats every week.
            </p>

            <p className="text-lg text-justify">
              Asha's experience is not unique. Across Dar es Salaam in Temeke,
              Ilala, Kinondoni, Kigamboni, and Ubungo thousands of SMEs face the
              same struggle. The lack of a structured, reliable supply chain
              forces small businesses to operate inefficiently, limits their
              growth, and keeps them informal.
            </p>

            <p className="text-lg font-semibold text-gray-900 text-justify">
              This is the problem Simba Express was built to solve.
            </p>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Key Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "Launch",
                description: "SIMBA Express launches in Dar es Salaam",
              },
              {
                year: "2025",
                title: "Growth",
                description: "Expanded to 100+ cities with 10K+ merchants",
              },
              {
                year: "2026",
                title: "Today",
                description: "Serving 1M+ customers across Tanzania",
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="text-center bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
