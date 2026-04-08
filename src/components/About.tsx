import { Award, Users, Heart, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Service',
    description: 'Professional expertise with attention to detail in every service we provide',
  },
  {
    icon: Users,
    title: 'Experienced Staff',
    description: 'Friendly and skilled professionals trained in the latest techniques',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction and comfort are our top priorities',
  },
  {
    icon: Clock,
    title: 'Convenient Hours',
    description: 'Open daily until 8:30 PM to fit your busy schedule',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Beauty Partner in Madhurawada
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              AJ Unisex & Family Salon is a premier beauty and grooming destination located in Madhurawada, Visakhapatnam. We pride ourselves on delivering exceptional service with a personal touch.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our experienced team of professionals is dedicated to making you look and feel your best. Whether you're looking for a simple haircut or a complete makeover, we provide quality services at affordable prices in a comfortable, welcoming environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">Hygiene Maintained</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">Premium Products</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">Affordable Pricing</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salon service"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3992856/pexels-photo-3992856.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beauty treatment"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hair styling"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Grooming service"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
