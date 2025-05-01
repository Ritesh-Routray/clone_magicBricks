import Image from 'next/image';
import Link from 'next/link';

const cities = [
  {
    name: 'Mumbai',
    image: 'https://images.pexels.com/photos/2121799/pexels-photo-2121799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    propertyCount: 12845,
    link: '/properties/mumbai'
  },
  {
    name: 'Delhi',
    image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    propertyCount: 10532,
    link: '/properties/delhi'
  },
  {
    name: 'Bangalore',
    image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    propertyCount: 8965,
    link: '/properties/bangalore'
  },
  {
    name: 'Hyderabad',
    image: 'https://images.pexels.com/photos/10614158/pexels-photo-10614158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    propertyCount: 7421,
    link: '/properties/hyderabad'
  },
  {
    name: 'Chennai',
    image: 'https://images.pexels.com/photos/10614154/pexels-photo-10614154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    propertyCount: 6829,
    link: '/properties/chennai'
  },
  {
    name: 'Pune',
    image: 'https://images.pexels.com/photos/12456270/pexels-photo-12456270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    propertyCount: 5718,
    link: '/properties/pune'
  },
];

export default function LocationHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Top Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover properties in India's most sought-after cities and neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Link key={index} href={city.link} className="group">
              <div className="relative rounded-lg overflow-hidden h-72 shadow-md group-hover:shadow-lg transition-shadow">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-white/80 mb-3">{city.propertyCount.toLocaleString()} Properties</p>
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm group-hover:bg-primary-600 transition-colors">
                    View Properties
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/locations" className="btn btn-outline">
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
}