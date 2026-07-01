import type { Metadata } from "next";

import { HackathonCard } from "@/components/hackathon-card";
import { hackathons, hackathonStats } from "@/data/hackathons";

export const metadata: Metadata = {
  title: "Hackathons",
  description: "Chelsea's hackathon projects, awards, and prototypes."
};

export default function HackathonsPage() {
  return (
    <main className="hackathons-page">
      <header className="page-heading">
        <p className="eyebrow">Archive</p>
        <h1>Hackathons</h1>
        <p>
          {hackathonStats.wins} wins, {hackathonStats.total} total
        </p>
      </header>

      <section className="hackathon-grid" aria-label="Hackathon entries">
        {hackathons.map((entry) => (
          <HackathonCard entry={entry} key={`${entry.title}-${entry.date}`} />
        ))}
      </section>
    </main>
  );
}
