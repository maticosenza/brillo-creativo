type Props = {
  title: React.ReactNode;
  image: string;
  mobileImage?: string;
  alt?: string;
};

export const PageHero = ({ title, image, mobileImage, alt = "" }: Props) => {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-brand-black text-brand-white">
      {mobileImage ? (
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImage} />
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      ) : (
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24">
        <h1 className="font-display uppercase leading-[0.9] text-[clamp(56px,11vw,180px)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {title}
        </h1>
        <div aria-hidden style={{ marginTop: 24 }}>
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4 L24 24 L44 4" stroke="#c0181b" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};
