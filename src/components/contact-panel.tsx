"use client";

import { Check, Copy, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const email = "chelseayang4625@gmail.com";

type ContactLink = {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
};

const contactLinks: ContactLink[] = [
  {
    href: "https://www.linkedin.com/in/chelsea-yang-21204930b/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "chelsea-yang-21204930b"
  },
  {
    href: "https://github.com/CHELSEADOPAMIN",
    icon: Github,
    label: "GitHub",
    value: "CHELSEADOPAMIN"
  }
];

export function ContactPanel() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");

      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="contact-panel">
      <div className="contact-intro">
        <div className="contact-stamp" aria-hidden="true">
          <Image
            alt=""
            className="contact-stamp-image"
            height={120}
            src="/chelsea-profile.jpg"
            width={120}
          />
        </div>
        <div>
          <p className="contact-kicker">Contact</p>
          <h2>Reach Chelsea</h2>
        </div>
      </div>

      <div className="contact-list" aria-label="Contact methods">
        <div className="contact-row">
          <div className="contact-method-icon">
            <Mail aria-hidden="true" size={17} />
          </div>
          <div className="contact-method-copy">
            <span>Email</span>
            <strong>{email}</strong>
          </div>
          <button className="contact-action" onClick={copyEmail} type="button">
            {copied ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {contactLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              className="contact-row contact-row-link"
              href={item.href}
              key={item.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="contact-method-icon">
                <Icon aria-hidden="true" size={17} />
              </div>
              <div className="contact-method-copy">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
              <span className="contact-action contact-open">Open</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
