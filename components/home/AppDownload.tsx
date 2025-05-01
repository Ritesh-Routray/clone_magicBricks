import Image from 'next/image';
import { CheckCircle2, Smartphone } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Download Our Mobile App</h2>
            <p className="text-white/90 mb-8">
              Take MagicBricks with you wherever you go. Search properties, get price notifications, and connect with agents on the move.
            </p>

            <div className="mb-8">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" />
                <p>Get instant notifications for new properties matching your requirements</p>
              </div>
              <div className="flex items-start mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" />
                <p>Save searches and pick up exactly where you left off</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0" />
                <p>Connect with property agents in real-time through in-app chat</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block">
                <img 
                  src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Download on the App Store" 
                  className="h-12 rounded-lg"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Get it on Google Play" 
                  className="h-12 rounded-lg"
                />
              </a>
            </div>
          </div>

          <div className="relative h-96 flex justify-center">
            <div className="absolute w-64 h-full">
              <div className="relative w-full h-full">
                <Smartphone className="w-full h-full text-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-b from-primary-400 to-primary-600 w-[90%] h-[80%] rounded-2xl flex items-center justify-center text-center p-4">
                    <div>
                      <div className="text-xl font-bold mb-2">MagicBricks</div>
                      <div className="text-sm opacity-80">Find your dream home on the go</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}