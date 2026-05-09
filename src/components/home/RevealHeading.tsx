type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export const RevealHeading = ({ text, className = "", as = "h2" }: Props) => {
  const Tag = as as any;
  return <Tag className={className}>{text}</Tag>;
};
