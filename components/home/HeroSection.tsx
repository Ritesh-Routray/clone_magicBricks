'use client';

import { useState } from 'react';
import { Search, MapPin, Building, Home, Warehouse } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [searchType, setSearchType] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [propertyType, setPropertyType] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  return (
    <section className="relative h-[650px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
            Find Your <span className="text-primary-500">Dream Home</span> Today
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover the perfect property from our extensive collection of listings across India. Buy, Rent or Sell properties with ease.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Search Type Tabs */}
            <div className="flex border-b border-gray-200 mb-4">
              <button 
                className={cn(
                  "flex-1 py-2 font-medium text-center text-gray-600 transition-colors",
                  searchType === 'buy' && "text-primary-600 border-b-2 border-primary-600"
                )}
                onClick={() => setSearchType('buy')}
              >
                Buy
              </button>
              <button 
                className={cn(
                  "flex-1 py-2 font-medium text-center text-gray-600 transition-colors",
                  searchType === 'rent' && "text-primary-600 border-b-2 border-primary-600"
                )}
                onClick={() => setSearchType('rent')}
              >
                Rent
              </button>
              <button 
                className={cn(
                  "flex-1 py-2 font-medium text-center text-gray-600 transition-colors",
                  searchType === 'sell' && "text-primary-600 border-b-2 border-primary-600"
                )}
                onClick={() => setSearchType('sell')}
              >
                Sell
              </button>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input pl-10"
                  placeholder="City, Locality or Project"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Building className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  className="select pl-10"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              
              <button className="btn btn-primary">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>

            {/* Property Type Icons */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                  <Building className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-primary-600">Apartment</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                  <Home className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-primary-600">House</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                  <Home className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-primary-600">Villa</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                  <MapPin className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-primary-600">Plot</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                  <Warehouse className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-primary-600">Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}