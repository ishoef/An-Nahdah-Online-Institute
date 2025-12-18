"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import usePwaMode from "@/hooks/usePwaMode/usePwaMode";

const Hero2 = () => {
  const isStandalone = usePwaMode();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Gradient + Islamic Geometric Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#206380]/10 via-white to-[#206380]/5 dark:from-[#206380]/20 dark:via-gray-950 dark:to-[#206380]/10" />
        <div
          className="absolute inset-0 opacity-30 dark:opacity-15"
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1697730277346-a2b62a84684d?w=1600&auto=format&fit=crop&q=60")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Install Badge - Hidden in PWA mode */}
            {!isStandalone && (
              <div className="inline-flex items-center gap-2 bg-[#206380] text-white px-5 py-2 text-sm font-medium rounded-full shadow-lg animate-pulse">
                <Download className="w-4 h-4" />
                Install App for Offline Access
              </div>
            )}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white">
                  Master Islam & Modern
                </span>
                <span className="block bg-gradient-to-r from-[#206380] to-[#2d8cab] bg-clip-text text-transparent">
                  Skills Together
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                An-Nahdah Institute brings you authentic Islamic education from
                qualified scholars, combined with practical life skills — all in
                one beautiful, easy-to-use platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-3 px-8 py-6 text-lg font-semibold text-white rounded-xl bg-[#206380] hover:bg-[#1a526d] shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Start Your Journey Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium rounded-xl border-2 border-[#206380] text-[#206380] hover:bg-[#206380] hover:text-white transition-all duration-300"
              >
                Explore All Courses
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              {[
                { number: "10K+", label: "Active Students" },
                { number: "200+", label: "Premium Courses" },
                { number: "50+", label: "World-Class Teachers" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-[#206380]" />
                    <p className="text-2xl sm:text-3xl font-bold text-[#206380]">
                      {stat.number}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl animate-float shadow-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src="/images/hero.png"
                alt="Students learning Islamic knowledge online with An-Nahdah"
                width={800}
                height={900}
                priority
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Mini Card */}
            <div className="absolute -bottom-6 -left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700 animate-b ">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#206380] to-[#2d8cab] flex items-center justify-center text-white font-bold text-xl">
                  AOI
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    An-Nahdah Online Institute
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    "Read in the name of your Lord who created."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero2;
