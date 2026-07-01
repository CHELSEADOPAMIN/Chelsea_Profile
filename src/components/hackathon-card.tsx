import { ExternalLink, Github, Globe2 } from "lucide-react";
import Image from "next/image";

import type { HackathonEntry } from "@/data/hackathons";
import { MacWindowCard } from "@/components/mac-window-card";
import { RibbonBadge } from "@/components/ribbon-badge";

const linkIcons = {
  github: Github,
  website: Globe2,
  devpost: ExternalLink
};

type HackathonCardProps = {
  entry: HackathonEntry;
};

export function HackathonCard({ entry }: HackathonCardProps) {
  const links = Object.entries(entry.links).filter(([, href]) => Boolean(href));
  const hasCoverImage = Boolean(entry.imageSrc);

  return (
    <article className="hackathon-card">
      <MacWindowCard title={entry.title} contentClassName="hackathon-card-content">
        <div
          className={`hackathon-cover hackathon-cover-${entry.image} ${
            hasCoverImage ? "hackathon-cover-with-image" : ""
          }`}
        >
          {entry.imageSrc ? (
            <Image
              alt={entry.imageAlt ?? `${entry.title} photo`}
              className="hackathon-cover-image"
              fill
              sizes="(max-width: 640px) calc(100vw - 18px), (max-width: 880px) 50vw, 33vw"
              src={entry.imageSrc}
            />
          ) : null}
          {entry.badge ? <RibbonBadge type={entry.badge} /> : null}
          <div className="cover-grid" aria-hidden="true" />
          {!hasCoverImage ? (
            <div className="cover-icon" aria-hidden="true">
              {entry.title.slice(0, 2)}
            </div>
          ) : null}
        </div>
        <header className="hackathon-card-header">
          <h2>{entry.title}</h2>
          <p>{entry.award}</p>
        </header>
        <div className="hackathon-description">
          <p>{entry.description}</p>
          {entry.descriptionAlt ? <p className="description-alt">{entry.descriptionAlt}</p> : null}
        </div>
        <footer className="hackathon-footer">
          <div className="hackathon-links" aria-label={`${entry.title} links`}>
            {links.map(([kind, href]) => {
              const Icon = linkIcons[kind as keyof typeof linkIcons];

              return (
                <a
                  aria-label={`${entry.title} ${kind}`}
                  href={href}
                  key={kind}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" size={15} strokeWidth={2} />
                </a>
              );
            })}
          </div>
          <span>
            {entry.date} · {entry.location}
          </span>
        </footer>
      </MacWindowCard>
    </article>
  );
}
