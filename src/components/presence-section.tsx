"use client";

import { Building2, CalendarDays, MapPinned } from "lucide-react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";
import type { Feature, Geometry } from "geojson";

type Company = { name: string; est: string };
type CountryInfo = {
  name: "Uganda" | "Rwanda" | "Zambia";
  iso3: "UGA" | "RWA" | "ZMB";
  companies: Company[];
  tone: "primary" | "secondary";
};

type CountryFeature = {
  type: "Feature";
  id?: string | number;
  geometry: Geometry;
  properties: {
    name?: string;
    iso_a3?: string;
    adm0_a3?: string;
  };
};

const countries: CountryInfo[] = [
  {
    name: "Uganda",
    iso3: "UGA",
    tone: "primary",
    companies: [
      { name: "Healthcare Ltd", est: "1984" },
      { name: "Multiple Super Investments Ltd", est: "1990" },
      { name: "Shifa Chemists Ltd", est: "2005" },
      { name: "Revital Healthcare Ltd", est: "2019" },
    ],
  },
  {
    name: "Rwanda",
    iso3: "RWA",
    tone: "secondary",
    companies: [{ name: "Afri Healthcare Ltd", est: "2018" }],
  },
  {
    name: "Zambia",
    iso3: "ZMB",
    tone: "primary",
    companies: [{ name: "HealthSync Pharma Ltd", est: "2026" }],
  },
];

const highlightedCountryIds = new Set(["800", "646", "894"]);
const highlightedCountryNames = new Set(["uganda", "rwanda", "zambia"]);

const topology = world as any;
const geo = feature(topology, topology.objects.countries) as unknown as {
  type: "FeatureCollection";
  features: CountryFeature[];
};

const africaFeatures = geo.features.filter((f) => {
  const [lon, lat] = geoPath().centroid(f as unknown as Feature);
  return Number.isFinite(lon) && Number.isFinite(lat) && lon > -30 && lon < 60 && lat > -40 && lat < 40;
});

const mapProjection = geoMercator()
  .scale(800)
  .center([28, -8])
  .translate([300, 225]);

const mapPath = geoPath(mapProjection);

const cardTone = {
  primary: {
    badge: "bg-primary/12 text-primary",
    dot: "bg-primary",
  },
  secondary: {
    badge: "bg-secondary/12 text-secondary",
    dot: "bg-secondary",
  },
} as const;

const PresenceSection = () => (
  <section id="presence" className="section-padding bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary">Our Presence</span>
        <h2 className="font-display font-semibold text-slate-900 text-3xl md:text-4xl leading-tight mb-5">
          Operating Across East & Southern Africa
        </h2>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed mx-auto font-body">
          We operate through trusted group companies across Uganda, Rwanda, and Zambia, with a strong regional distribution history since 1984.
        </p>
      </div>


      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 xl:gap-14 items-start">
        <div className="rounded-3xl bg-slate-50 p-3 sm:p-4 overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <svg viewBox="0 0 600 450" className="absolute inset-0 w-full h-full" role="img" aria-label="Africa map highlighting Uganda, Rwanda, and Zambia">
              {africaFeatures.map((f, idx) => {
                const id = String(f.id ?? "");
                const name = String(f.properties.name || "").toLowerCase();
                const highlighted = highlightedCountryIds.has(id) || highlightedCountryNames.has(name);
                const fill = highlighted ? "#86c442" : "#dbe4ee";
                return (
                  <path
                    key={`${id || name}-${idx}`}
                    d={mapPath(f as unknown as Feature) || ""}
                    fill={fill}
                    stroke="#ffffff"
                    strokeWidth={1}
                  />
                );
              })}
            </svg>
          </div>
          <div className="mt-3 flex items-center justify-center text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary" /> Our Presense</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 self-stretch">
          {countries.map((country) => (
            <article key={country.iso3} className="rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.18)] p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center h-9 w-9 rounded-xl ${cardTone[country.tone].badge}`}>
                    <MapPinned className="w-4 h-4" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-slate-900">{country.name}</h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase">{country.companies.length} entity{country.companies.length > 1 ? "ies" : ""}</span>
              </div>

              <div className="space-y-2.5">
                {country.companies.map((co) => (
                  <div key={co.name} className="rounded-xl bg-slate-50 px-3.5 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span className={`mt-1 h-2 w-2 rounded-full shrink-0 ${cardTone[country.tone].dot}`} />
                        <p className="text-sm font-medium text-slate-800 leading-5 break-words">{co.name}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
                        <CalendarDays className="w-3.5 h-3.5" />
                        Est. {co.est}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PresenceSection;
