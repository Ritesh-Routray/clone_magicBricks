'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { PropertyType, formatCurrency } from '@/lib/utils';

// Sample data for properties
const properties: Record<string, PropertyType> = {
  '1': {
    id: '1',
    title: 'Luxury Apartment in South Delhi',
    description: 'Beautiful 3 BHK apartment with modern amenities and spacious rooms. This stunning property features a large living area, modern kitchen with high-end appliances, and a private balcony with panoramic views of the city. The master bedroom includes a walk-in closet and en-suite bathroom. Located in a premium gated community with 24/7 security, swimming pool, gym, and landscaped gardens.',
    price: 12500000,
    location: 'South Delhi, Delhi',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    type: 'apartment',
    listingType: 'buy',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['Gym', 'Swimming Pool', 'Power Backup', '24/7 Security', 'Car Parking', 'Club House', 'Children\'s Play Area', 'Lift']
  },
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const property = properties[id];
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Property Not Found</h1>
        <p className="mb-8">The property you are looking for does not exist or has been removed.</p>
        <Link href="/properties" className="btn btn-primary">
          Browse Properties
        </Link>
      </div>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-16">
      <div className="container">
        {/* Back Button */}
        <Link href="/properties" className="inline-flex items-center text-gray-700 hover:text-primary-600 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Link>

        {/* Property Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-gray-600 mr-1" />
              <p className="text-gray-600">{property.location}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-3xl font-bold text-primary-700">
              {formatCurrency(property.price)}
              {property.listingType === 'rent' && <span className="text-sm font-normal text-gray-600">/month</span>}
            </p>
          </div>
        </div>

        {/* Property Images */}
        <div className="mb-10">
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-4">
            <Image
              src={property.images[activeImageIndex]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={toggleFavorite}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? 'fill-primary-500 text-primary-500' : 'text-gray-600'}`}
                />
              </button>
              <button
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`relative h-24 rounded-md overflow-hidden cursor-pointer ${
                  activeImageIndex === index ? 'ring-2 ring-primary-500 ring-offset-2' : ''
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`${property.title} image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {property.bedrooms > 0 && (
                  <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                    <Bed className="w-6 h-6 text-primary-600 mb-2" />
                    <span className="text-sm text-gray-600">Bedrooms</span>
                    <span className="text-lg font-semibold">{property.bedrooms}</span>
                  </div>
                )}
                <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                  <Bath className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-sm text-gray-600">Bathrooms</span>
                  <span className="text-lg font-semibold">{property.bathrooms}</span>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                  <Square className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-sm text-gray-600">Area</span>
                  <span className="text-lg font-semibold">{property.area} sq.ft</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {property.description}
              </p>

              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary-600" />
                <span className="ml-2">Map view will be displayed here</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-20">
              <h2 className="text-xl font-semibold mb-6">Contact Agent</h2>
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Agent"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Rahul Verma</h3>
                  <p className="text-gray-600 text-sm">Senior Property Advisor</p>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="input" 
                    placeholder="Your name"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input" 
                    placeholder="Your email"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="input" 
                    placeholder="Your phone number"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="input" 
                    placeholder="I'm interested in this property..."
                    defaultValue="I'm interested in this property. Please contact me with more information."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>

              <div className="flex flex-col space-y-4 mt-6">
                <button className="btn btn-outline w-full flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Agent
                </button>
                <button className="btn btn-outline w-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}