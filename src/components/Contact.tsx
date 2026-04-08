import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'MM Plaza, 9-25/2, NH16, Krishnanagar, Madhurawada, Visakhapatnam 530048',
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 90141 47727',
    href: 'tel:+919014147727',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Open Daily · Until 8:30 PM',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. I'd like to book an appointment for ${formData.service}. Phone: ${formData.phone}. ${formData.message}`;
    window.open(`https://wa.me/919014147727?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="section-label mb-3">Get In Touch</span>
          <h2 className="section-heading mt-2">
            Visit Us or <span className="text-amber-500">Book an Appointment</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base">
            We're here to serve you. Reach out and book your slot today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Info + Map */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card flex items-start gap-4 p-5">
                <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-amber-500 hover:text-amber-600 transition">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-navy font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="card overflow-hidden p-0">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.5948912345678!2d83.2523!3d17.7804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ2JzQ5LjQiTiA4M8KwMTUnMDguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AJ Salon Location"
                />
              </div>
            </div>
          </div>

          {/* Right: Booking form */}
          <div className="card p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-navy mb-5">Book Your Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Phone row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Email + Service row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Email <span className="text-slate-300 normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Choose a service</option>
                    <option value="Haircut & Styling">Haircut &amp; Styling</option>
                    <option value="Shaving & Grooming">Shaving &amp; Grooming</option>
                    <option value="Facial & Skin Care">Facial &amp; Skin Care</option>
                    <option value="Hair Spa & Treatments">Hair Spa &amp; Treatments</option>
                    <option value="Makeup & Beauty Services">Makeup &amp; Beauty</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Message <span className="text-slate-300 normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="input-field resize-none"
                  placeholder="Any specific requirements or preferred time..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-white py-3 rounded-xl font-semibold text-sm shadow-gold hover:bg-amber-400 transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
