import Hero from "@/components/home-components/hero";
import CourseCategory from "@/components/home-components/course-category";
import FeaturedCourses from "@/components/home-components/featured-courses";
import Donation from "@/components/home-components/donation";
import TestimonialsSlider from "@/components/home-components/testimonials";
import FAQ from "@/components/home-components/faq";
import NewsSection from "@/components/home-components/news";
import FounderSection from "@/components/home-components/founder";
import CooSection from "@/components/home-components/coo";
import CourseFeatures from "@/components/home-components/learningMaterials";
import CourseShowcase from "@/components/home-components/course-showcase";
import TeachersSection from "@/components/home-components/our-teachers";
import JoinOurCommunity from "@/components/home-components/JoinOurCommunity";
import Hero2 from "@/components/home-components/hero2";
import WhyChooseUs from "@/components/home-components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Hero2 /> */}
      <CourseCategory />
      <FeaturedCourses />
      <CourseFeatures />
      <CourseShowcase />
      <FounderSection />
      <CooSection />
      <TestimonialsSlider />
      <TeachersSection />
      <WhyChooseUs />
      {/* <NewsSection /> */}
      <JoinOurCommunity />
      <FAQ />
      <Donation />
    </>
  );
}
