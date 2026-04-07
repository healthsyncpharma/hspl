import { Truck, Package, Stethoscope, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Wholesale Distribution",
    desc: "Bulk supply of pharmaceuticals to hospitals, clinics, and pharmacies across Zambia at competitive pricing.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    desc: "Temperature-controlled supply chain ensuring medicine integrity from our Lusaka warehouse to your facility.",
  },
  {
    icon: Stethoscope,
    title: "Broad Therapeutic Range",
    desc: "Anti-infectives, cardiovascular, oncology, diabetes, paediatrics, and more — covering essential healthcare needs.",
  },
  {
    icon: BarChart3,
    title: "Market Access",
    desc: "We help global pharmaceutical manufacturers enter and grow in African markets through our established networks.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-white relative overflow-hidden">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-3xl mb-16 text-center mx-auto">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">Our Services</span>
        </div>
        <h2 className="font-display font-semibold text-slate-800 mb-6 leading-[1.1] text-4xl tracking-tight">
          Comprehensive Pharmaceutical Solutions
        </h2>
        <p className="text-slate-500 leading-relaxed text-lg max-w-2xl mx-auto font-body">
          End-to-end distribution services designed specifically for Africa's evolving healthcare landscape.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                <s.icon className="text-slate-400 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-slate-800 mb-3 text-2xl">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-body">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
