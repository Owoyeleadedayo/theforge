const PathSection = () => {
    return (
      <section className="px-6 py-15 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-2">
              Which Path Fits You?
            </h2>
            <p className="text-black text-base md:text-lg">
              Two paths, one mission — find where you belong.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#CC7133] font-semibold font-sans">
                Formation & Community
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
              THE CHURCH is for you if…
              </h3>
              <p className="text-black/70 leading-relaxed">
                You desire spiritual depth, supportive church community, and a practical path 
                to living out your calling with consistency.
              </p>
              <button
                onClick={() => document.getElementById("updates-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center text-[#CC7133] font-medium hover:underline underline-offset-4 font-sans text-sm pt-2"
              >
                Get updates →
              </button>
            </div>
  
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#CC7133] font-semibold font-sans">
                Strategy & Execution
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                HUPO is for you if…
              </h3>
              <p className="text-black/70 leading-relaxed">
                You lead people, projects, or organizations, and you need clarity that cuts 
                through complexity, systems that drive results, and frameworks built for how 
                Africa actually works.
              </p>
              <button
                onClick={() => document.getElementById("updates-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center text-[#CC7133] font-medium hover:underline underline-offset-4 font-sans text-sm pt-2"
              >
                Get updates →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PathSection;
  