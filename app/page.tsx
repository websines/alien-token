import AlienNavbar from "@/components/Navbar";
import AlienHero from "@/components/AlienHero";
import AlienSocial from "@/components/AlienSocial";
import AlienRoadmap from "@/components/AlienRoadmap";
import AlienTokenomics from "@/components/AlienTokenomics";
import AlienAbout from "@/components/AlienAbout";
import AlienFAQ from "@/components/AlienFAQ";
import AlienFooter from "@/components/Footer";

export default function Home() {
  return (
    // <BackgroundWrapper>
    <main className="flex flex-col items-center justify-center">
      <div className="w-full">
        <AlienNavbar />
        <AlienHero />
        <AlienSocial />
        <AlienAbout />
        <AlienRoadmap />
        <AlienTokenomics />
        <AlienFAQ />
        <AlienFooter />
      </div>
    </main>
    // </BackgroundWrapper>
  );
}
