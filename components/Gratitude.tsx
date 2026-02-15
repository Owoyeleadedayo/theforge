import React from "react";

const Gratitude = () => {
  return (
    <section className="flex flex-col bg-[#F6F2EE] w-full justify-center items-center px-5 py-10 md:py-20 gap-20">
      <div className="flex flex-col justify-center items-center gap-3 md:gap-6">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-black text-2xl md:text-4xl font-medium ">
            A Foundation of Gratitude
          </p>
          <p className="text-gray-700/70 max-w-230 text-center font-normal text-base md:text-lg">
            For over two decades, I've had the privilege of serving, learning,
            and building under the oversight of <span className="font-bold">Pastors Sam & Nike Adeyemi at Daystar Christian Centre.</span> I carry deep gratitude
            for the people, the relationships, and the work we have shared.
          </p>
        </div>
        <p className="text-gray-700/70 text-center text-normal py-3 text-base md:text-lg">
          This next season isn't a departure from calling.{" "}
          <span className="text-black/95 font-normal">
            It's a fresh expression of it.
          </span>
        </p>

        <p className="text-gray-700/70 text-normal max-w-230 text-center text-base md:text-lg">
          I'm building with the same convictions: God-first, people-centered,
          and excellence-driven. And I want you to be able to follow the journey
          — and if you feel stirred, to help build it.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-black text-2xl md:text-4xl font-medium ">Hear the Vision</p>
        <p className="text-gray-700/70 font-normal text-center text-base md:text-lg">A short word on what's ahead and why it matters.</p>
        <div className="flex flex-col w-full md:w-180 h-70 md:h-100 bg-[#EDEBE8] justify-center items-center rounded-xl mt-2 border border-black/10 gap-2">
            play
            <p className="text-base text-black/80 font-medium capitalize">Time to build</p>
            <p className="text-sm text-gray-700/50 ">video coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Gratitude;
