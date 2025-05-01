'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    position: 'First-time Home Buyer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'I was skeptical about buying a property online, but MagicBricks made it so easy. The filters helped me find exactly what I was looking for, and the team was always available to answer my questions.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    position: 'Property Investor',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'As someone who invests in properties regularly, I need a reliable platform that gives me access to the best deals. MagicBricks has consistently provided great options and their verification process gives me confidence.',
  },
  {
    id: 3,
    name: 'Vikram Malhotra',
    position: 'NRI Property Buyer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Living overseas made it challenging to find property in India, but MagicBricks bridged that gap. Their virtual tours and responsive agents made it possible for me to purchase my dream home without even visiting in person.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thousands of satisfied customers have found their perfect properties through our platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial} 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial} 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-6">
                  <div className="bg-white rounded-lg shadow-sm p-8 relative">
                    <div className="absolute top-8 right-8 text-primary-200">
                      <Quote className="w-12 h-12" />
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}