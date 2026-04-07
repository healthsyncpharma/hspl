const manufacturers = [
  { name: "Al-Fazal Pharma", country: "Pakistan", logo: "" },
  { name: "Gedeon Richter", country: "Hungary", logo: "gideon hungry.png" },
  { name: "West-Coast Pharmaceutical Works Ltd", country: "India", logo: "west coast.png" },
  { name: "Bray Health Care", country: "UK", logo: "bray hc.png" },
  { name: "Medicef Pharma", country: "India", logo: "medicef ind.png" },
  { name: "Asian Continental Pharma Pvt Ltd", country: "Pakistan", logo: "asian continential pak.png" },
  { name: "Acrux Group Ltd", country: "UK", logo: "Acrux_Pharma uk.jpg" },
  { name: "Protech Biosystems Pvt Ltd", country: "India", logo: "protech-bio ind.png" },
  { name: "Hilton Pharma", country: "Pakistan", logo: "hilton pak.png" },
  { name: "Pharmatec Pakistan Pvt Ltd", country: "Pakistan", logo: "pharmatech pak.png" },
  { name: "Nutrifactor Laboratories Pvt Ltd", country: "Pakistan", logo: "nutrifactor pak.png" },
  { name: "Indus Pharma", country: "Pakistan", logo: "Indus-Pharmapak.png" },
  { name: "Searle", country: "Pakistan", logo: "searle pak.png" },
  { name: "Pharmedic", country: "Pakistan", logo: "pharmedic pak.png" },
  { name: "Wilshire", country: "Pakistan", logo: "wilshire pak.png" },
  { name: "NITIN Life Sciences", country: "India", logo: "nitin liesciences ind.png" },
  { name: "Pacific", country: "Pakistan", logo: "pacific pharm pak.png" },
  { name: "Tabros Pharma", country: "Pakistan", logo: "tabros pak.jpg" },
  { name: "SURGE Laboratories Pvt Ltd", country: "Pakistan", logo: "surge lab pak.png" },
  { name: "NABIQASM Industries Pvt Ltd", country: "Pakistan", logo: "nabiqasim pak.png" },
  { name: "Martin Dow Marker Ltd", country: "Pakistan", logo: "Martin_Dow_logo.png" },
  { name: "FEROZSONS Laboratories Ltd", country: "Pakistan", logo: "ferozsons pak.png" },
  { name: "Remington", country: "Pakistan", logo: "remington pak.png" },
  { name: "Medipak Ltd", country: "Pakistan", logo: "medipak pak.jfif" },
  { name: "Opsonin Pharma Ltd", country: "Bangladesh", logo: "opsonin bangladesh.png" },
  { name: "Zee Laboratories Ltd", country: "India", logo: "zee.jfif" },
  { name: "Medcell Pharma B.V", country: "Netherlands", logo: "medcell netherland.png" },
  { name: "Ruxall B.V", country: "Netherlands", logo: "ruxall netherland.png" },
  { name: "Asian Life Care Ltd", country: "India", logo: "asian lifecare ind.png" },
  { name: "Laborate Pharmaceutical India Ltd", country: "India", logo: "laborate ind.png" },
  { name: "Montis Pvt Ltd", country: "Pakistan", logo: "montis pak.png" },
  { name: "Geofman Pharmaceuticals Ltd", country: "Pakistan", logo: "geofman pharma pak.png" },
];

const ManufacturersSection = () => (
  <section id="manufacturers" className="section-padding bg-white relative">
    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">Our Partners</span>
        </div>
        <h2 className="font-display font-semibold text-slate-800 mb-6 leading-tight text-4xl">
          Global Manufacturer Network
        </h2>
        <p className="text-slate-500 leading-relaxed text-lg max-w-2xl mx-auto font-body">
          We partner with GMP-certified manufacturers in Uganda and Rwanda, ensuring quality and reliability across our pharmaceutical supply chain.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {manufacturers.map((m) => (
          <div
            key={m.name}
            className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1rem)] lg:w-[calc(20%-1.25rem)] xl:w-[calc(16.666%-1.25rem)] max-w-[220px] aspect-[4/3] bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col items-center justify-center p-6 group relative overflow-hidden"
            title={m.name}
          >
            <div className="w-full h-full flex items-center justify-center">
              {m.logo ? (
                <img
                  src={encodeURI(`/images/${m.logo}`)}
                  alt={`${m.name} logo`}
                  className="h-auto w-auto max-h-16 md:max-h-20 max-w-full object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <span className="text-xs font-semibold text-slate-600 text-center px-2">
                  {m.name}
                </span>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 py-2 px-2 text-center backdrop-blur-sm border-t border-slate-100">
              <p className="text-[10px] font-semibold text-slate-800 leading-tight truncate">
                {m.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ManufacturersSection;
