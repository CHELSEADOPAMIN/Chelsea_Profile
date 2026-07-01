import { FileText, FolderKanban, Mail, Trophy } from "lucide-react";
import Image from "next/image";

import { MacWindowCard } from "@/components/mac-window-card";
import { RetroButton } from "@/components/retro-button";

export function HeroSection() {
  return (
    <main className="home-shell">
      <MacWindowCard title="Chelsea Profile" contentClassName="hero-window-content">
        <section className="hero-section" aria-labelledby="home-title">
          <div className="hero-copy">
            <h1 id="home-title">Hello, I&apos;m Chelsea 👋</h1>
            <p className="hero-subtitle">Builder × Hacker × Designer</p>
          </div>

          <div className="avatar-stage">
            <div className="avatar-disc" aria-hidden="true" />
            <Image
              alt="Chelsea portrait"
              className="hero-avatar"
              height={220}
              src="/chelsea-profile.jpg"
              width={220}
              priority
            />
          </div>

          <div className="hero-actions" aria-label="Primary actions">
            <RetroButton href="/contact" variant="blue">
              <Mail aria-hidden="true" size={15} />
              Contact
            </RetroButton>
            <RetroButton href="/projects" variant="aqua">
              <FolderKanban aria-hidden="true" size={15} />
              Projects
            </RetroButton>
            <RetroButton href="/hackathons" variant="aqua">
              <Trophy aria-hidden="true" size={15} />
              Hackathons
            </RetroButton>
            <RetroButton href="/resume" variant="aqua">
              <FileText aria-hidden="true" size={15} />
              Resume
            </RetroButton>
          </div>
        </section>
      </MacWindowCard>
    </main>
  );
}
