"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { Download, Github, MapPin, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { scrollY } = useScroll();
  const waveY = useTransform(scrollY, [0, 1000], [50, -150]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const target = e.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax layers config (further back moves more, front moves less)

  // X and Y translation for the 3D depth parallax
  const card1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), {
    stiffness: 150,
    damping: 30,
  });
  const card1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), {
    stiffness: 150,
    damping: 30,
  });

  const card2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 150,
    damping: 30,
  });
  const card2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), {
    stiffness: 150,
    damping: 30,
  });

  const card3X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 30,
  });
  const card3Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 30,
  });

  // 3D Tilt orientation (rotateX and rotateY based on mouse position)
  // Positive Y mouse movement (down) creates negative X rotation (tilts top away)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 30,
  });
  // Positive X mouse movement (right) creates positive Y rotation (tilts left edge away)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 30,
  });

  return (
    <section
      className="relative min-h-[110vh] flex items-center justify-center pt-24 pb-32 overflow-hidden perspective-800 bg-gradient-to-b from-[#e0f2ef] to-[#16A085]/20 dark:from-zinc-950 dark:to-[var(--primary)]/30"
      onMouseMove={handleMouseMove}
      style={{ perspective: "800px" }}
    >
      {/* Subtle Dot Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[var(--primary)]/20 rounded-full blur-3xl -z-10 transform-gpu" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl -z-10 transform-gpu" />

      {/* Fluid Bottom Wave Transition */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-visible leading-none z-0 pointer-events-none"
        style={{ y: waveY }}
      >
        <svg
          className="relative block w-full h-[100px] md:h-[160px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fillOpacity="0.3"
            className="fill-zinc-50 dark:fill-[#27272a]"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fillOpacity="0.5"
            className="fill-zinc-50 dark:fill-[#1f1f22]"
            d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,250.7C672,277,768,267,864,229.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fillOpacity="1"
            className="fill-zinc-50 dark:fill-background"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,122.7C672,139,768,213,864,240C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        {/* Fill block to prevent gap when wave parallax moves up */}
        <div className="absolute top-full left-0 w-full h-[300px] bg-zinc-50 dark:bg-background lg:-mt-px" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 max-w-2xl transform-gpu optimize-gpu z-10"
          >
            <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] w-fit">
              <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] mr-2"></span>
              Rilis Versi 1.0.0
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Nggak Ada Lagi Drama <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-emerald-400">
                Salah Ruangan
              </span>{" "}
              atau <br className="hidden lg:block" /> Lupa Laprak.
            </h1>

            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Asisten pintar manajemen jadwal kuliah khusus mahasiswa. Pantau
              jadwal, ruangan, dan deadline laporan praktikum dalam satu
              genggaman.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-lg shadow-[var(--primary)]/25 h-12 px-8 text-base transition-transform hover:scale-105"
              >
                <a
                  href="https://drive.google.com/file/d/1ZO2pCXvfs7SHn9HAdCFgsI9vB2IuxCow/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download APK (v1.0.0)
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-2 hover:bg-[var(--primary)]/10 transition-colors"
              >
                <a
                  href="https://github.com/HiroAozora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center -ml-2">
                    <Github className="w-4 h-4 fill-current" />
                  </div>
                  Lihat Source Code
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Framer Motion Interactive Parallax Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto lg:ml-auto w-full h-[500px] flex items-center justify-center transform-gpu optimize-gpu cursor-default"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Back Card: COMP. NETWORK */}
            <motion.div
              style={{
                x: card1X,
                y: card1Y,
                rotateX,
                rotateY,
                rotateZ: -6,
                z: -100, // pushed back
              }}
              className="absolute w-[300px] md:w-[340px] bg-card border border-border rounded-3xl p-5 shadow-sm transform-gpu optimize-gpu transition-shadow hover:shadow-lg opacity-60 z-10 top-10 right-0 md:right-10"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wider">
                  KAMPUS IV TUNTUNGAN
                </span>
                <span className="px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-[10px] font-semibold">
                  Tersedia
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 tracking-tight text-card-foreground">
                COMP. NETWORK
              </h3>
              <p className="text-sm text-muted-foreground pb-4 border-b border-border/50">
                Gedung Laboratorium • Lantai 1
              </p>
              <div className="pt-3">
                <span className="text-xs font-semibold text-muted-foreground block mb-1">
                  Deskripsi:
                </span>
                <p className="text-sm text-card-foreground">
                  lab comp network yg ga ada ac nya
                </p>
              </div>
            </motion.div>

            {/* Middle Card: FST-102 */}
            <motion.div
              style={{
                x: card2X,
                y: card2Y,
                rotateX,
                rotateY,
                rotateZ: -2,
                z: -40,
              }}
              className="absolute w-[300px] md:w-[340px] bg-card border border-border/80 rounded-3xl p-5 shadow-md transform-gpu optimize-gpu transition-shadow hover:shadow-xl opacity-90 z-20 top-32 left-0 md:-left-8"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wider">
                  KAMPUS IV TUNTUNGAN
                </span>
                <span className="px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-[10px] font-semibold">
                  Tersedia
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 tracking-tight text-card-foreground">
                FST-102
              </h3>
              <p className="text-sm text-muted-foreground pb-4 border-b border-border/50">
                Gedung SAINTEK • Lantai 1
              </p>
              <div className="pt-3">
                <span className="text-xs font-semibold text-muted-foreground block mb-1">
                  Deskripsi:
                </span>
                <p className="text-sm text-card-foreground">
                  Ruangannya di samping FST-101
                </p>
              </div>
            </motion.div>

            {/* Front Card: FST-403 */}
            <motion.div
              style={{
                x: card3X,
                y: card3Y,
                rotateX,
                rotateY,
                rotateZ: 3,
                z: 20,
              }}
              className="absolute w-[300px] md:w-[340px] bg-card border-2 border-[var(--primary)]/20 rounded-3xl p-5 shadow-xl transform-gpu optimize-gpu transition-shadow hover:shadow-2xl hover:border-[var(--primary)]/40 z-30 bottom-10 right-4 md:-right-4"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  KAMPUS IV TUNTUNGAN
                </span>
                <span className="px-2 py-0.5 bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-[10px] font-bold shadow-sm">
                  Tersedia
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight text-card-foreground">
                FST-403
              </h3>
              <p className="text-sm text-muted-foreground pb-4 border-b border-border flex items-center gap-1.5">
                <Map className="w-4 h-4" />
                Gedung Laboratorium • Lantai 4
              </p>
              <div className="pt-3">
                <span className="text-xs font-semibold text-muted-foreground block mb-1">
                  Deskripsi:
                </span>
                <p className="text-sm text-card-foreground font-medium">
                  Ruangan Laboratorium Komputer Terpadu.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
