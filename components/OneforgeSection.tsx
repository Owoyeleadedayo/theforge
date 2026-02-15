import { Flame, Users, Target, TreePine } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Formation",
    description: "Where faith becomes practice, not just information.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Where people are known, supported, and strengthened.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Where gifts are refined and deployed for Kingdom influence.",
  },
  {
    icon: TreePine,
    title: "Building",
    description: "Where consistent growth produces visible fruit.",
  },
];

const OneforgeSection = () => {
  return (
    <section id="oneforge" className="px-6 py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-[#CC7133] uppercase tracking-[0.25em] text-accent font-semibold">
            Spiritual Formation & Church Community
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">ONEFORGE</h2>
          <p className="text-lg text-gray-700/80 max-w-3xl mx-auto">
            A mold for spiritual growth, engaging church community, and compassionate support. 
            ONEFORGE is being formed to help people flourish spiritually, personally, and 
            purposefully while they grow alongside others of like mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-2xl bg-[#F6F3EE] border border-black/10 hover:border-[#CC7133] transition-all duration-300 hover:shadow-md"
            >
              <pillar.icon className="w-8 h-8 text-[#CC7133] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2 font-sans">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F6F3EE] border border-black/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            ONEFORGE in One Sentence
          </h3>
          <p className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            "We are molding influencers for the Kingdom through formation, church community, 
            and courageous action."
          </p>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">
              What to Expect (as we build)
            </h4>
            <ul className="text-muted-foreground space-y-2 max-w-2xl mx-auto text-center">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC7133] mt-2.5 shrink-0" />
                A vibrant church community with curated growth resources
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC7133] mt-2.5 shrink-0" />
                Tools that help people apply faith to leadership, work, family, and service
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC7133] mt-2.5 shrink-0" />
                Volunteer-led teams that carry the culture and build the experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneforgeSection;
