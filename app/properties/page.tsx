'use client';

import { useState, useEffect } from 'react';
import { MapPin, Building, Home, Warehouse, Bed, Bath, Square, Search, Filter, ChevronDown, Grid, List } from 'lucide-react';
import { PropertyType, formatCurrency, cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

// Sample data for properties
const allProperties: PropertyType[] = [
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
    images: [
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['24/7 Access', 'Conference Room', 'Cafeteria', 'High-speed Internet', 'Security']
  },
  {
    id: '5',
    title: '3 BHK Apartment with City View',
    description: 'Spacious 3 BHK apartment with stunning city views and modern amenities.',
    price: 18500000,
    location: 'Koramangala, Bangalore',
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    type: 'apartment',
    listingType: 'buy',
    images: [
      'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['Gym', 'Swimming Pool', 'Club House', 'Children\'s Play Area', 'Car Parking']
  },
  {
    id: '6',
    title: 'Independent House with Garden',
    description: 'Beautiful independent house with spacious garden and modern interiors.',
    price: 28000000,
    location: 'Vasant Kunj, Delhi',
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    type: 'house',
    listingType: 'buy',
    images: [
      'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: ['Modular Kitchen', 'Power Backup', 'Garden', 'CCTV', 'Car Parking']
  },
];

export default function PropertiesPage() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [listingType, setListingType] = useState<'all' | 'buy' | 'rent'>('all');
  const [propertyType, setPropertyType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProperties, setFilteredProperties] = useState<PropertyType[]>(allProperties);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [bedroomFilter, setBedroomFilter] = useState<number | null>(null);

  // Apply filters
  useEffect(() => {
    let result = allProperties;

    // Filter by listing type
    if (listingType !== 'all') {
      result = result.filter((property) => property.listingType === listingType);
    }

    // Filter by property type
    if (propertyType !== 'all') {
      result = result.filter((property) => property.type === propertyType);
    }

    // Filter by search query (location or title)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (property) =>
          property.location.toLowerCase().includes(query) ||
          property.title.toLowerCase().includes(query)
      );
    }

    // Filter by price range
    result = result.filter(
      (property) => property.price >= priceRange[0] && property.price <= priceRange[1]
    );

    // Filter by bedrooms
    if (bedroomFilter !== null) {
      result = result.filter((property) => property.bedrooms === bedroomFilter);
    }

    setFilteredProperties(result);
  }, [listingType, propertyType, searchQuery, priceRange, bedroomFilter]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Properties</h1>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10"
                placeholder="Search by location or property name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <select
                className="select"
                value={listingType}
                onChange={(e) => setListingType(e.target.value as 'all' | 'buy' | 'rent')}
              >
                <option value="all">All Listings</option>
                <option value="buy">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
              
              <select
                className="select"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
              </select>
              
              <select
                className="select"
                value={bedroomFilter === null ? 'all' : bedroomFilter.toString()}
                onChange={(e) => setBedroomFilter(e.target.value === 'all' ? null : parseInt(e.target.value))}
              >
                <option value="all">Any Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
              
              <div className="flex">
                <button className="btn btn-outline w-full">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{filteredProperties.length} properties found</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">View:</span>
              <button
                onClick={() => setViewType('grid')}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewType === 'grid' ? "bg-primary-50 text-primary-600" : "text-gray-500 hover:text-primary-600"
                )}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewType === 'list' ? "bg-primary-50 text-primary-600" : "text-gray-500 hover:text-primary-600"
                )}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        {viewType === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-6">
            {filteredProperties.map((property) => (
              <PropertyListItem key={property.id} property={property} />
            ))}
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more properties.
            </p>
          </div>
        )}
      </div>
    </div>
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

function PropertyListItem({ property }: { property: PropertyType }) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="card overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="relative overflow-hidden md:w-1/3 h-64 md:h-auto">
            <Image 
              src={property.images[0]} 
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            {/* Listing Type tag */}
            <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-medium">
              {property.listingType === 'buy' ? 'For Sale' : 'For Rent'}
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-6 md:w-2/3">
            <div className="flex items-center mb-2">
              <MapPin className="w-4 h-4 text-gray-500 mr-1" />
              <p className="text-sm text-gray-600">{property.location}</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            
            <p className="text-gray-700 mb-4 line-clamp-2">{property.description}</p>
            
            <p className="text-2xl font-bold text-primary-700 mb-4">
              {formatCurrency(property.price)}
              {property.listingType === 'rent' && <span className="text-sm font-normal text-gray-600">/month</span>}
            </p>
            
            <div className="flex items-center space-x-6">
              {property.bedrooms > 0 && (
                <div className="flex items-center">
                  <Bed className="w-5 h-5 text-gray-600 mr-2" />
                  <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                </div>
              )}
              
              <div className="flex items-center">
                <Bath className="w-5 h-5 text-gray-600 mr-2" />
                <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
              </div>
              
              <div className="flex items-center">
                <Square className="w-5 h-5 text-gray-600 mr-2" />
                <span>{property.area} sq.ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}