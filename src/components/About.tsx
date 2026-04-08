import { Award, Users, Heart, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Service',
    description: 'Professional expertise with attention to detail in every service we provide.',
  },
  {
    icon: Users,
    title: 'Expert Staff',
    description: 'Friendly, skilled professionals trained in the latest techniques.',
  },
  {
    icon: Heart,
    title: 'Client First',
    description: 'Your satisfaction and comfort are always our top priorities.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Open daily until 8:30 PM to fit your busy schedule.',
  },
];

const badges = ['Hygiene Maintained', 'Premium Products', 'Affordable Pricing'];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-12 md:mb-16">
          {/* Left text */}
          <div>
            <span className="section-label mb-3">About Us</span>
            <h2 className="section-heading mt-2 mb-4">
              Your Trusted Beauty Partner<br />
              <span className="text-amber-500">in Madhurawada</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-3">
              AJ Unisex &amp; Family Salon is a premier beauty and grooming destination in Madhurawada, Visakhapatnam. We pride ourselves on delivering exceptional service with a personal touch.
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
              Our experienced professionals are dedicated to making you look and feel your best — from a simple trim to a complete makeover, all at affordable prices in a comfortable, welcoming space.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  <span className="text-amber-500">✓</span> {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right photo collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <img
                src="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salon service"
                className="rounded-2xl w-full h-44 object-cover shadow-card"
              />
              <img
                src="https://images.pexels.com/photos/3992856/pexels-photo-3992856.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beauty treatment"
                className="rounded-2xl w-full h-52 object-cover shadow-card"
              />
            </div>
            <div className="space-y-3 pt-6">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hair styling"
                className="rounded-2xl w-full h-52 object-cover shadow-card"
              />
              <img
                src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Grooming service"
                className="rounded-2xl w-full h-44 object-cover shadow-card"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card p-5 flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy mb-1">{feature.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
