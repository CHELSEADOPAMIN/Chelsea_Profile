import type { Metadata } from "next";

import { ContactPanel } from "@/components/contact-panel";
import { MacWindowCard } from "@/components/mac-window-card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chelsea Yang by email, LinkedIn, or GitHub."
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="page-heading">
        <p className="eyebrow">Finder / Contact</p>
        <h1>Contact</h1>
        <p>Email, LinkedIn, and GitHub in one place</p>
      </header>

      <MacWindowCard title="Contact Chelsea" contentClassName="contact-window-content">
        <ContactPanel />
      </MacWindowCard>
    </main>
  );
}
