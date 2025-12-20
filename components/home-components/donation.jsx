import React from "react";
import Section from "../ui/section";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";

const Donation = () => {
  return (
    <Section>
      <div className="flex justify-center items-center flex-col text-center">
        <span className="text-8xl">
          <FaHeart className="animate-pulse text-nhd-500" />
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102b3c] dark:text-gray-100 mt-4">
          ইসলামী শিক্ষাকে সমর্থন করুন
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          আপনার দান আমাদেরকে বিশ্বজুড়ে শিক্ষার্থীদের জন্য বিনামূল্যে কোর্স
          সরবরাহ করতে এবং আলেমদের উচ্চমানের ইসলামী কন্টেন্ট তৈরিতে সহায়তা করে।
          প্রতিটি অবদানই গুরুত্বপূর্ণ।
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-6">
          <Link
            href="/donate"
            aria-label="Donate to support Islamic education"
            className="cursor-pointer px-6 py-3 bg-[#1f789b] hover:bg-[#206380] text-white text-lg rounded-md transition-colors"
          >
            এখনই দান করুন
          </Link>
          <Link
            href="/impact"
            aria-label="See the impact of your donation"
            className="cursor-pointer px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white text-lg rounded-md transition-colors"
          >
            আমাদের কার্যক্রম দেখুন
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Donation;
