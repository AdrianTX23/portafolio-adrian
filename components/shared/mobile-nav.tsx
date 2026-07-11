"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EASE_OUT_EXPO, staggerContainer } from "@/lib/motion";
import { NAV_LINKS } from "@/lib/nav-links";

const linkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="md:hidden"
      >
        <Menu className="size-5" />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            className="bg-background/98 fixed inset-0 z-[60] flex flex-col backdrop-blur-xl"
          >
            <div className="flex h-16 items-center justify-end px-6">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </Button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.07, 0.05)}
              className="flex flex-1 flex-col items-center justify-center gap-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-brand text-3xl font-semibold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
