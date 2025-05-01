import Link from 'next/link';
import { Building, Home, MapPin, Warehouse } from 'lucide-react';

const propertyTypes = [
  {
    title: 'Apartment',
    icon: Building,
    description: 'Find luxurious and budget-friendly apartments',
    link: '/buy/apartments',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    title: 'Houses & Villas',
    icon: Home,
    description: 'Discover independent houses and villas',
    link: '/buy/houses',
    color: 'bg-secondary-50 text-secondary-700',
  },
  {
    title: 'Plots & Land',
    icon: MapPin,
    description: 'Invest in plots and land for future development',
    link: '/buy/plots',
    color: 'bg-accent-50 text-accent-700',
  },
  {
    title: 'Commercial',
    icon: Warehouse,
    description: 'Explore office spaces, shops and commercial properties',
    link: '/rent/commercial',
    color: 'bg-green-50 text-green-700',
  },
];

export default function PropertyTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore by Property Type</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for an apartment, villa, plot, or commercial property, we have the perfect options for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type, index) => (
            <Link key={index} href={type.link}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
                <div className={`p-4 rounded-full ${type.color} mb-4`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <span className="text-primary-600 font-medium">Explore &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}