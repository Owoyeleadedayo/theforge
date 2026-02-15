import { Brain, Briefcase } from "lucide-react";

const HupoSection = () => {
  return (
    <section id="hupo" className="px-6 py-15 md:py-24 bg-[#1D212B] text-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#CC7133] font-semibold">
            Practical Strategy & Execution
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold">HUPO School of Strategy</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Where leaders learn to think deeply, decide wisely, and execute consistently. 
            A learning engine for builders — leaders who don't just want inspiration, but 
            clarity, systems, and execution strength rooted in African realities.
          </p>
          <p className="text-base italic text-white/60">
            This isn't a business school. It's a school of strategic thought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#CC7133]/30 transition-all duration-300">
            <Briefcase className="w-8 h-8 text-[#CC7133] mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2 font-sans">
              Strategy Execution Lab
            </h3>
            <p className="text-sm uppercase tracking-wider text-white/50 mb-3 font-sans">
              For Leadership Teams
            </p>
            <p className="text-white/70">
              A premium engagement for organizations where strategic plans consistently die 
              in execution. We diagnose the real blockers, build decision systems that clarify 
              accountability, and create execution rhythms that produce results.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#CC7133]/30 transition-all duration-300">
            <Brain className="w-8 h-8 text-[#CC7133] mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2 font-sans">
              Strategic Thinking Lab
            </h3>
            <p className="text-sm uppercase tracking-wider text-white/50 mb-3 font-sans">
              For Individual Leaders
            </p>
            <p className="text-white/70">
              A transformative 6-week cohort for founders, executives, ministry leaders, and 
              high-capacity professionals who need strategic muscle. Learn to see the system 
              beneath the problem and build execution discipline into your daily work.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-white text-2xl font-semibold mb-6">This is for you if…</h3>
          <ul className="space-y-3 max-w-2xl mx-auto text-left md:pl-15">
            {[
              "You're carrying a lot and need clarity for the next phase.",
              "Your organization is growing but systems aren't keeping up.",
              "You want to build with excellence without losing your soul, your family, or your faith.",
              "You need African-rooted frameworks and Monday-ready tools — not theory you can't apply.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC7133] mt-2.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HupoSection;
