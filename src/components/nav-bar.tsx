"use client";

import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/resume", label: "Resume" }
];

export function NavBar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <nav className="menu-bar" aria-label="Primary navigation">
      <Link className="menu-identity" href="/" aria-label="Chelsea home">
        <Image
          alt="Chelsea profile photo"
          className="menu-avatar"
          height={24}
          src="/chelsea-profile.jpg"
          width={24}
          priority
        />
        <span className="menu-name">Chelsea</span>
        <span className="menu-handle">@chelseadopamin</span>
      </Link>

      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="menu-toggle"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" size={15} /> : <Menu aria-hidden="true" size={15} />}
      </button>

      <div className={cn("menu-links", isOpen && "menu-links-open")}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn("menu-link", isActive && "menu-link-active")}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
        <a
          aria-label="GitHub"
          className="menu-icon-link"
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github aria-hidden="true" size={15} />
        </a>
        <a
          aria-label="LinkedIn"
          className="menu-icon-link"
          href="https://www.linkedin.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin aria-hidden="true" size={15} />
        </a>
        <button
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="menu-icon-link menu-theme-button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          type="button"
        >
          {isDark ? <Sun aria-hidden="true" size={15} /> : <Moon aria-hidden="true" size={15} />}
        </button>
      </div>
    </nav>
  );
}
