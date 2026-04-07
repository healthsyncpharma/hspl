import { ArrowRight, ShieldCheck, Globe2 } from "lucide-react";
import Image from "next/image";

const HeroSection = () => (
  <section id="home" className="relative min-h-[92vh] flex items-center bg-white overflow-hidden pt-20">
    <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto py-24 px-4 md:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          {/*<div className="inline-flex items-center gap-2 mb-8 animate-fade-up">
            <span className="w-8 h-px bg-secondary"></span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary"></span>
          </div>*/}

          <h1 className="font-display font-semibold leading-[1.1] text-slate-800 mb-6 animate-fade-up text-4xl md:text-5xl lg:text-6xl [animation-delay:100ms] tracking-tight">
            Quality Medicines From <span className="text-primary font-medium">Global Partners</span> to Africa
          </h1>

          <p className="leading-relaxed text-slate-500 mb-10 animate-fade-up max-w-xl text-lg [animation-delay:200ms] font-body">
            HealthSync Pharma Ltd sources pharmaceuticals from leading manufacturers across Pakistan, India, China, Europe, and Bangladesh — delivering reliable supply to healthcare providers in Zambia and East Africa.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:300ms]">
            <a
              href="#services"
              className="group inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-medium text-base hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-slate-600 font-medium px-8 py-4 rounded-full hover:bg-slate-50 transition-colors"
            >
              Talk to Our Team
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 animate-fade-up [animation-delay:400ms] border-t border-slate-100 pt-8">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              GMP-Certified
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe2 className="w-5 h-5" />
              </div>
              30+ Partners
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative animate-fade-in [animation-delay:500ms]">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Medical Professionals"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] animate-fade-up [animation-delay:700ms]">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-2xl">
                40
              </div>
              <div>
                <p className="font-display font-semibold text-slate-800 text-lg">Years Experience</p>
                <p className="text-sm text-slate-500">in African Markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
