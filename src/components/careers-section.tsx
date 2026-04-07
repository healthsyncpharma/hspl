import { ArrowRight, Briefcase, MapPin, Clock, Mail } from "lucide-react";

// You can easily add or remove roles from this array.
// If the array is empty, it will automatically show the "Drop your CV" fallback state.
const openRoles = [
  {
    id: 1,
    title: "Medical Sales Representative",
    location: "Lusaka, Zambia",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Regulatory Affairs Pharmacist",
    location: "Lusaka, Zambia",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Supply Chain & Logistics Manager",
    location: "Ndola, Zambia",
    type: "Full-time",
  },
];

const CareersSection = () => (
  <section id="careers" className="section-padding bg-secondary/5 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary">Careers</span>
        </div>
        <h2 className="font-display font-semibold text-slate-800 mb-6 leading-tight text-3xl md:text-5xl tracking-tight">
          Join Our Growing Team
        </h2>
        <p className="text-slate-500 leading-relaxed mx-auto text-lg font-body" style={{ maxWidth: "52ch" }}>
          HealthSync Pharma is expanding across Africa. We're looking for talented professionals in pharmaceutical sales, logistics, regulatory affairs, and operations.
        </p>
      </div>

      {openRoles.length > 0 ? (
        <div className="max-w-4xl mx-auto grid gap-4">
          {openRoles.map((role) => (
            <div 
              key={role.id} 
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-slate-50 hover:border-secondary/20"
            >
              <div>
                <h3 className="font-display font-semibold text-slate-800 text-xl mb-3 group-hover:text-secondary transition-colors">
                  {role.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 font-body">
                  <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {role.type}
                  </span>
                </div>
              </div>
              <a
                href={`mailto:info@healthsyncpharma.com?subject=Apply for ${encodeURIComponent(role.title)}`}
                className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap shrink-0"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-[2rem] p-10 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-slate-50">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="font-display font-semibold text-slate-800 text-2xl mb-4">
            No Open Roles Currently
          </h3>
          <p className="text-slate-500 font-body mb-8">
            We don't have any specific openings at the moment, but we are always on the lookout for great talent. Feel free to send us your CV, and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:info@healthsyncpharma.com?subject=General Application - CV Drop"
            className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="mr-2 w-5 h-5" />
            Drop Your CV
          </a>
        </div>
      )}
    </div>
  </section>
);

export default CareersSection;
