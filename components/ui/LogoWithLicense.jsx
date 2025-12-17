import React from "react";
import { FaBookOpen } from "react-icons/fa6";

const LogoWithLicense = () => {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
        <FaBookOpen className="text-[#1f789b] dark:text-gray-300 text-xl" />
      </div>
      <div>
        <p className="text-[#204459] dark:text-gray-200 font-medium">
          An-Nahdah Online Institute - AOI
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          License No: TRAD/DNCC/009595/2022
        </p>
      </div>
    </div>
  );
};

export default LogoWithLicense;
