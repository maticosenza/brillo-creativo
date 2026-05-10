import { DisplayHeading } from "./DisplayHeading";

type Props = {
  lines: string[][] | string[];
  subtitle?: string;
  height?: string;
  trigger?: "immediate" | "scroll" | "static" | "typewriter";
};

export const IntroBanner = ({ lines, subtitle, height = "60vh", trigger = "immediate" }: Props) => {
  const flatLines: string[] = Array.isArray(lines[0])
    ? (lines as string[][]).map((l) => l.join(" "))
    : (lines as string[]);
  return (
    <section
      className="relative w-full bg-brand-red text-brand-white px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24 pt-32"
      style={{ minHeight: height }}
    >
      <DisplayHeading lines={flatLines} as="h1" size="hero" align="left" glow={false} trigger={trigger} />
      {subtitle && (
        <p className="mt-8 max-w-[640px] text-lg md:text-xl leading-[1.5]">{subtitle}</p>
      )}
    </section>
  );
};
