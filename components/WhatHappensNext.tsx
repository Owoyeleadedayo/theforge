const WhatHappensNext = () => {
  return (
    <section className="px-6 py-24 bg-[#F6F2EE]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          What Happens Next
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-card border border-black/50">
            <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
              If you sign up for updates
            </h3>
            <p className="text-muted-foreground">
              You'll receive curated announcements and invitations — not noise.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-black/50">
            <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
              If you apply to volunteer
            </h3>
            <p className="text-muted-foreground">
              We'll contact you for a short onboarding conversation if there's a fit.
            </p>
          </div>
        </div>

        <div className="pt-8 max-w-2xl mx-auto">
          <p className="text-muted-foreground italic leading-relaxed">
            "I'm building this next season from a place of gratitude, conviction, and clarity. 
            Carrying lessons from years of leadership, ministry operations, people development, 
            and building teams that serve with excellence."
          </p>
          <p className="text-foreground font-medium mt-4">
            If you've been looking for a home to grow and a mission to build — welcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
