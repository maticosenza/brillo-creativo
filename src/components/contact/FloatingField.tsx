import { ReactNode, useId, useState } from "react";

type Props = {
  label: string;
  required?: boolean;
  children: (props: { id: string; onFocus: () => void; onBlur: () => void; "aria-required"?: boolean }) => ReactNode;
  hasValue: boolean;
};

export const FloatingField = ({ label, required, children, hasValue }: Props) => {
  const id = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pt-6">
      <label
        htmlFor={id}
        className="absolute left-0 top-0 origin-left pointer-events-none text-[12px] uppercase tracking-[0.2em] text-brand-white/90"
      >
        {label}{required && <span aria-hidden> *</span>}
      </label>
      <div className="relative">
        {children({
          id,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          "aria-required": required,
        })}
        <span aria-hidden className="block absolute left-0 right-0 bottom-0 h-px bg-brand-white/40" />
        <span
          aria-hidden
          className={`block absolute left-0 right-0 bottom-0 h-px bg-brand-white origin-left transition-transform duration-300 ${
            focused ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export const inputClass =
  "w-full bg-transparent border-0 outline-none text-[18px] text-brand-white py-4 px-0 appearance-none focus:ring-0";
