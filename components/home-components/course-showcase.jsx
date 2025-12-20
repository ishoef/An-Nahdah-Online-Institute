"use client";
import Image from "next/image";
import Link from "next/link";
import Title from "../ui/title";

export default function CourseShowcase() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500"></div>

      {/* Dotted overlay */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          color: "#3b82f6",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
        {/* Title */}
        <Title
          title1={"আপনার শেখার যাত্রা শুরু হোক"}
          title2={"এখান থেকেই"}
          subTitle="আসল ইসলামী জ্ঞান ও বাস্তব জীবনের প্রয়োজনীয় দক্ষতার মাধ্যমে আপনার জ্ঞান ও আত্মাকে সমৃদ্ধ করুন — একটিমাত্র পরিপূর্ণ শেখার যাত্রায়।"
        />

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Card */}
          <div className="bg-gradient-to-bl from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#2295b8] text-sm text-white font-semibold px-4 py-1 rounded-full">
                ইসলামী জ্ঞানভিত্তিক কোর্সসমূহ
              </span>
            </div>

            <h3 className="text-xl font-semibold text-center mb-8">
              আসল ইসলামী জ্ঞানের মাধ্যমে আপনার আত্মাকে সমৃদ্ধ করুন
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { title: "আকীদা", img: "/Icons/icon-512x512.png" },
                { title: "তাফসীর", img: "/Icons/icon-512x512.png" },
                { title: "হাদীস", img: "/Icons/icon-512x512.png" },
                { title: "ফিকহ", img: "/Icons/icon-512x512.png" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[#d5f2f8] backdrop-blur-sm rounded-xl p-4 hover:bg-blue-400/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="block text-center text-sm font-semibold text-[#1f789b] dark:text-[#3eb2d2] hover:underline transition"
            >
              🎯 ফ্রি ক্লাস বুক করুন →
            </Link>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#2295b8] text-sm font-semibold px-4 py-1 rounded-full text-white">
                দক্ষতা উন্নয়ন কোর্সসমূহ
              </span>
            </div>

            <h3 className="text-xl font-semibold text-center mb-8">
              ব্যবহারিক দক্ষতায় পারদর্শী হোন, নিজেকে উন্নত করুন
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { title: "ওয়েব ডেভেলপমেন্ট", img: "/images/hero.png" },
                { title: "কৃত্রিম বুদ্ধিমত্তা", img: "/images/hero.png" },
                { title: "ডিজিটাল মার্কেটিং", img: "/images/hero.png" },
                { title: "গ্রাফিক ডিজাইন", img: "/images/hero.png" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[#d5f2f8] backdrop-blur-sm rounded-xl p-4 hover:bg-blue-400/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain rounded"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="block text-center text-sm font-semibold text-[#1f789b] dark:text-[#3eb2d2] hover:underline transition"
            >
              📘 ফ্রি কোর্স দেখুন →
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "কুরআন শিক্ষা ও তাফসীর",
              desc: "ভর্তি চলছে",
              color: "from-[#206380] to-[#1f789b]",
            },
            {
              title: "হাদীস বিজ্ঞান ও ফিকহ",
              desc: "নতুন ব্যাচে ভর্তি চলছে",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "আরবি ভাষা ও ব্যাকরণ",
              desc: "এখনই ভর্তি হোন",
              color: "from-[#206380] to-[#1f789b]",
            },
            {
              title: "ইসলামী ইতিহাস ও আকীদা",
              desc: "ফ্রি পরামর্শ বুক করুন",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "ডিজিটাল স্কিল ও কোডিং",
              desc: "ফ্রি পরামর্শ বুক করুন",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "গ্রাফিক ডিজাইন ও মার্কেটিং",
              desc: "এখনই ভর্তি হোন",
              color: "from-[#206380] to-[#1f789b]",
            },
            {
              title: "নেতৃত্ব ও যোগাযোগ দক্ষতা",
              desc: "নতুন ব্যাচে ভর্তি চলছে",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "উদ্যোক্তা উন্নয়ন ও ব্যবসা",
              desc: "ভর্তি চলছে",
              color: "from-[#206380] to-[#1f789b]",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href="#"
              className={`rounded-2xl p-5 text-white bg-gradient-to-r ${item.color} hover:opacity-90 transition-all duration-300`}
            >
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-sm mt-1 opacity-90">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
