import { Download, ExternalLink, FileText } from "lucide-react";
import type { Metadata } from "next";

import { MacWindowCard } from "@/components/mac-window-card";
import { RetroButton } from "@/components/retro-button";

const resumePath = "/Chelsea-resume.pdf";
const resumePreviewPath = `${resumePath}?v=20260629#view=FitH`;

export const metadata: Metadata = {
  title: "Resume",
  description: "Chelsea Yang's resume."
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="page-heading">
        <p className="eyebrow">Finder / Documents</p>
        <h1>Resume</h1>
        <p>Chelsea Yang</p>
      </header>

      <MacWindowCard title="ChelseaYang---Resume.pdf" className="resume-window">
        <div className="resume-toolbar">
          <div className="resume-file-label">
            <FileText aria-hidden="true" size={17} />
            <span>ChelseaYang---Resume.pdf</span>
          </div>

          <div className="resume-actions" aria-label="Resume actions">
            <RetroButton download href={resumePath} variant="system7">
              <Download aria-hidden="true" size={15} />
              Download
            </RetroButton>
            <RetroButton href={resumePath} target="_blank" variant="blue">
              <ExternalLink aria-hidden="true" size={15} />
              Open PDF
            </RetroButton>
          </div>
        </div>

        <iframe
          className="resume-pdf-frame"
          src={resumePreviewPath}
          title="Chelsea Yang resume PDF"
        />
      </MacWindowCard>
    </main>
  );
}
