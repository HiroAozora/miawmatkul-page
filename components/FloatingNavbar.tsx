"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function FloatingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (latest > previous && latest > 100) {
      setHidden(true);
      setIsMobileMenuOpen(false); // Close dropdown if scrolling down
    } else {
      setHidden(false);
    }

    timeoutRef.current = setTimeout(() => {
      setHidden(false);
    }, 2000);
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const desktopVariants = {
    visible: { y: 0, x: "-50%", opacity: 1 },
    hidden: { y: -100, x: "-50%", opacity: 0 },
  };

  const mobileVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
  };

  return (
    <>
      {/* Desktop Navbar - Top Capsule */}
      <motion.nav
        variants={desktopVariants}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:flex fixed top-6 left-1/2 z-50 transform-gpu items-center justify-between w-full max-w-3xl px-6 py-3 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-lg border border-white/20 dark:border-zinc-800/50"
      >
        <div className="flex items-center gap-2">
          <img
            src="/miawmatkul.svg"
            alt="MiawMatkul Logo"
            className="w-8 h-8 dark:invert transition-all"
          />
          <span className="font-bold text-lg text-foreground">MiawMatkul</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#fitur" className="hover:text-primary transition-colors">
            Fitur
          </a>
          <a href="#install" className="hover:text-primary transition-colors">
            Cara Install
          </a>

          <div className="w-px h-6 bg-border mx-2"></div>

          <ThemeToggle />

          <Button
            asChild
            className="rounded-full shadow-md shadow-primary/20 transform-gpu hover:scale-105 transition-transform duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1ZO2pCXvfs7SHn9HAdCFgsI9vB2IuxCow/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Bottom Curved */}
      <motion.nav
        variants={mobileVariants}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 transform-gpu"
      >
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-xl border border-white/20 dark:border-zinc-800/50">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <span className="font-bold text-sm text-foreground">
              MiawMatkul
            </span>
          </div>

          <Button
            asChild
            className="rounded-xl shadow-md shadow-primary/20 transform-gpu active:scale-95 transition-transform duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1ZO2pCXvfs7SHn9HAdCFgsI9vB2IuxCow/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-1" />
              APK
            </a>
          </Button>
        </div>

        {/* Mobile Menu Dropdown (animates expanding upwards) */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute bottom-full left-0 right-0 mb-3 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-border shadow-xl flex flex-col gap-2 transform-gpu optimize-gpu"
          >
            <a
              href="#fitur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium p-3 hover:bg-muted rounded-lg text-foreground"
            >
              Fitur
            </a>
            <a
              href="#install"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium p-3 hover:bg-muted rounded-lg text-foreground"
            >
              Cara Install
            </a>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
