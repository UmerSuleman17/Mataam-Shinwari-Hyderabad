import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import SignatureDishes from "@/components/sections/SignatureDishes";
import FireToTable from "@/components/sections/FireToTable";
import Experience from "@/components/sections/Experience";
import Reviews from "@/components/sections/Reviews";
import VisitUs from "@/components/sections/VisitUs";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <BrandIntro />
        <SignatureDishes />
        <FireToTable />
        <Experience />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </>
  );
}
