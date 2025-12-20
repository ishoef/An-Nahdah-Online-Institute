"use client";

import { motion } from "framer-motion";
import Title from "../ui/title";

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "ছাত্র/ছাত্রী, মালয়েশিয়া",
    text: "তাফসীর কোর্সগুলো কুরআনের আমার বোঝাপড়া আরও গভীর করেছে। অফলাইন ফিচারটি আমাকে যাত্রাপথে শেখার সুযোগ দেয়। আলহামদুলিল্লাহ!",
  },
  {
    name: "Omar Abdullah",
    role: "উদ্যোক্তা, ইউএই",
    text: "আমি ডিজিটাল মার্কেটিং কোর্স সম্পন্ন করেছি এবং আমার হালাল ব্যবসা অনলাইনে চালু করেছি। প্রশিক্ষকরা জ্ঞানসম্পন্ন এবং সহায়ক।",
  },
  {
    name: "Zainab Ahmed",
    role: "শিক্ষক, যুক্তরাজ্য",
    text: "আন-নাহদাহ আসল ইসলামী জ্ঞানকে ব্যবহারিক দক্ষতার সঙ্গে সংযুক্ত করে। আরবী ব্যাকরণ কোর্সটি আমাকে শিক্ষার্থীদের আরও ভালোভাবে শেখাতে সাহায্য করেছে।",
  },
  ...Array.from({ length: 20 }).map((_, i) => ({
    name: `ছাত্র/ছাত্রী ${i + 1}`,
    role: `শিক্ষার্থী, দেশ ${i + 1}`,
    text: `এটি নমুনা প্রশংসাপত্রের বার্তা নং ${
      i + 1
    }, যা তাদের সফলতার গল্প শেয়ার করছে।`,
  })),
];

function MarqueeRow({ reverse }) {
  const duration = 60;

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex gap-6 whitespace-nowrap py-4"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-lg p-6 flex flex-col justify-between border border-blue-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            {/* ⭐⭐⭐⭐⭐ Star Rating */}
            <div className="flex space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="text-nhd-500 dark:text-yellow-400 text-lg"
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed break-words whitespace-normal">
              "{t.text}"
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <section className="py-20 relative bg-gradient-to-r from-[#b1e5f0] via-[#d5f2f8] to-[#b1e5f0] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
        <Title
          title1={"শিক্ষার্থীদের"}
          title2={"সফলতার গল্প"}
          subTitle={
            "আমাদের শিক্ষার্থীিদের রিভিউ দেখুন এবং তাদের অভিজ্ঞতা শুনুন"
          }
        />
      </div>

      <div className="space-y-10 px-4 sm:px-6 lg:px-8">
        <MarqueeRow reverse={false} /> {/* left → right */}
        <MarqueeRow reverse={true} /> {/* right → left */}
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-32 bg-gradient-to-r from-blue-200 dark:from-gray-900 to-transparent" />
        <div className="w-32 bg-gradient-to-l from-blue-200 dark:from-gray-900 to-transparent" />
      </div>
    </section>
  );
}
