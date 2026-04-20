import React from 'react';
import { ChevronDown } from 'lucide-react';
import SocialLinks from './SocialLinks';
import Img from '../assets/aniks-dev-vibe.jpg';

const Hero = () => {

  const scrollToProjects = () => {
    const section = document.querySelector('#projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const section = document.querySelector('#contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* Name */}
            <p className="text-sm text-gray-500 mb-3">
              Webflow Developer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
              I build high-converting websites in{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Webflow
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Helping startups & service businesses turn visitors into customers
              with clean design, smooth interactions, and scalable Webflow builds.
            </p>

            {/* Skill Line */}
            <p className="mt-4 text-sm text-gray-500">
              Webflow • CMS • Animations • React APIs
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
              >
                View My Work
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 border border-gray-600 rounded-xl hover:border-white hover:scale-105 transition"
              >
                Hire Me
              </button>

            </div>

            {/* Social */}
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* RIGHT (Image) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">

              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

              {/* Image */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gray-700">
                <img
                  src={Img}
                  alt="Anik Roy"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToProjects} className="text-gray-500 hover:text-white transition">
          <ChevronDown size={28} />
        </button>
      </div>

    </section>
  );
};

export default Hero;