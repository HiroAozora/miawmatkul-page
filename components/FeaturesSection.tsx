"use client";

import { motion } from "framer-motion";
import { Calendar, Bell, Sparkles, RefreshCw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Jadwal & Ruangan Terorganisir",
    description:
      "Semua jadwal kuliah harian dan ruangan tersusun rapi menggunakan sistem kalender yang dinamis, didukung database Isar yang sangat cepat.",
    icon: <Calendar className="w-6 h-6 text-[var(--primary)]" />,
  },
  {
    title: "Notifikasi Otomatis (FCM)",
    description:
      "Terintegrasi penuh dengan Firebase Cloud Messaging untuk menerima pengumuman mendadak atau informasi penting dari admin kampus secara real-time.",
    icon: <Bell className="w-6 h-6 text-[var(--primary)]" />,
  },
  {
    title: "Template Jadwal Cepat",
    description:
      "Nggak perlu input manual satu per satu! Tinggal ketik teks jadwal dari WA, dan sistem akan meng-extract data hari, jam, matkul, dosen, hingga ruangan secara otomatis.",
    icon: <Sparkles className="w-6 h-6 text-[var(--primary)]" />,
  },
  {
    title: "Sistem Update OTA",
    description:
      "Selalu dapatkan versi aplikasi terbaru langsung dari dalam aplikasi (In-App Update) tanpa perlu repot mencarinya di Google Play Store lagi.",
    icon: <RefreshCw className="w-6 h-6 text-[var(--primary)]" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-24 bg-zinc-50 dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16 transform-gpu optimize-gpu"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Fitur Utama MiawMatkul
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            Aplikasi yang didesain khusus untuk menyelesaikan masalah klasik
            mahasiswa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transform-gpu optimize-gpu"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="transform-gpu optimize-gpu h-full"
            >
              <Card className="h-full hover:border-[var(--primary)]/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
