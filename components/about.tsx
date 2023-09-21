"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in with a Bachelor's degree in{" "}
        <span className="font-semibold">
          Electronics and Communication Engineering.{" "}
        </span>
        My journey in technology has been fueled by a relentless curiosity and a
        desire to create <span className="font-semibold">innovative</span>{" "}
        solutions. With over <span className="font-semibold">three years</span>{" "}
        of practical experience, I've cultivated expertise in front-end and
        back-end development, DevOps tools, cloud technologies, and Linux
        systems.
      </p>

      <p>
        Beyond coding, I'm an avid{" "}
        <span className="font-semibold">tech enthusiast</span> who loves staying
        updated with the latest industry trends. I thrive on new challenges and
        believe in pushing the boundaries of what technology can achieve.
      </p>
    </motion.section>
  );
}
