import { Shield, Globe, Award } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Quality Assured",
    desc: "Every product sourced from GMP-certified manufacturers. We work with regulatory bodies to ensure compliance across all markets.",
  },
  {
    icon: Globe,
    title: "Global Sourcing Network",
    desc: "Partnerships with manufacturers in Pakistan, India, China, Hungary, the Netherlands, UK, and Bangladesh — covering a broad therapeutic range.",
  },
  {
    icon: Award,
    title: "Four Decades in Africa",
    desc: "Our group's first company, Healthcare Ltd, was established in Uganda in 1984 — making us one of the earliest pharmaceutical wholesalers in the region.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-slate-50 relative">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-secondary"></span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary">About Us</span>
          </div>
          <h2 className="font-display font-semibold text-slate-800 mb-8 leading-[1.1] text-4xl tracking-tight">
            A Legacy of Trust in African Healthcare
          </h2>
          <div className="space-y-6 text-slate-500 leading-relaxed text-lg font-body">
            <p>
              HealthSync Pharma Ltd is Zambia's modern wholesale pharmaceutical distributor, part of a group that has been operating in Africa since <span className="text-slate-800 font-medium">1984</span>. From our base in Lusaka, we supply hospitals, clinics, and pharmacies with quality medicines sourced from over 25 global manufacturers.
            </p>
            <p>
              Our group operates across Uganda, Rwanda, and Zambia through sister companies including Healthcare Ltd (est. 1984), Multiple Super Investments Ltd (est. 1990), Shifa Chemists Ltd (est. 2005), Revital Healthcare Ltd (est. 2019), and Afri Healthcare Ltd in Rwanda (est. 2018).
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-secondary/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <p.icon className="text-slate-400 group-hover:text-secondary transition-colors duration-300" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-800 mb-2 text-xl">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
