import React from "react";
import {
  FaVideo,
  FaFolderOpen,
  FaClipboardList,
  FaCode,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

const features = [
  {
    icon: <FaVideo className="text-[#1f789b] text-2xl" />,
    title: "লাইভ ক্লাস ও ভিডিও লেসন",
    desc: "ইন্টারঅ্যাকটিভ লাইভ ক্লাসে অংশ নিন এবং সম্পূর্ণ শেখার অভিজ্ঞতার জন্য উচ্চমানের ভিডিও লেসন উপভোগ করুন।",
  },
  {
    icon: <FaFolderOpen className="text-[#1f789b] text-2xl" />,
    title: "প্রতিটি লেসনের রেকর্ডেড কনটেন্ট ও ভিডিও",
    desc: "সব লেসন রেকর্ড করা থাকে এবং ডাউনলোডের সুবিধাসহ প্রদান করা হয়, যাতে আপনি যেকোনো সময়, যেকোনো জায়গা থেকে নিজের গতিতে শিখতে পারেন।",
  },
  {
    icon: <FaClipboardList className="text-[#1f789b] text-2xl" />,
    title: "কুইজ ও মূল্যায়ন",
    desc: "প্রতিটি লেসনের পর কুইজের মাধ্যমে আপনার বোঝাপড়া যাচাই করুন এবং শেখার অগ্রগতি পর্যবেক্ষণ করুন।",
  },
  {
    icon: <FaCode className="text-[#1f789b] text-2xl" />,
    title: "অ্যাসাইনমেন্ট",
    desc: "প্রতিটি মডিউলের সাথে হাতে-কলমে অ্যাসাইনমেন্ট অনুশীলনের মাধ্যমে জ্ঞান আরও মজবুত করুন এবং বাস্তব ক্ষেত্রে প্রয়োগ করুন।",
  },
  {
    icon: <FaUsers className="text-[#1f789b] text-2xl" />,
    title: "সাপোর্ট সেশন",
    desc: "লাইভ সাপোর্ট সেশনে অংশ নিয়ে কোর্স সম্পর্কিত যেকোনো প্রশ্ন করুন এবং অভিজ্ঞ শিক্ষকদের দিকনির্দেশনা গ্রহণ করুন।",
  },
  {
    icon: <FaTasks className="text-[#1f789b] text-2xl" />,
    title: "বিশ্বমানের শিক্ষকবৃন্দ",
    desc: "অভিজ্ঞ ও দক্ষ শিক্ষকদের কাছ থেকে শিক্ষা গ্রহণ করুন এবং বাস্তব প্রকল্পে কাজ করে প্রয়োজনীয় দক্ষতা ও শক্তিশালী পোর্টফোলিও গড়ে তুলুন।",
  },
];


export default function CourseFeatures() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102b3c] dark:text-white">
            আমাদের কোর্সের{" "}
            <span className="text-[#206380] dark:text-blue-400">
              শিক্ষা উপকরণসমূহ
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            আপনার শেখাকে আরও সহজ ও কার্যকর করতে আমাদের কোর্সে যা কিছু
            অন্তর্ভুক্ত রয়েছে
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-10 lg:p-14">
            {features.map((item, idx) => {
              // Mobile: only the last item should not have a border-b
              const isLastMobile = idx === features.length - 1;

              // Desktop (3 cols): check rows/cols
              const isLastRowDesktop = idx >= features.length - 3;
              const isLastColDesktop = (idx + 1) % 3 === 0;

              return (
                <div
                  key={idx}
                  className={`p-6 flex flex-col items-center text-center space-y-3 
                    border-gray-200 dark:border-gray-700
                    ${!isLastMobile ? "border-b md:border-0" : ""} 
                    ${!isLastColDesktop ? "md:border-r" : ""} 
                    ${!isLastRowDesktop ? "md:border-b" : ""}`}
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
