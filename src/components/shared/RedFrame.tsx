import { ReactNode } from "react";

type Side = "right" | "left";

type Props = {
  children: ReactNode;
  className?: string;
  /** Vertical stripe side. Bottom stripe is always rendered to form an L. */
  side?: Side;
  /** Kept for API compatibility — not used in the L variant. */
  double?: boolean;
};

const STRIPE_W = 10;
const GAP = "10%";

export const RedFrame = ({ children, className = "", side = "right" }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">{children}</div>
    </div>
  );
};