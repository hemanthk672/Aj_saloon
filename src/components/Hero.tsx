import { Phone, Calendar, Star, ChevronRight } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '4.8★', label: 'Google Rating' },
];

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative pt-14 md:pt-16 min-h-[92vh] flex items-center overflow-hidden bg-navy"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Salon interior"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      </div>

      {/* Gold accent orb */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-5 animate-fadeInUp">
            <span className="section-label">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              Premium Salon · Madhurawada, Vizag
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Style. Beauty.<br />
              <span className="text-amber-400">Confidence.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md">
              Experience premium grooming & beauty at AJ Unisex &amp; Family Salon — where every visit leaves you feeling your best.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-amber-500 text-white px-7 py-3 rounded-full font-semibold text-sm shadow-gold hover:bg-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919014147727"
                className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3 rounded-full font-semibold text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-4 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-amber-400 font-display">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image card */}
          <div className="hidden md:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/4625616/pexels-photo-4625616.jpeg"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Call us today</div>
                <div className="text-sm font-bold text-navy">+91 90141 47727</div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-2xl px-4 py-2 shadow-gold text-center">
              <div className="text-lg font-bold font-display leading-none">4.8</div>
              <div className="flex justify-center mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-white text-white" />
                ))}
              </div>
              <div className="text-[9px] uppercase tracking-wide mt-0.5 font-semibold opacity-90">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8 md:h-10" fill="#F8FAFC">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
