import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = ref.current;
    if (!dot) return;

    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const enter = () => dot.classList.add("is-hover");
    const leave = () => dot.classList.remove("is-hover");

    const interactive = 'a, button, [role="button"], .cursor-target';
    const bind = () => {
      document.querySelectorAll(interactive).forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden />;
};
