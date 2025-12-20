import { Target, Users, Rocket, Zap } from "lucide-react";

const About = () => {
  const features = [
    // {
    //   icon: Target,
    //   title: "Mission",
    //   description: "Empowering students through innovation, technology, and competitive gaming excellence.",
    // },
    // {
    //   icon: Users,
    //   title: "Community",
    //   description: "Bringing together 1000+ students from across the region for an unforgettable experience.",
    // },
    // {
    //   icon: Rocket,
    //   title: "Innovation",
    //   description: "Showcasing cutting-edge tech projects, gaming tournaments, and cultural performances.",
    // },
    // {
    //   icon: Zap,
    //   title: "Energy",
    //   description: "High-octane competitions, adrenaline-pumping challenges, and electrifying entertainment.",
    // },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-card/50 border border-primary/30 mb-4">
            {<span className="text-sm font-orbitron font-semibold text-primary uppercase tracking-wider">
              About the Event
            </span>}
          </div>
          {/* <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-secondary">What is</span>{" "}
            <span className="text-primary">SPARK 2K25?</span>
          </h2> */}
          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            SPARK 2K25 is SV College's flagship annual event that brings together the brightest minds 
            and most talented performers for an electrifying celebration of creativity, competition, and teamwork. 
            From intense gaming tournaments to challenging coding contests and captivating cultural performances, 
            SPARK offers something for everyone.
          </p> */}
        </div>



        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10000+", label: "Participants" },
            { value: "120+", label: "Events" },
            { value: "₹10L+", label: "Prize Pool" },
            { value: "2", label: "Days of Action" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card/30 border border-border"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-exo">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
