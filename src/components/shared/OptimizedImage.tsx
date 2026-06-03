import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "loading" | "decoding"> & {
  src: string;
  alt: string;
  priority?: boolean;
};

/**
 * Reusable image wrapper that adds lazy/eager loading, async decoding,
 * fetch priority and a smooth fade-in once the image has loaded.
 * Extra props (style, draggable, onClick, etc.) are forwarded to the <img>.
 */
const OptimizedImage = ({ src, alt, className = "", priority = false, ...rest }: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Handle images that are already cached/complete before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...({ fetchpriority: priority ? "high" : "auto" } as Record<string, string>)}
      onLoad={() => setLoaded(true)}
      className={`oimg ${loaded ? "loaded" : ""} ${className}`.trim()}
      {...rest}
    />
  );
};

export default OptimizedImage;