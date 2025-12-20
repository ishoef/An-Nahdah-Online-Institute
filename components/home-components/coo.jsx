"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa"; // Dummy logo icon

const CooSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Left Image with Background */}
        <div className="relative w-full md:w-1/3 flex justify-center basis-1/2">
          {/* Background Accent */}
          <div className="absolute top-5 left-5 w-[80%] h-[95%] bg-[#1f789b] rounded-lg"></div>

          {/* Photo Card */}
          <div className="overflow-hidden rounded-lg shadow-lg transform transition-all z-10 duration-500 hover:scale-105 hover:rotate-1">
            <img
              src="https://images.unsplash.com/photo-1722409195216-b4a54601d38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlJTIwY2VvfGVufDB8fDB8fHww"
              alt="Founder"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full basis-1/2 md:w-2/3 border-r-4 border-[#1f789b] pr-6 ">
          <h2 className="text-2xl md:text-3xl text-end font-bold text-[#102b3c] dark:text-gray-100 mb-6">
            আমাদের <span className="text-nhd-700 dark:text-nhd-400">COO</span>{" "}
            সম্পর্কে কিছু কথা
          </h2>

          <p className="text-gray-700 text-end dark:text-gray-300 leading-relaxed mb-4">
            তানজিল তানিম হলেন আন-নাহদাহ অনলাইন ইনস্টিটিউটের চিফ অপারেটিং অফিসার,
            যিনি আমাদের শিক্ষামূলক উদ্যোগে দৃষ্টি ও নেতৃত্ব প্রদান করেন।
            কম্পিউটার সায়েন্স ও ইঞ্জিনিয়ারিংয়ে দৃঢ় পটভূমি নিয়ে, তিনি
            ইনস্টিটিউটের ডিজিটাল লার্নিং প্ল্যাটফর্ম গঠন ও সম্প্রসারণে
            গুরুত্বপূর্ণ ভূমিকা পালন করেছেন।
          </p>

          <p className="text-gray-700 text-end dark:text-gray-300 leading-relaxed mb-4">
            তাঁর নেতৃত্বে, আন-নাহদাহ অনলাইন ইনস্টিটিউট একটি সমৃদ্ধ অনলাইন
            কমিউনিটিতে পরিণত হয়েছে, যা শিক্ষার্থীদের জন্য বৈচিত্র্যময় কোর্স ও
            প্রোগ্রাম সরবরাহ করে। তানজিল সকলের জন্য মানসম্মত ইসলামী ও একাডেমিক
            শিক্ষা পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ, এবং প্রতিটি ক্ষেত্রে উদ্ভাবন,
            সহযোগিতা এবং উৎকর্ষতা প্রচার করেন।
          </p>

          {/* Founder Name & Role */}
          <div className="mt-6 text-end">
            <h3 className="font-semibold text-nhd-700 dark:text-nhd-400">
              তানজিল তানিম
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              COO (চিফ অপারেটিং অফিসার) — আন-নাহদাহ অনলাইন ইনস্টিটিউট - AOI
            </p>
          </div>

          {/* Logo + License */}
          <div className="mt-6 flex justify-end items-center gap-3">
            <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
              <FaBookOpen className="text-[#1f789b] dark:text-gray-300 text-xl" />
            </div>
            <div>
              <p className="text-[#204459] dark:text-gray-200 font-medium">
                আন-নাহদাহ অনলাইন ইনস্টিটিউট - AOI
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                লাইসেন্স নং: TRAD/DNCC/009595/2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooSection;
