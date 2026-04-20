import React from 'react';
import { Code, Layout, Zap, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT (Main Message) */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              I build websites that don’t just look good — they convert
            </h3>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">

              <p>
                I’m a Webflow developer focused on creating clean, modern websites
                for startups and service businesses.
              </p>

              <p>
                My approach is simple — combine strong visual design with clear messaging
                and smooth interactions to turn visitors into customers.
              </p>

              <p>
                When needed, I extend Webflow with custom code using React and APIs,
                allowing for more advanced and scalable functionality.
              </p>

            </div>
          </div>

          {/* RIGHT (Capabilities instead of hobbies) */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-700/40 p-6 rounded-xl hover:bg-slate-700 transition">
              <Layout className="text-blue-400 mb-3" size={28} />
              <h4 className="text-white font-semibold mb-2">Webflow Development</h4>
              <p className="text-gray-400 text-sm">
                Pixel-perfect builds with CMS, responsiveness, and clean structure.
              </p>
            </div>

            <div className="bg-slate-700/40 p-6 rounded-xl hover:bg-slate-700 transition">
              <Zap className="text-purple-400 mb-3" size={28} />
              <h4 className="text-white font-semibold mb-2">Interactions</h4>
              <p className="text-gray-400 text-sm">
                Smooth animations and interactions that enhance user experience.
              </p>
            </div>

            <div className="bg-slate-700/40 p-6 rounded-xl hover:bg-slate-700 transition">
              <Database className="text-cyan-400 mb-3" size={28} />
              <h4 className="text-white font-semibold mb-2">CMS & Scaling</h4>
              <p className="text-gray-400 text-sm">
                Structured content systems that grow with your business.
              </p>
            </div>

            <div className="bg-slate-700/40 p-6 rounded-xl hover:bg-slate-700 transition">
              <Code className="text-green-400 mb-3" size={28} />
              <h4 className="text-white font-semibold mb-2">Custom Code</h4>
              <p className="text-gray-400 text-sm">
                Advanced features using React, APIs, and integrations when needed.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;