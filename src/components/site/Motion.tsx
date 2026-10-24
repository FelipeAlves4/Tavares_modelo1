import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SplitHeadline({ text, className = "", as = "h2", delay = 0 }: { text: string; className?: string; as?: "h1" | "h2"; delay?: number }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={{ once: true }} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{ hidden: reduce ? {} : { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 1, ease, delay: delay + i * 0.07 }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

type ImgProps = { src: string; alt: string; className?: string; eager?: boolean; parallax?: boolean; zoom?: boolean; ratio?: string };

export function RevealImage({ src, alt, className = "", eager, parallax = true, zoom = true, ratio = "aspect-[4/5]" }: ImgProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce || !parallax ? ["0%", "0%"] : ["-5%", "5%"]);
  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden bg-sand ${ratio} ${className}`}
      initial={reduce ? false : { clipPath: "inset(12% 0% 12% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.3, ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={{ y }}
        className={`absolute inset-[-6%] h-[112%] w-[112%] max-w-none object-cover transition-transform duration-[1400ms] ease-out ${zoom ? "group-hover:scale-[1.04]" : ""}`}
      />
    </motion.div>
  );
}
