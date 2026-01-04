"use client";

import { useState } from "react";
import {
  Search,
  X,
  Shield,
  Lock,
  Users,
  FileText,
  Globe,
  Mail,
  MessageCircle,
  ChevronRight,
  Eye,
  Cookie,
  Database,
  Scale,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: "introduction",
      title: "ভূমিকা ও প্রতিশ্রুতি",
      icon: Shield,
      description: "আপনার গোপনীয়তা সুরক্ষায় আমাদের ইসলামিক নীতি",
      sections: [
        {
          title: "An-Nahdah Online Academy প্রাইভেসি নীতিতে স্বাগতম",
          content:
            "An-Nahdah Online Academy-তে আমরা আমাদের শিক্ষার্থীদের বিশ্বাস, সততা, আমানত এবং ব্যক্তিগত তথ্যের সুরক্ষার ইসলামিক নীতির ভিত্তিতে গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই নীতিতে বর্ণনা করা হয়েছে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ এবং সুরক্ষা করি।",
        },
        {
          title: "এই নীতির প্রযোজ্য ক্ষেত্র",
          content:
            "এই নীতি আমাদের ওয়েবসাইট, রেজিস্ট্রেশন, কোর্স প্ল্যাটফর্ম, পেমেন্ট এবং যোগাযোগের মাধ্যমে সংগৃহীত সকল তথ্যের ক্ষেত্রে প্রযোজ্য।",
        },
      ],
    },

    {
      id: "collection",
      title: "আমরা কোন তথ্য সংগ্রহ করি",
      icon: Database,
      description: "আপনার তথ্য সংগ্রহের ধরন ও কারণ",
      sections: [
        {
          title: "আপনার প্রদানকৃত ব্যক্তিগত তথ্য",
          content:
            "নাম, ইমেইল, ফোন নম্বর, ঠিকানা, জন্মতারিখ (বয়স যাচাইয়ের জন্য), শিক্ষাগত তথ্য এবং নিরাপদ পেমেন্ট বিবরণ সংগ্রহ করা হয়।",
        },
        {
          title: "শিক্ষাগত অগ্রগতি",
          content:
            "উপস্থিতি, পরীক্ষা ফলাফল, অ্যাসাইনমেন্ট ও তিলাওয়াত রেকর্ডিং (তাজবিদ/ইজাযাহ কোর্সে) সংরক্ষণ করা হতে পারে।",
        },
        {
          title: "প্রযুক্তিগত তথ্য",
          content:
            "আইপি অ্যাড্রেস, ব্রাউজার টাইপ, ডিভাইস তথ্য, পেজ ভিজিট, সময়কাল ইত্যাদি নিরাপত্তা ও উন্নয়নের জন্য সংগ্রহ করা হয়।",
        },
        {
          title: "যোগাযোগ",
          content:
            "ইমেইল, সাপোর্ট ম্যাসেজ, WhatsApp যোগাযোগ সাপোর্ট উন্নতির জন্য রাখা হতে পারে।",
        },
      ],
    },

    {
      id: "usage",
      title: "আপনার তথ্য কীভাবে ব্যবহার করা হয়",
      icon: FileText,
      description: "আপনার তথ্য ব্যবহারের উদ্দেশ্য",
      sections: [
        {
          title: "শিক্ষা সেবা প্রদান",
          content:
            "অ্যাকাউন্ট তৈরি, কোর্সে ভর্তি, লেসন, সার্টিফিকেট, ইজাযাহ, ক্লাস ডেটা আপডেট ইত্যাদিতে ব্যবহার করা হয়।",
        },
        {
          title: "প্ল্যাটফর্ম উন্নয়ন",
          content:
            "অ্যানালাইটিক্স ও ফিডব্যাকের মাধ্যমে আমাদের ওয়েবসাইট উন্নীত করা হয়।",
        },
        {
          title: "নিরাপত্তা ও আইনগত নীতি",
          content:
            "প্রতারনা রোধ, নিয়ম ভঙ্গ পর্যবেক্ষণ, এবং ইসলামিক শিষ্টাচার নিশ্চিত করতে তথ্য ব্যবহার করা হয়।",
        },
        {
          title: "যোগাযোগ",
          content:
            "গুরুত্বপূর্ণ আপডেট, নোটিশ, নিউজলেটার, স্মরণ করিয়ে দেওয়া এবং সাপোর্ট সংক্রান্ত ম্যাসেজ পাঠানো হয়।",
        },
      ],
    },

    {
      id: "sharing",
      title: "তথ্য শেয়ারিং",
      icon: Users,
      description: "কখন ও কার সাথে তথ্য শেয়ার করা হয়",
      sections: [
        {
          title: "আমরা কখনো আপনার ডেটা বিক্রি করি না",
          content:
            "An-Nahdah Online Academy কোনো অবস্থাতেই ছাত্রদের ব্যক্তিগত তথ্য বিক্রি বা ব্যবসায়িক উদ্দেশ্যে শেয়ার করে না।",
        },
        {
          title: "সার্ভিস প্রদানকারী",
          content:
            "পেমেন্ট, ক্লাস প্ল্যাটফর্ম, ইমেইল সার্ভিস প্রভাইডারদের সাথে সীমিত তথ্য শেয়ার করা হতে পারে, যাদের সাথে গোপনীয়তা চুক্তি রয়েছে।",
        },
        {
          title: "শিক্ষক ও স্কলারগণ",
          content:
            "শিক্ষাগত মূল্যায়ন ও ইজাযাহ প্রদানের প্রয়োজনে শিক্ষকদের সীমিত তথ্য অ্যাক্সেস থাকতে পারে।",
        },
        {
          title: "আইনগত কারণ",
          content:
            "প্রয়োজন হলে আইনি নির্দেশনা অনুযায়ী তথ্য প্রদান করা হতে পারে।",
        },
      ],
    },

    {
      id: "storage",
      title: "তথ্য সংরক্ষণ ও নিরাপত্তা",
      icon: Lock,
      description: "আপনার তথ্য কীভাবে সুরক্ষিত থাকে",
      sections: [
        {
          title: "নিরাপত্তা ব্যবস্থা",
          content:
            "এনক্রিপশন, সিকিউর সার্ভার, অ্যাক্সেস কন্ট্রোল, নিয়মিত অডিটের মাধ্যমে তথ্য সুরক্ষিত থাকে।",
        },
        {
          title: "তথ্য সংরক্ষণ",
          content:
            "শিক্ষাগত উদ্দেশ্যে প্রয়োজনীয় সময় পর্যন্তই তথ্য সংরক্ষণ করা হয়। সার্টিফিকেট ও রেকর্ড স্থায়ীভাবে সংরক্ষিত হতে পারে।",
        },
        {
          title: "আন্তর্জাতিক ডেটা স্থানান্তর",
          content:
            "অনলাইন প্রতিষ্ঠান হওয়ায় ডেটা আন্তর্জাতিক সার্ভারে প্রক্রিয়াজাত হতে পারে, তবে সঠিক নিরাপত্তা নীতি অনুসরণ করা হয়।",
        },
      ],
    },

    {
      id: "rights",
      title: "আপনার অধিকার",
      icon: Scale,
      description: "আপনার ব্যক্তিগত ডেটার ক্ষেত্রে আপনার অধিকার",
      sections: [
        {
          title: "তথ্য অ্যাক্সেস",
          content: "আপনার তথ্য দেখতে ও আপডেট করার অনুরোধ করতে পারেন।",
        },
        {
          title: "মুছে ফেলার অনুরোধ",
          content:
            "তথ্য মুছে ফেলার অনুরোধ করতে পারেন (সার্টিফিকেট প্রমাণের জন্য কিছু তথ্য রাখা লাগতে পারে)।",
        },
        {
          title: "ইমেইল অপ্ট-আউট",
          content:
            "নিউজলেটার ও অপ্রয়োজনীয় ম্যাসেজ থেকে নিজেকে অপসারণ করতে পারবেন।",
        },
        {
          title: "রেকর্ডিং",
          content:
            "আপনি লাইভ ক্লাসে রেকর্ড না হওয়ার অনুরোধ করতে পারেন (কিছু ক্লাসে অংশগ্রহণে প্রভাব পড়তে পারে)।",
        },
      ],
    },

    {
      id: "special",
      title: "বিশেষ নোট",
      icon: Eye,
      description: "অতিরিক্ত গুরুত্বপূর্ণ তথ্য",
      sections: [
        {
          title: "শিশুদের গোপনীয়তা",
          content:
            "১৩ বছরের নিচে ছাত্র-ছাত্রীদের অভিভাবকের অনুমতি বাধ্যতামূলক।",
        },
        {
          title: "কুকিজ ও ট্র্যাকিং",
          content:
            "ওয়েবসাইটে শুধুমাত্র প্রয়োজনীয় কুকিজ ব্যবহৃত হয়। কোনো বিজ্ঞাপন ট্র্যাকিং করা হয় না।",
        },
        {
          title: "নীতিমালা আপডেট",
          content:
            "যেকোনো পরিবর্তন ইমেইল বা প্ল্যাটফর্মে জানানো হবে। ব্যবহার চালিয়ে গেলে তা গ্রহণযোগ্য বলে গণ্য হবে।",
        },
      ],
    },

    {
      id: "contact",
      title: "যোগাযোগ করুন",
      icon: Mail,
      description: "গোপনীয়তা সংক্রান্ত সহায়তার জন্য",
      sections: [
        {
          title: "ডেটা সুরক্ষা সহায়তা",
          content:
            "যেকোনো তথ্য, জিজ্ঞাসা বা সমস্যা নিয়ে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
        },
      ],
    },
  ];

  // Filter search
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      sections: category.sections.filter(
        (section) =>
          section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          section.content.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.sections.length > 0 ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const clearSearch = () => setSearchTerm("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-300 transition">
      {/* HEADER */}
      <header className="bg-[#206380] dark:bg-[#154c63] text-white py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            গোপনীয়তা নীতি
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mt-2 sm:mt-3 px-2">
            ইসলামিক নীতির আলোকে আপনার ডেটা সুরক্ষায় আমাদের অঙ্গীকার
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto relative mt-8 sm:mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />

            <input
              type="text"
              placeholder="গোপনীয়তা নীতি খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 sm:pl-14 sm:pr-12 py-3 sm:py-4 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 text-gray-800 dark:text-gray-300 text-sm sm:text-lg focus:ring-4 focus:ring-white/30"
            />

            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white dark:text-gray-300"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <p className="text-center text-gray-600 dark:text-gray-400 italic mb-8 sm:mb-12 text-sm sm:text-base">
          সর্বশেষ আপডেট: ০২ জানুয়ারি ২০২৬
        </p>

        {filteredCategories.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg sm:text-xl py-10">
            কিছু পাওয়া যায়নি।
          </p>
        ) : (
          filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden mb-4 sm:mb-8"
              >
                <button
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full cursor-pointer px-5 sm:px-8 py-5 sm:py-6 flex justify-between items-center text-left bg-[#206380]/10 dark:bg-[#206380]/20"
                >
                  <div className="flex items-center gap-3 sm:gap-5">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#206380] dark:text-white" />
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#206380] dark:text-white leading-snug">
                        {category.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-6 sm:w-8 h-6 sm:h-8 text-[#206380] dark:text-white transition-transform ${
                      activeCategory === category.id ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {activeCategory === category.id && (
                  <div className="p-6 sm:p-8 md:p-12 space-y-8 border-t border-gray-200 dark:border-gray-700">
                    {category.sections.map((section, i) => (
                      <div
                        key={i}
                        className="pb-6 sm:pb-8 border-b last:border-0"
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#206380] dark:text-blue-200 mb-3">
                          {section.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* CONTACT SECTION */}
        <div className="mt-14 sm:mt-20 text-center bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#206380] dark:text-white mb-4">
            কোনো প্রশ্ন আছে?
          </h2>
          <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            আপনার গোপনীয়তা ও ডেটা সংক্রান্ত যেকোনো প্রশ্নের উত্তর দিতে আমরা
            প্রস্তুত।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="mailto:support@annahdahinstitute.com"
              className="w-full sm:w-auto text-center bg-[#206380] hover:bg-[#154c63] text-white px-8 py-3 sm:py-4 rounded-lg transition-colors"
            >
              <Mail className="inline w-5 h-5 sm:w-6 sm:h-6 mr-2" /> ইমেইল
              সাপোর্ট
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 sm:py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="inline w-5 h-5 sm:w-6 sm:h-6 mr-2" />{" "}
              WhatsApp সাপোর্ট
            </a>
          </div>
        </div>
      </section>
    </div>
  );

}
