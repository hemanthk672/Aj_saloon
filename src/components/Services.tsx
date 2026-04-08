import { Scissors, Sparkles, User, Wind, Palette } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircuts & Styling',
    description: 'Expert cuts and modern styles for men, women & kids tailored to your personality.',
  },
  {
    icon: User,
    title: 'Shaving & Grooming',
    description: 'Premium shaving & grooming with traditional and modern techniques.',
  },
  {
    icon: Sparkles,
    title: 'Facial & Skin Care',
    description: 'Rejuvenating facials and skin treatments that reveal your natural glow.',
  },
  {
    icon: Wind,
    title: 'Hair Spa & Treatments',
    description: 'Therapeutic spa treatments to nourish and strengthen your hair.',
  },
  {
    icon: Palette,
    title: 'Makeup & Beauty',
    description: 'Professional makeup for every occasion — from everyday to bridal.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="section-label mb-3">Our Services</span>
          <h2 className="section-heading mt-2">
            Beauty &amp; Grooming,{' '}
            <span className="text-amber-500">Done Right</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base leading-relaxed">
            A complete range of salon services for the entire family — quality, care, and style in every visit.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card group p-6 flex flex-col gap-4"
              >
                <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-10 md:mt-14 rounded-2xl overflow-hidden relative bg-navy p-8 md:p-10 text-center">
          {/* Gold accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-amber-900/30 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-2">Walk-ins Welcome</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">Open Daily Until 8:30 PM</h3>
            <p className="text-slate-400 text-sm mb-6">Book your slot or just walk in — we're ready for you.</p>
            <a
              href="tel:+919014147727"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-7 py-2.5 rounded-full font-semibold text-sm shadow-gold hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Call to Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
