// Deprecated: use DisplayHeading instead. Kept as re-export shim.
import { DisplayHeading } from "./DisplayHeading";

type Props = {
  lines: string[][] | string[];
  className?: string;
  as?: "h1" | "h2";
  trigger?: "load" | "scroll";
  glow?: boolean;
};

export const SignatureHeading = ({ lines, className, as = "h1", trigger = "load", glow = false }: Props) => {
  const flat: string[] = Array.isArray(lines[0])
    ? (lines as string[][]).map((l) => l.join(" "))
    : (lines as string[]);
  return (
    <DisplayHeading
      lines={flat}
      as={as}
      size="hero"
      align="left"
      glow={glow}
      trigger={trigger === "load" ? "immediate" : "scroll"}
      className={className}
    />
  );
};
