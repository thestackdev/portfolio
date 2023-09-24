"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [form, setForm] = useState({
    senderEmail: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      toast.success("Message sent!");
      setForm({ senderEmail: "", message: "" });
    } else {
      toast.error("Message failed to send.");
    }
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shanmukeshwar03@gmail.com">
          shanmukeshwar03@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={form.senderEmail}
          onChange={(e) => setForm({ ...form, senderEmail: e.target.value })}
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
