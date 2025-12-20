"use client";

import { Check, BookOpen, Users, Infinity } from "lucide-react";
import Title from "../ui/title";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f0fafa] dark:from-gray-900 dark:to-gray-900 py-16 overflow-hidden">
      {/* Soft background circles */}
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-[#206380]/5 dark:bg-[#206380]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-[#206380]/5 dark:bg-[#206380]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#206380]/10 dark:bg-[#206380]/20 text-[#206380] dark:text-[#8ecae6] text-sm font-semibold border border-[#206380]/20 dark:border-[#206380]/30">
            <BookOpen className="w-5 h-5" />
            Why An-Nahdah Academy
          </span> */}

          <Title
            title1={"আমাদের "}
            title2={"কেন বেছে নেবেন?"}
            subTitle={
              "আমরা প্রামাণিক ইসলামী জ্ঞানকে আধুনিক শিক্ষণ পদ্ধতির সঙ্গে সংযুক্ত করি, যা যোগ্য আলেমদের দিকনির্দেশনায় পরিচালিত।"
            }
          />
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#206380]/20 dark:bg-[#206380]/30 hidden md:block rounded-full" />

          {/* Item 1 */}
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-[#206380]/10 dark:border-gray-700 hover:border-[#206380]/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#206380]/10 dark:bg-[#206380]/20 flex items-center justify-center mb-6 group-hover:bg-[#206380] transition-colors">
                <BookOpen className="w-8 h-8 text-[#206380] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                ৫০০+ প্রামাণিক ভিডিও কোর্স
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                তাজওয়ীদ, সিরাহ, আরবী ব্যাকরণ – প্রতিটি পাঠ যোগ্য আলেমদের দ্বারা
                পরিচালিত
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#206380] dark:text-[#8ecae6] font-medium">
                <Check size={18} />
                <span>১০০% কুরআন ও সুন্নাহ ভিত্তিক</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-[#206380]/10 dark:border-gray-700 hover:border-[#206380]/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#206380]/10 dark:bg-[#206380]/20 flex items-center justify-center mb-6 group-hover:bg-[#206380] transition-colors">
                <Users className="w-8 h-8 text-[#206380] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                বিশ্বমানের শিউখ ও শিক্ষক
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                আল-আজহার,মক্কায ও মদিনা থেকে ডিগ্রিপ্রাপ্ত যোগ্য আলেমদের থেকে সরাসরি শেখা
                – লাইভ ও রেকর্ডেড
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#206380] dark:text-[#8ecae6] font-medium">
                <Check size={18} />
                <span>ভ্যালুয়েবল ইজাযাহ এবং সার্টিফিকেশন</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-[#206380]/10 dark:border-gray-700 hover:border-[#206380]/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#206380]/10 dark:bg-[#206380]/20 flex items-center justify-center mb-6 group-hover:bg-[#206380] transition-colors">
                <Infinity className="w-8 h-8 text-[#206380] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                লাইফটাইম অ্যাক্সেস সুবিধা
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                একবার পেমেন্ট - আজীবন অ্যাক্সেস + নতুন কোর্স স্বয়ংক্রিয়ভাবে
                ফ্রিতে যুক্ত হবে
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#206380] dark:text-[#8ecae6] font-medium">
                <Check size={18} />
                <span>মাসিক ফি নেই</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-20">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন যারা ইতিমধ্যেই বলে: <br />
            <span className="font-semibold text-[#206380] dark:text-[#8ecae6]">
              “এটি আমার ইসলামী জ্ঞান শিক্ষার সর্বশ্রেষ্ঠ অভিজ্ঞতা”
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
