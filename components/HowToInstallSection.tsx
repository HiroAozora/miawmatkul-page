"use client";

import { motion } from "framer-motion";
import { Download, FileDown, Settings, LogIn } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    step: "1",
    title: "Download File APK",
    description:
      "Ketuk tombol Download di website ini untuk mengunduh file MiawMatkul_v1.0.apk ke penyimpanan HP Anda.",
    icon: <Download className="w-5 h-5" />,
  },
  {
    step: "2",
    title: "Buka File APK",
    description:
      "Setelah unduhan selesai, buka notifikasi atau pergi ke folder 'Downloads' di File Manager untuk membuka file APK tersebut.",
    icon: <FileDown className="w-5 h-5" />,
  },
  {
    step: "3",
    title: "Izinkan Install dari Sumber Tidak Dikenal",
    description:
      "Jika muncul peringatan keamanan, pergi ke Pengaturan > Keamanan > aktifkan 'Install from Unknown Sources' (Instal dari sumber tidak dikenal).",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    step: "4",
    title: "Login & Atur Jadwal!",
    description:
      "Buka aplikasi MiawMatkul, lakukan registrasi/login, dan mulai tata jadwal kuliah serta deadline laprakmu dengan rapi.",
    icon: <LogIn className="w-5 h-5" />,
  },
];

export function HowToInstallSection() {
  return (
    <section id="install" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="transform-gpu optimize-gpu"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Cara Install MiawMatkul
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg mb-8">
              Aplikasi saat ini masih dalam versi BETA dan belum rilis di Play
              Store. Ikuti langkah mudah berikut untuk menginstal secara manual.
            </p>

            <Accordion
              type="single"
              collapsible
              defaultValue="step-0"
              className="w-full"
            >
              {steps.map((step, index) => (
                <AccordionItem key={index} value={`step-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:text-[var(--primary)]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm shrink-0">
                        {step.step}
                      </div>
                      <span className="font-semibold">{step.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--muted-foreground)] pl-12 text-base">
                    <div className="flex items-start gap-3 mt-2">
                      <div className="text-[var(--primary)] mt-0.5">
                        {step.icon}
                      </div>
                      <p>{step.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-800/50 border border-[var(--border)] flex items-center justify-center transform-gpu optimize-gpu overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/20_0%,transparent_100%)]"></div>
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 bg-[var(--primary)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12">
                <Download className="w-12 h-12 text-[var(--primary)] -rotate-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Siap untuk digunakan</h3>
              <p className="text-[var(--muted-foreground)] max-w-xs mx-auto">
                Perangkat Android versi 8.0 (Oreo) ke atas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
