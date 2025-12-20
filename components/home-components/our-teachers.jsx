"use client";

import React, { useState } from "react";
import Title from "../ui/title";
import Link from "next/link";

export default function TeachersSection() {
  const demoTeachers = [
    {
      id: 1,
      name: "ড. মোহাম্মদ ইমরান",
      title: "সহযোগী অধ্যাপক — হাদীস",
      department: "ইসলামিক স্টাডিজ",
      bio: "হাদীস, তাফসীর এবং ক্লাসিকাল আরবীতে ২০+ বছরের শিক্ষাদান। শিক্ষার্থী মেন্টরশিপ এবং গবেষণায় উত্সাহী।",
      subjects: ["সহীহ আল-বুখারি", "তাফসীর", "আরবী ব্যাকরণ"],
      email: "imran@example.edu",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.9,
      years: 22,
    },
    {
      id: 2,
      name: "উস্তাযাহ আয়েশা রহমান",
      title: "সিনিয়র লেকচারার — আরবী ভাষা",
      department: "ভাষা",
      bio: "আরবী ধ্বনিবিদ্যা এবং শিক্ষণ পদ্ধতির বিশেষজ্ঞ। প্রাপ্তবয়স্কদের জন্য ইন্টারেক্টিভ রিডিং কোর্স ডিজাইন করতে ভালোবাসেন।",
      subjects: ["নাহও (ব্যাকরণ)", "সারফ (ধ্বনিবিদ্যা)", "পাঠ চর্চা"],
      email: "ayesha@example.edu",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.8,
      years: 12,
    },
    {
      id: 3,
      name: "প্রফ. খালিদ হাসান",
      title: "প্রফেসর — ফিকহ ও উসুল",
      department: "জুরিসপ্রুডেন্স",
      bio: "কমিউনিটি-নেতৃত্বাধীন আইন শিক্ষায় গভীর আগ্রহসহ তুলনামূলক ফিকহের গবেষক।",
      subjects: ["ফিকহ", "উসুলুল ফিকহ", "তুলনামূলক আইনশাস্ত্র"],
      email: "khalid@example.edu",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 5.0,
      years: 30,
    },
    {
      id: 4,
      name: "ড. নূর ফাতিমা",
      title: "লেকচারার — ইসলামী ইতিহাস",
      department: "ইতিহাস",
      bio: "প্রাথমিক ইসলামী সভ্যতা এবং নারী শিক্ষায় মনোনিবেশকারী লেখক ও শিক্ষাবিদ।",
      subjects: ["ইসলামী ইতিহাস", "জীবনী", "গবেষণা পদ্ধতি"],
      email: "noor@example.edu",
      image:
        "https://i.postimg.cc/QNFWys2W/vecteezy-profile-icon-design-vector-5544718.jpg",
      rating: 4.7,
      years: 9,
    },
    {
      id: 5,
      name: "ড. নূর ফাতিমা",
      title: "লেকচারার — ইসলামী ইতিহাস",
      department: "ইতিহাস",
      bio: "প্রাথমিক ইসলামী সভ্যতা এবং নারী শিক্ষায় মনোনিবেশকারী লেখক ও শিক্ষাবিদ।",
      subjects: ["ইসলামী ইতিহাস", "জীবনী", "গবেষণা পদ্ধতি"],
      email: "noor@example.edu",
      image:
        "https://images.unsplash.com/photo-1531123414780-fb0d0b3b8b5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.7,
      years: 9,
    },
    {
      id: 6,
      name: "ড. নূর ফাতিমা",
      title: "লেকচারার — ইসলামী ইতিহাস",
      department: "ইতিহাস",
      bio: "প্রাথমিক ইসলামী সভ্যতা এবং নারী শিক্ষায় মনোনিবেশকারী লেখক ও শিক্ষাবিদ।",
      subjects: ["ইসলামী ইতিহাস", "জীবনী", "গবেষণা পদ্ধতি"],
      email: "noor@example.edu",
      image:
        "https://images.unsplash.com/photo-1531123414780-fb0d0b3b8b5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.7,
      years: 9,
    },
  ];

  const [query, setQuery] = useState("");

  const filtered = demoTeachers.filter((t) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.title.toLowerCase().includes(q) ||
      t.department.toLowerCase().includes(q) ||
      t.subjects.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <Title
          title1={"আমাদের "}
          title2={" শিক্ষকবৃন্দ"}
          subTitle="বিশ্বের সেরা ও সুশিক্ষিত শিক্ষকদের কাছ থেকে শিখুন"
        />

        <main>
          <div className="mt-4 sm:mt-0 mx-auto mb-10 relative w-full sm:w-80">
            <input
              type="search"
              placeholder="Search teachers, subjects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filtered.map((t) => (
              <article
                key={t.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3eb2d2] to-[#1f789b]" />

                <div className="flex flex-col items-center text-center p-6 pt-10">
                  <div className="relative">
                    <img
                      src={
                        "https://i.postimg.cc/QNFWys2W/vecteezy-profile-icon-design-vector-5544718.jpg"
                      }
                      alt={`${t.name} profile`}
                      className="w-38 h-38 rounded-full object-cover shadow-md ring-4 ring-[#3eb2d2]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#2295b8] text-white text-xs px-2 py-0.5 rounded-full shadow">
                      {t.rating.toFixed(1)} ★
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.title}
                  </p>

                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {t.department} • {t.years} yrs experience
                  </div>

                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
                    {t.bio}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {t.subjects.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-full bg-[#effbfc] text-[#206380] dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                    <Link
                      href={`/instructors/${t.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#1f789b] hover:bg-[#206380] text-white text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      প্রোফাইল দেখুন
                    </Link>
                    <a
                      className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                      href={`mailto:${t.email}`}
                    >
                      যোগাযোগ
                    </a>
                  </div>
                </div>

                <footer className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 text-xs text-gray-500 dark:text-gray-400 text-center">
                  <a href={`mailto:${t.email}`} className="underline">
                    {t.email}
                  </a>
                </footer>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
              No teachers match your search.
            </div>
          )}

          {/* See All Button */}
          <div className="mt-12 flex justify-center">
            <button className="cursor-pointer px-6 py-3 bg-[#2295b8] hover:bg-[#1f789b] text-white text-sm font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              See All Teachers
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
