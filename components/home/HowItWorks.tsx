import { Search, FileCheck, Key } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search Properties',
    description: 'Browse thousands of properties that match your preferences. Filter by location, price, amenities and more.',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: FileCheck,
    title: 'Book a Viewing',
    description: 'Schedule a visit to your shortlisted properties at your convenience. Virtual tours also available.',
    color: 'bg-secondary-50 text-secondary-600',
  },
  {
    icon: Key,
    title: 'Close the Deal',
    description: 'Finalize the paperwork and payments securely through our platform and get the keys to your new property.',
    color: 'bg-accent-50 text-accent-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding and buying your perfect property is easy with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8 relative">
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-gray-100 font-bold text-primary-600">
                {index + 1}
              </div>
              <div className={`inline-flex p-4 rounded-full ${step.color} mb-6`}>
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 p-8 bg-primary-700 rounded-lg text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding Your Dream Home?</h3>
            <p className="mb-6 text-white/90">
              Our expert property advisors are available to guide you through every step of your property journey
            </p>
            <button className="bg-white text-primary-700 hover:bg-gray-100 transition-colors py-3 px-6 rounded-md font-medium">
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}