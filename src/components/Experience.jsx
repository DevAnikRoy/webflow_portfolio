import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building real-world Webflow projects for clients and teams.
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/40 transition">

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                <Briefcase className="text-white" size={20} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Webflow Developer
                </h3>
                <p className="text-blue-400">
                  Softvence
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 text-gray-400 text-sm">
              July 2025 — Present
            </div>

          </div>

          {/* Impact Points */}
          <div className="space-y-4 text-gray-300">

            <p>
              • Built and maintained responsive Webflow websites for international clients.
            </p>

            <p>
              • Translated Figma designs into clean, production-ready Webflow builds.
            </p>

            <p>
              • Implemented CMS structures for scalable and easy content management.
            </p>

            <p>
              • Improved performance, SEO, and accessibility across multiple projects.
            </p>

            <p>
              • Extended Webflow functionality using React and custom integrations.
            </p>

          </div>

          {/* Tech (minimal, not overwhelming) */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Webflow', 'CMS', 'Figma', 'React', 'APIs'].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-slate-700 text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;