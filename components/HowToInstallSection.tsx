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
      "Klik tombol Download di website ini untuk mengunduh versi terbaru aplikasi MiawMatkul ke memori internal HP kamu.",
    icon: <Download className="w-5 h-5" />,
  },
  {
    step: "2",
    title: "Izinkan Install dari Sumber Tidak Dikenal",
    description:
      "Buka Pengaturan HP > Keamanan, lalu aktifkan 'Install Unknown Apps' untuk file manager atau browser yang kamu gunakan.",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    step: "3",
    title: "Install & Buka Aplikasi",
    description:
      "Buka file APK yang sudah didownload, klik Install, lalu tunggu hingga proses selesai.",
    icon: <FileDown className="w-5 h-5" />,
  },
  {
    step: "4",
    title: "Isi Data Diri & Nikmati!",
    description:
      "Buka aplikasi, masukkan Nama dan Kelasmu di popup perkenalan awal, lalu mulailah mengatur jadwal kuliahmu dengan lebih rapi.",
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
              Aplikasi saat ini masih dalam versi awal dan belum rilis di Play
              Store (mahal bgt loh ya 😹). Ikuti langkah2 di bawah cik.
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
              <img
                src="/images/ngawi.png"
                alt="Ilustrasi Ngawi"
                className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold mb-2 text-balance italic">
                "aplikasinya aman ga bang?"
              </h3>
              <p className="text-[var(--muted-foreground)] max-w-xs mx-auto">
                aman bgt loh ya, admin sigma soalnya 👅
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
