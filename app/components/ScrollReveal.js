"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "50px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const dirClass =
    direction === "left"
      ? "reveal--left"
      : direction === "right"
        ? "reveal--right"
        : direction === "scale"
          ? "reveal--scale"
          : "";

  return (
    <div ref={ref} className={`reveal ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
