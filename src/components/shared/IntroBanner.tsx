import { SignatureHeading } from "./SignatureHeading";

type Props = {
  lines: string[][];
  subtitle?: string;
  height?: string;
};

export const IntroBanner = ({ lines, subtitle, height = "60vh" }: Props) => (
  <section
    className="relative w-full bg-brand-red text-brand-white px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24 pt-32"
    style={{ minHeight: height }}
  >
    <SignatureHeading lines={lines} as="h1" />
    {subtitle && (
      <p className="mt-8 max-w-[640px] text-lg md:text-xl leading-[1.5]">{subtitle}</p>
    )}
  </section>
);
