import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent service! The haircut was perfect and the staff was very professional and friendly. The atmosphere is welcoming and comfortable. Highly recommended for quality grooming services.',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Amazing facial service! My skin feels so refreshed and glowing. The staff is knowledgeable and uses quality products. The salon is clean and well-maintained. Will definitely return.',
  },
  {
    name: 'Vijay Reddy',
    rating: 5,
    text: 'Best salon in Madhurawada! Affordable pricing without compromising on quality. The barbers are skilled and listen to exactly what you want. Great experience every time I visit.',
  },
  {
    name: 'Lakshmi Devi',
    rating: 5,
    text: 'Wonderful hair spa experience! The treatment was relaxing and my hair feels so soft and healthy now. The team is friendly and professional. Excellent value for money.',
  },
  {
    name: 'Anil Kumar',
    rating: 5,
    text: 'Professional service with a personal touch. The salon has a great ambiance and the staff makes you feel comfortable. Their attention to detail is impressive. Highly satisfied customer.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-xl relative">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-600">Verified Customer</div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-900 text-white px-8 py-6 rounded-2xl">
            <div>
              <div className="text-4xl font-bold text-amber-500">4.8</div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Excellent Rating</div>
              <div className="text-gray-400">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
