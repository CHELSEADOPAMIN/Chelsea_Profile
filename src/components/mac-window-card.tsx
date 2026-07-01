import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MacWindowCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  title?: string;
};

export function MacWindowCard({
  children,
  className,
  contentClassName,
  title = "Chelsea"
}: MacWindowCardProps) {
  return (
    <section className={cn("mac-window", className)}>
      <div className="mac-titlebar" aria-hidden="true">
        <div className="traffic-lights">
          <span className="traffic-light close" />
          <span className="traffic-light minimize" />
          <span className="traffic-light maximize" />
        </div>
        <span className="mac-titlebar-title">{title}</span>
      </div>
      <div className={cn("mac-window-content", contentClassName)}>{children}</div>
    </section>
  );
}
