"use client";

import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#career", label: "Career" },
  { href: "#skills", label: "How I Lead" },
  { href: "/writing", label: "Blogs" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "h-14 border-b border-divider/30"
            : "h-20 border-b border-transparent"
        }`}
      >
        <a
          href="/"
          className="group flex items-center gap-3 text-heading font-semibold tracking-tight text-sm"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-amber-800 flex items-center justify-center text-amber-100 text-xs font-bold shadow-sm group-hover:shadow-md transition-shadow duration-200">
            AS
          </span>
          <span className="hidden sm:inline">Akhil Sharma</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted hover:text-heading transition-colors duration-200 rounded-lg hover:bg-foreground/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 bg-accent hover:bg-accent/90 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-heading rounded-lg hover:bg-foreground/5 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-background shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-divider/30">
            <span className="text-heading font-semibold text-sm">
              Menu
            </span>
            <button
              className="p-2 -mr-2 text-heading rounded-lg hover:bg-foreground/5 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-heading font-medium text-base py-3 px-4 rounded-lg hover:bg-foreground/5 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-divider/30 my-3" />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-accent hover:bg-accent/90 text-white text-center font-medium text-base py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
