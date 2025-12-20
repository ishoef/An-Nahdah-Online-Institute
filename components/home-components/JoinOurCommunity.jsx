"use client";
import React from "react";
import Section from "../ui/section";
import Title from "../ui/title";
import { FaWhatsapp, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
// import Image from "next/image";

const JoinOurCommunity = () => {
  return (
    <Section>
      <div className="text-center mb-8">
        <Title
          title1="আমাদের সাথেই"
          title2="থাকুন"
          subTitle="আমাদের প্রাণবন্ত সম্প্রদায়ের অংশ হোন এবং সমমনা ব্যক্তিদের সঙ্গে সংযোগ স্থাপন করুন।"
        />
      </div>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto bg-nhd-700 dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        {/* QR + Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* QR Code */}
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/1RNXJ6By/Whats-App-Image-2025-10-05-at-10-46-32-76b95a31.jpg"
              alt="গ্রুপের QR কোড"
              width={140}
              height={140}
              className="rounded-lg border border-gray-200 shadow-sm"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-2">
              স্ক্যান করুন এবং যুক্ত হোন
            </h3>
            <p className="text-gray-100 dark:text-gray-200 mb-4">
              QR কোড স্ক্যান করে আমাদের অনলাইন প্লাটফর্মে যুক্ত হোন
              এবং আমাদের সকল আপডেট সম্পর্কে সবার আগে জানুন।
            </p>
            <p className="text-sm text-gray-200 dark:text-gray-200">
               নিচের বাটনগুলোর মাধ্যমে সরাসরি যুক্ত হোন।
            </p>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <FaWhatsapp size={20} />
            <span>WhatsApp-এ যুক্ত হোন</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/groups/your-community-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <FaFacebookF size={20} />
            <span>Facebook-এ যুক্ত হোন</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/your-channel-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <FaTelegramPlane size={20} />
            <span>Telegram-এ যুক্ত হোন</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default JoinOurCommunity;
