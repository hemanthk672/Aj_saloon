import { Scissors, Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Reviews', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const serviceList = [
  'Haircuts & Styling',
  'Shaving & Grooming',
  'Facial & Skin Care',
  'Hair Spa & Treatments',
  'Makeup & Beauty',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white">
      {/* Top rule with gold gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-gold">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">AJ Unisex &amp; Family Salon</div>
                <div className="text-[10px] text-amber-400 tracking-widest uppercase font-semibold">Style · Beauty · Confidence</div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              Your trusted beauty and grooming partner in Madhurawada, Visakhapatnam.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://facebook.com', Icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/hair_by__aj?igsh=MnJwZHZpZDd1dWIy', Icon: Instagram, label: 'Instagram' },
                { href: 'https://twitter.com', Icon: Twitter, label: 'Twitter' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scroll(item.id)}
                    className="text-slate-400 hover:text-amber-400 text-xs transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceList.map((s) => (
                <li key={s} className="text-slate-400 text-xs">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">MM Plaza, 9-25/2, NH16, Madhurawada, Visakhapatnam, AP 530048</span>
              </li>
              <li className="flex gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+919014147727" className="text-xs hover:text-amber-400 transition">+91 90141 47727</a>
              </li>
              <li className="flex gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs">Open Daily · Until 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <p>&copy; {currentYear} AJ Unisex &amp; Family Salon. All rights reserved.</p>
          <p>Best Salon in Madhurawada, Visakhapatnam</p>
        </div>
      </div>
    </footer>
  );
}
