import { cn } from "@/lib/utils";

export type RibbonBadgeType = "WINNER" | "FINALIST" | "HONORABLE";

type RibbonBadgeProps = {
  type: RibbonBadgeType;
};

const labelMap: Record<RibbonBadgeType, string> = {
  WINNER: "WINNER",
  FINALIST: "FINALIST",
  HONORABLE: "HONORABLE"
};

export function RibbonBadge({ type }: RibbonBadgeProps) {
  return (
    <span className={cn("ribbon-badge", `ribbon-badge-${type.toLowerCase()}`)}>
      {labelMap[type]}
    </span>
  );
}
