import { Scissors, Sparkles, User, Wind, Palette } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircuts & Styling',
    description: 'Expert haircuts and modern styling for men, women, and children. Get the perfect look that suits your personality.',
  },
  {
    icon: User,
    title: 'Shaving & Grooming',
    description: 'Professional shaving and grooming services with premium products. Experience traditional and modern techniques.',
  },
  {
    icon: Sparkles,
    title: 'Facial & Skin Care',
    description: 'Rejuvenating facials and skin treatments using quality products. Reveal your natural glow with our expert care.',
  },
  {
    icon: Wind,
    title: 'Hair Spa & Treatments',
    description: 'Relax with our therapeutic hair spa treatments. Nourish and strengthen your hair with specialized care.',
  },
  {
    icon: Palette,
    title: 'Makeup & Beauty Services',
    description: 'Professional makeup for all occasions. From everyday looks to bridal makeup, we make you look stunning.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Beauty & Grooming Services
          </h2>
          <p className="text-xl text-gray-600">
            We offer a wide range of salon services for the entire family with quality and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Open Daily Until 8:30 PM</h3>
          <p className="text-xl mb-6 opacity-90">Walk-ins welcome or book your appointment today</p>
          <button
            onClick={() => window.location.href = 'tel:+919014147727'}
            className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Call to Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
