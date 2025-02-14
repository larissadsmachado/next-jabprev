"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

interface LinkProps {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [-0.5, 0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();

    if (rect) {
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-[#e2ad00] transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-[#e2ad00] transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{ top, left, translateX: "-50%", translateY: "-50%" }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-[#e2ad00]" />
      </motion.div>
    </motion.a>
  );
};

export const HoverImageLinks: React.FC = () => {
  return (
    <section className="bg-[#113183] p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link heading="About" subheading="Learn what we do here" imgSrc="/imgs/random/11.jpg" href="#" />
        <Link heading="Clients" subheading="We work with great people" imgSrc="/imgs/random/6.jpg" href="#" />
        <Link heading="Portfolio" subheading="Our work speaks for itself" imgSrc="/imgs/random/4.jpg" href="#" />
        <Link heading="Careers" subheading="We want cool people" imgSrc="/imgs/random/5.jpg" href="#" />
        <Link heading="Fun" subheading="Incase you're bored" imgSrc="/imgs/random/10.jpg" href="#" />
      </div>
    </section>
  );
};

export default HoverImageLinks;
