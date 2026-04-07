const stats = [
  { value: "40+", label: "Years in Africa" },
  { value: "3", label: "Countries" },
  { value: "30+", label: "Manufacturer Partners" },
  { value: "300+", label: "Products" },
];

const StatsBar = () => (
  <section className="bg-primary/5 py-16 border-y border-primary/10">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 md:px-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center justify-center">
          <p className="font-display font-bold text-primary text-4xl md:text-5xl mb-2">
            {s.value}
          </p>
          <p className="text-slate-600 font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
