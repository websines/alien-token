import AlienNavbar from "@/components/Navbar";
import AlienHero from "@/components/AlienHero";
import AlienSocial from "@/components/AlienSocial";
import AlienRoadmap from "@/components/AlienRoadmap";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";

export default function Home() {
  return (
    // <BackgroundWrapper>
    <main className="flex flex-col items-center justify-center">
      <div className="w-full">
        <AlienNavbar />
        <AlienHero />
        <AlienSocial />
        <AlienRoadmap />
      </div>
    </main>
    // </BackgroundWrapper>
  );
}
