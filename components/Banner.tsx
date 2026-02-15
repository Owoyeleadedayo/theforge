"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Banner = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex relative min-h-[80vh] md:h-screen bg-[url('/img/boye.jpeg')] bg-no-repeat bg-cover bg-fixed bg-top">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 gap-1 md:gap-3">
        <p className="text-white/90 text-sm md:text-base font-medium uppercase">
          a new season begins
        </p>
        <div className="flex flex-col justify-center items-center gap-2 pt-1 md:pt-3">
          <h1 className="text-white/80 text-base md:text-5xl font-medium">My Next Chapter</h1>
          <p className="max-w-220 text-white/90 text-center text-sm md:text-xl">
            After my release from Daystar Christian Centre, I'm stepping into
            two connected assignments —{" "}
            <span className="text-white font-semibold">ONEFORGE</span> and{" "}
            <span className="text-white font-semibold">
              HUPO School of Strategy
            </span>
            : a home for spiritual formation, church community, and courageous
            builders… and a practical learning engine for leaders who must
            deliver results.
          </p>
          <p className="text-white/80 text-sm md:text-base text-center italic pt-4">
            Rooted in faith. Built with excellence. Open to those called to grow
            and build.
          </p>
        </div>

        <div className="flex gap-2 md:gap-4 pt-2 md:pt-5">
            <Button className='text-white/90 text-sm md:text-base border border-white rounded-2xl bg-white/20 cursor-pointer hover:bg-white/35 hover:scale-105 ease-in-out transition-all duration-300' onClick={() => scrollTo("updates-form")}>Get Updates</Button>
            <Button className='text-white/90 text-sm md:text-base border border-white rounded-2xl bg-white/20 cursor-pointer hover:bg-white/35 hover:scale-105 ease-in-out transition-all duration-300' onClick={() => scrollTo("volunteer-form")}>Volunteer with ONEFORGE</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
