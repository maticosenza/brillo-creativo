import { ChevronDown } from "lucide-react";

type Props = {
  title: React.ReactNode;
  image: string;
  alt?: string;
};

export const PageHero = ({ title, image, alt = "" }: Props) => {
  return (
    <section className="relative w-screen h-screen min-h-[640px] overflow-hidden bg-brand-black text-brand-white -mt-[72px]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24">
        <h1 className="font-display uppercase leading-[0.9] text-[clamp(56px,11vw,180px)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {title}
        </h1>
        <ChevronDown className="mt-4 w-8 h-8 text-brand-red" strokeWidth={2.5} />
      </div>
    </section>
  );
};
