import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowToInstallSection } from "@/components/HowToInstallSection";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiawMatkul - Manajemen Jadwal & Tugas Mahasiswa",
  description:
    "Asisten pintar manajemen jadwal kuliah khusus mahasiswa. Pantau jadwal, ruangan, dan deadline laporan praktikum dengan mudah di ponsel Anda.",
  themeColor: "#16A085",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col relative w-full overflow-x-hidden">
      <FloatingNavbar />
      <HeroSection />
      <FeaturesSection />
      <HowToInstallSection />
      <Footer />
    </main>
  );
}
