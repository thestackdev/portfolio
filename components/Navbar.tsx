"use client";

// import { MenuIcon, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex flex-row w-full mx-auto justify-between max-w-[1200px] p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Shanmukeshwar
      </h1>
      <div className="flex flex-row scroll-m-20 text-lg font-medium tracking-tight lg:text-xl">
        <ul className="flex gap-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
