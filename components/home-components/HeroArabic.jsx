"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import usePwaMode from "@/hooks/usePwaMode/usePwaMode";

const HeroArabic = () => {
  const isStandalone = usePwaMode();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Subtle Islamic Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#206380]/8 via-white to-[#206380]/4 dark:from-[#206380]/15 dark:via-gray-950 dark:to-[#206380]/8" />
        <div
          className="absolute inset-0 opacity-25 dark:opacity-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23206380' fill-opacity='0.06'%3E%3Cpath d='M50 100C77.6 100 100 77.6 100 50S77.6 0 50 0S0 22.4 0 50s22.4 50 50 50zm0-8C73.9 92 92 73.9 92 50S73.9 8 50 8S8 26.1 8 50s18.1 42 42 42z'/%3E%3Ccircle cx='50' cy='30' r='6'/%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm28 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Large Arabic Calligraphy - "النهضة" (An-Nahdah) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-20 lg:top-20 lg:translate-x-0 opacity-10 dark:opacity-8 pointer-events-none">
        <h2 className="text-[180px] sm:text-[280px] lg:text-[360px] font-arabic leading-none select-none">
          <span className="text-[#206380]/20">النهضة</span>
        </h2>
      </div>

      {/* Secondary Calligraphy - "العلم نور" (Knowledge is Light) */}
      <div className="absolute bottom-10 right-6 lg:bottom-20 lg:right-20 opacity-10 dark:opacity-6 pointer-events-none hidden lg:block">
        <p className="text-[120px] font-arabic leading-none rotate-12 text-[#206380]/15">
          العلم نور
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-10">
            {/* Install Badge */}
            {!isStandalone && (
              <Badge className="inline-flex items-center gap-2 bg-[#206380] text-white hover:bg-[#1a526d] shadow-xl px-6 py-3 text-sm font-medium animate-pulse">
                <Download className="w-5 h-5" />
                حمل التطبيق للتعلم بدون إنترنت
              </Badge>
            )}

            {/* Bilingual Heading with Calligraphy Accent */}
            <div className="space-y-6">
              {/* Arabic Calligraphy Title */}
              <div className="flex justify-center lg:justify-start">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-arabic text-[#206380] opacity-90 leading-none">
                  معهد النهضة
                </h1>
              </div>

              {/* English Title */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white">
                  Empower Your
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#206380] to-[#2d8cab]">
                  Islamic Journey
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                تعلَّم العلوم الشرعية الأصيلة مع مهارات العصر الحديث من علماء
                أجلّاء ومدربين معتمدين، في أي وقت وأي مكان.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="group relative overflow-hidden bg-[#206380] hover:bg-[#1a526d] text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-[#206380]/30 transition-all duration-300"
              >
                <Link href="/register" className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  ابدأ الآن مجانًا
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-10 py-7 text-lg rounded-2xl border-2 border-[#206380] text-[#206380] hover:bg-[#206380] hover:text-white font-medium transition-all"
              >
                <Link href="/courses">استعرض الدورات</Link>
              </Button>
            </div>

            {/* Trust Stats with Arabic Touch */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200 dark:border-gray-800">
              {[
                { num: "١٠,٠٠٠+", label: "طالب نشط" },
                { num: "٢٠٠+", label: "دورة متميزة" },
                { num: "٥٠+", label: "عالم ومدرب" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-[#206380]" />
                    <p className="text-3xl font-bold text-[#206380] font-arabic">
                      {stat.num}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-xl mx-auto lg:mx-0 animate-float">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#206380]/10">
                <Image
                  src="/images/hero.png"
                  alt="طلاب يتعلمون مع معهد النهضة"
                  width={900}
                  height={1000}
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Quran Verse Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:-left-10 lg:translate-x-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 border border-[#206380]/20">
                <p className="text-2xl font-arabic text-[#206380] leading-tight text-center">
                  اقْرَأْ بِاسْمِ رَبِّكَ
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                  سورة العلق: ١
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Arabic Font (Add to your globals.css or layout) */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Cairo:wght@600;800&family=Reem+Kufi:wght@600&display=swap");

        .font-arabic {
          font-family: "Amiri", "Cairo", "Reem Kufi", serif;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }
          50% {
            transform: translateY(-20px) rotate(-1deg);
          }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroArabic;
