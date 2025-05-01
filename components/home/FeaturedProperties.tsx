'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { PropertyType, formatCurrency } from '@/lib/utils';

// Sample data for featured properties
const featuredProperties: PropertyType[] = [
  {
    id: '1',
    title: 'Luxury Apartment in South Delhi',
    description: 'Beautiful 3 BHK apartment with modern amenities and spacious rooms.',
    price: 12500000,
    location: 'South Delhi, Delhi',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    type: 'apartment',
    listingType: 'buy',
    featured: true,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['Gym', 'Swimming Pool', 'Power Backup', '24/7 Security', 'Car Parking']
  },
  {
    id: '2',
    title: 'Modern Villa with Garden',
    description: 'Spacious 4 BHK villa with beautiful garden and private pool.',
    price: 35000000,
    location: 'Gurgaon, Haryana',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'villa',
    listingType: 'buy',
    featured: true,
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['Private Pool', 'Garden', 'Modular Kitchen', 'Home Theater', 'CCTV']
  },
  {
    id: '3',
    title: 'Furnished Studio Apartment',
    description: 'Fully furnished studio apartment ideal for bachelors or small families.',
    price: 25000,
    location: 'Indiranagar, Bangalore',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: 'apartment',
    listingType: 'rent',
    featured: true,
    images: [
      'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['Furnished', 'AC', 'Lift', 'Power Backup', 'Car Parking']
  },
  {
    id: '4',
    title: 'Premium Office Space',
    description: 'Premium office space available for corporate companies in prime location.',
    price: 150000,
    location: 'BKC, Mumbai',
    bedrooms: 0,
    bathrooms: 2,
    area: 1200,
    type: 'commercial',
    listingType: 'rent',
    featured: true,
    images: [
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['24/7 Access', 'Conference Room', 'Cafeteria', 'High-speed Internet', 'Security']
  },
];

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const totalCards = featuredProperties.length;
  const maxIndex = totalCards - cardsToShow;

  const goNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-gray-600">Handpicked properties for you</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {featuredProperties.slice(currentIndex, currentIndex + cardsToShow).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/properties" className="btn btn-outline">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: PropertyType }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/property/${property.id}`}>
      <div className="card overflow-hidden group">
        {/* Image section */}
        <div className="relative overflow-hidden h-64">
          <Image 
            src={property.images[0]} 
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Listing Type tag */}
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-medium">
            {property.listingType === 'buy' ? 'For Sale' : 'For Rent'}
          </div>
          
          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-primary-500 text-primary-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>
        
        {/* Content section */}
        <div className="p-4">
          <div className="flex items-center mb-2">
            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
            <p className="text-sm text-gray-600">{property.location}</p>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{property.title}</h3>
          
          <p className="text-2xl font-bold text-primary-700 mb-4">
            {formatCurrency(property.price)}
            {property.listingType === 'rent' && <span className="text-sm font-normal text-gray-600">/month</span>}
          </p>
          
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 text-gray-600 mr-1" />
                <span className="text-sm">{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}
            
            <div className="flex items-center">
              <Bath className="w-4 h-4 text-gray-600 mr-1" />
              <span className="text-sm">{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            
            <div className="flex items-center">
              <Square className="w-4 h-4 text-gray-600 mr-1" />
              <span className="text-sm">{property.area} sq.ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}