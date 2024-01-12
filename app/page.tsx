import AboutCompany from "./components/AboutCompany";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";

export default function Home() {
  return (
    <main className='h-full w-full '>
      <div className='flex flex-col  gap-20'>
      <HeroSection />
      <AboutCompany />
      <VisionMission />
    </div>
    </main>
  )
}
