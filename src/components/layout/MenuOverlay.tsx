import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus } from "lucide-react";
import { NAV, SOCIALS, CONTACT_EMAIL } from "@/lib/nav-config";

type Props = { open: boolean; onClose: () => void };

export const MenuOverlay = ({ open, onClose }: Props) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] bg-brand-red text-brand-white flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
        >
          <div className="flex items-center justify-between px-6 md:px-12 py-6">
            <Link to="/" onClick={onClose} className="font-display text-2xl tracking-tight">
              PRODUCTORA
            </Link>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="relative w-10 h-10 flex items-center justify-center group"
            >
              <span className="absolute w-7 h-[2px] bg-brand-white rotate-45" />
              <span className="absolute w-7 h-[2px] bg-brand-white -rotate-45" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 overflow-y-auto">
            <ul className="space-y-2 md:space-y-3">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/10"
                >
                  <div className="flex items-center justify-between gap-6 group py-2">
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="menu-item relative font-display text-menu uppercase leading-none transition-colors duration-300 hover:text-brand-black"
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-brand-white origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </Link>
                    {item.children && (
                      <button
                        onClick={() =>
                          setExpanded(expanded === item.href ? null : item.href)
                        }
                        aria-label={`Ver submenú de ${item.label}`}
                        aria-expanded={expanded === item.href}
                        className="shrink-0 p-2"
                      >
                        <Plus
                          className={`w-6 h-6 transition-transform duration-300 ${
                            expanded === item.href ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.children && expanded === item.href && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-2 md:pl-8"
                      >
                        {item.children.map((child, ci) => (
                          <motion.li
                            key={child.href}
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: ci * 0.05 }}
                            className="py-2"
                          >
                            <Link
                              to={child.href}
                              onClick={onClose}
                              className="text-[22px] font-body text-brand-white underline-link"
                            >
                              {child.label}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="px-6 md:px-12 py-8 border-t border-white/10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-6">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-link text-sm uppercase tracking-[0.2em] font-medium"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline-link font-display text-2xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
