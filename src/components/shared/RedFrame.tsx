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

const STRIPE_W = 12;
const GAP = "10%";

const stripeBg = (angle: number): React.CSSProperties => ({
  backgroundImage: `repeating-linear-gradient(${angle}deg, #fcf7f5 0px, #fcf7f5 6px, transparent 6px, transparent 12px)`,
  pointerEvents: "none",
});

export const RedFrame = ({ children, className = "", side = "right" }: Props) => {
  const isRight = side === "right";
  const padStyle: React.CSSProperties = {
    paddingRight: isRight ? STRIPE_W : 0,
    paddingLeft: isRight ? 0 : STRIPE_W,
    paddingBottom: STRIPE_W,
  };

  return (
    <div className={`relative ${className}`} style={padStyle}>
      <div className="relative">{children}</div>

      {/* Vertical stripe on the chosen side */}
      <span
        aria-hidden
        style={{
          ...stripeBg(45),
          position: "absolute",
          top: GAP,
          bottom: GAP,
          width: STRIPE_W,
          ...(isRight ? { right: 0 } : { left: 0 }),
        }}
      />

      {/* Horizontal stripe on the bottom (forms the L) */}
      <span
        aria-hidden
        style={{
          ...stripeBg(45),
          position: "absolute",
          left: GAP,
          right: GAP,
          bottom: 0,
          height: STRIPE_W,
        }}
      />
    </div>
  );
};