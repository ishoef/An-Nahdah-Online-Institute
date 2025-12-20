"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa"; // Dummy logo icon
import LogoWithLicense from "../ui/LogoWithLicense";

const FounderSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl py-16 border-b-3 border-b-[#1f789b] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image with Background */}
        <div className="relative w-full md:w-1/3 flex justify-center basis-1/2">
          {/* Background Accent */}
          <div className="absolute top-5 left-5 w-[80%] h-[95%] bg-[#1f789b] rounded-lg"></div>

          {/* Photo Card */}
          <div className="overflow-hidden rounded-lg shadow-lg transform transition-all z-10 duration-500 hover:scale-105 hover:rotate-1">
            <img
              src="https://i.ibb.co/wNhsFwtS/profile.jpg"
              alt="Founder"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full basis-1/2 md:w-2/3 border-l-4 border-[#1f789b] pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#102b3c] dark:text-gray-100 mb-6">
            আমাদের <span className="text-nhd-700 dark:text-nhd-400" >প্রতিষ্ঠাতা</span> সম্পর্কে কিছু কথা
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ইসমাইল নায়েফ একজন উদ্যমী প্রযুক্তি উদ্যোক্তা। কম্পিউটার সায়েন্স ও
            ইঞ্জিনিয়ারিংয়ে শক্তিশালী একাডেমিক ব্যাকগ্রাউন্ড নিয়ে তিনি ২০১০
            সালে প্রথম দিকের একটি ডিজিটাল লার্নিং প্ল্যাটফর্ম প্রতিষ্ঠা করেন।
            তার নিষ্ঠা ও দূরদর্শী চিন্তা বিশ্বের হাজারো শিক্ষার্থীর জীবনে
            ইতিবাচক প্রভাব ফেলেছে।
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            আজ এই প্ল্যাটফর্মটি ৫০০টিরও বেশি অনলাইন কোর্স এবং লক্ষাধিক
            শিক্ষার্থী নিয়ে একটি সমৃদ্ধ বৈশ্বিক শিক্ষাগোষ্ঠীতে পরিণত হয়েছে।
            তার লক্ষ্য হলো মানসম্মত শিক্ষা সবার জন্য সহজলভ্য করে তোলা এবং
            উদ্ভাবন ও সহযোগিতার একটি শক্তিশালী সংস্কৃতি গড়ে তোলা।
          </p>

          {/* Founder Name & Role */}
          <div className="mt-6">
            <h3 className="font-semibold text-nhd-700 dark:text-nhd-400">
              ইসমাঈল নায়েফ
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              শিক্ষার্থী, আল-আজহার বিশ্ববিদ্যালয়, কায়রো, মিসর (৩য় বর্ষ)
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              প্রতিষ্ঠাতা ও প্রধান নির্বাহী — আন-নাহদাহ অনলাইন ইনস্টিটিউট (AOI)
            </p>
          </div>

          {/* Logo + License */}
          <LogoWithLicense />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
