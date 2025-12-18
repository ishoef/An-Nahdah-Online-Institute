import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";



const TeachersHero = () => {
  return (
    <div className="mb-8 sm:mb-12 hidden md:block">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-gray-300 dark:hover:text-gray-100 mb-6 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <h1 className="text-3xl text-nhd-950 sm:text-5xl font-bold mb-2 text-center dark:text-gray-100">
        Our Teachers Directory
      </h1>
      <p className="sm:text-lg text-muted-foreground dark:text-gray-400 text-center">
        Explore our complete collection of experienced and dedicated educators
      </p>
    </div>
  );
};

export default TeachersHero;
