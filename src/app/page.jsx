import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Features from "@/Components/Features/Features";
import Products from "@/Components/Products/Products";
import PromoBanner from "@/Components/PromoBanner/PromoBanner";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <PromoBanner />
      <Testimonials />
    </div>
  );
}
