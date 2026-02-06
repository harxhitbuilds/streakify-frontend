"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navbarConfig } from "@/constants/nav";

import { AuthButton } from "../auth/auth-button";
import ModifiedBtn from "../global/btn";
import Container from "../global/container";
import ModeToggleButton from "../theme/mode-toggle-btn";

export default function Navbar() {
  return (
    <nav className="border-border fixed top-0 left-0 z-50 w-full border-b bg-transparent backdrop-blur-2xl">
      <Container>
        <div className="flex h-20 w-full items-center justify-between px-6 md:px-12">
          <div className="font-display flex items-center gap-2 text-xl font-semibold">
            <h1>{navbarConfig.name}</h1>
          </div>

          <div className="hidden space-x-12 md:flex">
            {navbarConfig.navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-muted-foreground text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <ModeToggleButton />
            <AuthButton />
          </div>

          <div className="flex items-center md:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center justify-center rounded-lg transition md:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <IconMenu2 className="text-foreground h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-background fixed inset-0 z-50 flex h-screen flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                className="hover:bg-accent rounded-lg p-2 transition"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <IconX className="text-foreground h-7 w-7" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navbarConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary text-3xl font-bold transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={navbarConfig.button.href}
                onClick={() => setOpen(false)}
              >
                <Button className="bg-foreground text-background hover:bg-primary mt-6 w-48 rounded-xl text-lg font-semibold shadow transition">
                  {navbarConfig.button.label}
                </Button>
              </Link>
              <div className="mt-8">
                <ModeToggleButton />
              </div>
            </div>

            <div className="mb-8 flex justify-center">
              <span className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} {navbarConfig.name}
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
