import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    initial: 'R',
    rating: 5,
    text: 'Excellent service! The haircut was perfect and the staff was very professional and friendly. Highly recommended for quality grooming.',
  },
  {
    name: 'Priya Sharma',
    initial: 'P',
    rating: 5,
    text: 'Amazing facial! My skin feels so refreshed and glowing. The salon is clean, well-maintained and the staff uses quality products.',
  },
  {
    name: 'Vijay Reddy',
    initial: 'V',
    rating: 5,
    text: 'Best salon in Madhurawada! Affordable pricing without compromising on quality. The barbers listen to exactly what you want.',
  },
  {
    name: 'Lakshmi Devi',
    initial: 'L',
    rating: 5,
    text: 'Wonderful hair spa experience! The treatment was so relaxing and my hair feels soft and healthy. Excellent value for money.',
  },
  {
    name: 'Anil Kumar',
    initial: 'A',
    rating: 5,
    text: 'Professional service with a personal touch. Great ambiance, attentive staff and impressive attention to detail. Highly satisfied.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-14 md:py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="section-label mb-3">Customer Reviews</span>
          <h2 className="section-heading mt-2">
            What Our Clients <span className="text-amber-500">Say</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base">
            Don't just take our word for it — here's what satisfied clients share about us.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-navy rounded-2xl p-8 md:p-10 shadow-xl overflow-hidden">
            {/* Decorative quote */}
            <Quote className="absolute top-6 right-6 w-14 h-14 text-amber-500/10" />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-base">
                {testimonials[current].initial}
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{testimonials[current].name}</div>
                <div className="text-slate-400 text-xs">Verified Client</div>
              </div>
            </div>

            {/* Nav buttons */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 hover:bg-amber-500 border border-white/10 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 hover:bg-amber-500 border border-white/10 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rating summary */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <div className="inline-flex items-center gap-8 bg-white border border-slate-100 rounded-2xl px-8 py-5 shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold font-display text-navy">4.8</div>
              <div className="flex justify-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-500 mt-1">Google Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-100" />
            <div className="text-center">
              <div className="text-3xl font-bold font-display text-navy">500+</div>
              <div className="text-xs text-slate-500 mt-1.5">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-slate-100" />
            <div className="text-center">
              <div className="text-3xl font-bold font-display text-navy">5+</div>
              <div className="text-xs text-slate-500 mt-1.5">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
