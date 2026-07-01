import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type RetroButtonVariant = "aqua" | "system7" | "blue";

type RetroButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: RetroButtonVariant;
};

const variantClasses: Record<RetroButtonVariant, string> = {
  aqua: "retro-button-aqua",
  system7: "retro-button-system7",
  blue: "retro-button-blue"
};

export function RetroButton({
  children,
  className,
  href,
  variant = "aqua",
  ...props
}: RetroButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        className={cn("retro-button", variantClasses[variant], className)}
        href={href}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={cn("retro-button", variantClasses[variant], className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
