"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b5f78] text-white dark:bg-gray-900 dark:text-gray-100">
      {/* Top Hero */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24 flex flex-col-reverse md:flex-row gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6 w-full md:basis-2/3 text-center md:text-left">
          <h1 className="text-3xl font-bangla sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {/* Master Islam & Modern */}
            পড়, তোমার প্রভুন নামে
            <br />
            <span className="text-nhd-300 dark:text-nhd-400">
              যিনি তোমাকে সৃষ্টি করেছেন{" "}
            </span>
          </h1>

          <p className="max-w-xl font-bangla mx-auto md:mx-0 text-white/80 dark:text-gray-400 text-base sm:text-lg">
            আন-নাহদাহ ইনস্টিটিউট আপনাদের জন্য নিয়ে আসে আসল ইসলামী শিক্ষা, যোগ্য
            আলিমদের দ্বারা প্রযোজ্য, সঙ্গে আধুনিক জীবনের ব্যবহারিক দক্ষতাও — সব
            একসাথে একটি সুন্দর, ব্যবহার বান্ধব প্ল্যাটফর্মে।
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0b5f78] font-semibold hover:bg-white/90 transition dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition dark:border-gray-400/40 dark:hover:bg-gray-800"
            >
              কোর্সগুলো দেখুন
            </Link>
          </div>
        </div>

        {/* Right Image & Badges */}
        <div className="hidden md:block">
          <div className="relative w-full flex justify-center md:justify-end">
            {/* Image */}
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[520px]">
              <Image
                src="/images/hero.png"
                alt="Child holding Quran"
                width={820}
                height={520}
                priority
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>

            {/* Rating Card */}
            <div className="absolute top-6 right-2 sm:top-10 sm:-right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-xs sm:text-sm dark:bg-gray-800/60 dark:border-gray-600">
              <p className="font-bold text-base sm:text-lg text-white dark:text-gray-100">
                5.0 ⭐⭐⭐⭐⭐
              </p>
              <p className="text-white/80 dark:text-gray-400">
                Trusted by users worldwide
              </p>
            </div>

            {/* Quran Card */}
            <div className="absolute bottom-6 right-2 sm:bottom-14 sm:-right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-[260px] dark:bg-gray-800/60 dark:border-gray-600">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/quran-icon.png"
                  alt="Quran"
                  width={50}
                  height={50}
                />
                <div>
                  <p className="font-semibold text-sm text-white dark:text-gray-100">
                    Pure, guided Qur'an education
                  </p>
                  <p className="text-xs text-white/70 dark:text-gray-400">
                    Helping you connect deeply with the Book of Allah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="bg-[#b7e4f8] text-[#0b5f78] rounded-t-4xl dark:bg-gray-800 dark:text-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 items-start">
          {/* Text */}
          <div className="space-y-3 sm:col-span-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              আপনার নির্ভরযোগ্য প্ল্যাটফর্ম ইসলামী শিক্ষার জন্য
            </h3>
            <p className="text-sm leading-relaxed text-[#0b5f78]/80 dark:text-gray-400 max-w-md mx-auto sm:mx-0">
              একটি নির্ভরযোগ্য শিক্ষার স্থান যা আসল ইসলামী জ্ঞান প্রদান করে,
              যোগ্য আলিমদের দ্বারা পরিচালিত সুনির্দিষ্ট ও বিশ্বাসযোগ্য
              প্রোগ্রামের মাধ্যমে।
            </p>
          </div>

          {/* Stats */}
          {[
            { value: "৩,০০০+", label: "বিশ্বজুড়ে শিক্ষার্থী" },
            { value: "৪০০+", label: "লাইভ ও রেকর্ড করা সেশন" },
            { value: "৫০+", label: "সার্টিফায়েড শিক্ষক" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition dark:bg-gray-700/60"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0b5f78] dark:text-gray-100">
                {item.value}
              </p>
              <p className="text-sm mt-1 text-[#0b5f78]/80 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
