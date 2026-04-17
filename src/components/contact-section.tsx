"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    queryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry: ${formData.queryType || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nQuery: ${formData.queryType}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@healthsyncpharma.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-secondary"></span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary">Contact Us</span>
          </div>
          <h2 className="font-display font-semibold text-slate-800 mb-6 leading-[1.1] text-4xl tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg font-body">
            Whether you're a healthcare provider, pharmacy, or manufacturer — we'd love to explore how we can work together to improve healthcare access.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50/50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-14 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-14 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                  placeholder="Your company"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-14 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="queryType" className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
              <select
                id="queryType"
                value={formData.queryType}
                onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                className="w-full h-14 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="">Select a topic</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Product Information">Product Information</option>
                <option value="Manufacturer Partnership">Manufacturer Partnership</option>
                <option value="Distribution Partnership">Distribution Partnership</option>
                <option value="Careers">Careers</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center bg-primary text-white w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all hover:shadow-lg mt-4"
            >
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="space-y-6 lg:pt-8">
            <div className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                <MapPin className="text-secondary w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-slate-800 mb-1.5 text-lg">Office</h3>
                <p className="text-base text-slate-500 leading-relaxed font-body">
                  Katima Mulilo Road Plot No.109/A,<br />Lusaka, Zambia
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                <Phone className="text-primary w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-slate-800 mb-1.5 text-lg">Phone</h3>
                <a href="tel:+260767526212" className="block text-base text-slate-500 hover:text-primary transition-colors font-body mb-1">+260-767526212</a>
                <a href="tel:+260776220059" className="block text-base text-slate-500 hover:text-primary transition-colors font-body">+260-776220059</a>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-secondary/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                <Mail className="text-slate-600 group-hover:text-secondary w-5 h-5 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-slate-800 mb-1.5 text-lg">Email</h3>
                <a href="mailto:info@healthsyncpharma.com" className="text-base text-slate-500 hover:text-secondary transition-colors font-body">
                  info@healthsyncpharma.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
