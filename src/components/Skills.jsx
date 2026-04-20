import React from 'react';
import { Layout, Zap, Database, Code } from 'lucide-react';

const Skills = () => {
  const items = [
    {
      icon: <Layout className="text-blue-400" size={28} />,
      title: "Webflow Development",
      desc: "Pixel-perfect websites with CMS, responsive layouts, and clean structure."
    },
    {
      icon: <Zap className="text-purple-400" size={28} />,
      title: "Interactions & Animations",
      desc: "Smooth, modern animations that improve user experience and engagement."
    },
    {
      icon: <Database className="text-cyan-400" size={28} />,
      title: "CMS & Scalability",
      desc: "Structured content systems that are easy to manage and scale."
    },
    {
      icon: <Code className="text-green-400" size={28} />,
      title: "Custom Development",
      desc: "Advanced features using React, APIs, and integrations when needed."
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I combine Webflow with custom code to build high-performing websites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;