"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  // Hide footer on auth/private pages
  const hiddenRoutes = [
    "login",
    "register",
    "dashboard",
    "reset-password",
    "checkout",
  ];
  if (hiddenRoutes.some((route) => pathname.includes(route))) return null;

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column - Wider */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#206380] rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">
                Book
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  An-Nahdah
                </h1>
                <p className="text-sm text-[#206380] font-medium">
                  Online Institute
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
              Empowering the modern Muslim with authentic Islamic scholarship
              and practical life skills — rooted in tradition, built for
              tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={Icon.name}
                  className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#206380] hover:text-white transition-all duration-300 group"
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">
              Courses
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {[
                "Islamic Studies",
                "Quranic Arabic",
                "Tajweed Mastery",
                "Life Skills",
                "Certificates",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-[#206380] transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">
              Institute
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {["About Us", "Our Scholars", "Donate", "Contact", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-[#206380] transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition">
                        {item}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter - Right Side */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Stay in the Light
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              New courses, khutbahs, and reminders — delivered weekly.
            </p>

            <form className="space-y-3">
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#206380] focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#206380] hover:bg-[#185060] text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Subscribe Now</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} An-Nahdah Online Institute • Made with
            love for the Ummah
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-[#206380] transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#206380] transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
