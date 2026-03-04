import React from "react";
import {
  Briefcase,
  MapPin,
  Users,
  Code,
  BarChart3,
  Zap,
  CheckCircle,
} from "lucide-react";

const Career: React.FC = () => {
  const jobOpenings = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Dar es Salaam",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Dar es Salaam",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Dar es Salaam",
      type: "Full-time",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Dar es Salaam",
      type: "Full-time",
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Dar es Salaam",
      type: "Full-time",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Join the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              SIMBA Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us build the future of African e-commerce. We're looking for
            talented, passionate individuals who want to make a real impact.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Why Join SIMBA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Meaningful Impact",
                description:
                  "Direct impact on millions of customers and entrepreneurs across Africa.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Great Team",
                description:
                  "Work with talented, passionate people who share your vision.",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Growth Opportunities",
                description:
                  "Rapid career growth in a fast-growing startup environment.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Modern Tech Stack",
                description:
                  "Work with cutting-edge technologies and best practices.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Competitive Benefits",
                description:
                  "Competitive salary, health insurance, and professional development.",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Flexible Work",
                description: "Remote or office-based roles. Work your way.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-100 hover:shadow-lg transition-all"
              >
                <div className="text-red-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
            Our Culture
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg">
              At SIMBA, we believe that great products come from great teams.
              Our culture is built on trust, transparency, and a shared
              commitment to our mission.
            </p>
            <p className="text-lg">
              We value diverse perspectives, encourage bold ideas, and celebrate
              both successes and learnings. We're not afraid to experiment, and
              we believe in empowering our team members to own their work.
            </p>
            <p className="text-lg">
              Whether you're an engineer, designer, product manager, or
              operations specialist, your contributions matter. We're building
              something that will impact millions of people across Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
