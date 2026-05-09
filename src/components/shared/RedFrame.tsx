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

const STRIPE_W = 7;
const GAP = "10%";

export const RedFrame = ({ children, className = "", side = "right" }: Props) => {
  const isRight = side === "right";
  const padStyle: React.CSSProperties = {
    paddingRight: isRight ? STRIPE_W : 0,
    paddingLeft: isRight ? 0 : STRIPE_W,
    paddingBottom: STRIPE_W,
  };

  // L-shape clip so a single diagonal pattern flows continuously across both arms
  const clip = isRight
    ? `polygon(calc(100% - ${STRIPE_W}px) ${GAP}, 100% ${GAP}, 100% 100%, ${GAP} 100%, ${GAP} calc(100% - ${STRIPE_W}px), calc(100% - ${STRIPE_W}px) calc(100% - ${STRIPE_W}px))`
    : `polygon(0 ${GAP}, ${STRIPE_W}px ${GAP}, ${STRIPE_W}px calc(100% - ${STRIPE_W}px), calc(100% - ${GAP}) calc(100% - ${STRIPE_W}px), calc(100% - ${GAP}) 100%, 0 100%)`;

  return (
    <div className={`relative ${className}`} style={padStyle}>
      <div className="relative">{children}</div>

      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, #fcf7f5 0px, #fcf7f5 2px, transparent 2px, transparent 7px)",
          clipPath: clip,
          WebkitClipPath: clip,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};