import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  const handleBookAppointment = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+919014147727';
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
              Professional Salon Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Style. Beauty. <span className="text-amber-600">Confidence.</span>
            </h1>
            <p className="text-xl text-gray-600">
              Experience premium grooming and beauty services at AJ Unisex & Family Salon in Madhurawada, Visakhapatnam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleBookAppointment}
                className="flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition transform hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <button
                onClick={handleCallNow}
                className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
            <div className="flex flex-wrap gap-8 pt-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">4.8★</div>
                <div className="text-gray-600 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Call us today</div>
                  <div className="font-bold text-gray-900">+91 90141 47727</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
