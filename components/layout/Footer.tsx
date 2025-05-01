import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              <span className="text-secondary-400">Magic</span>Bricks
            </h3>
            <p className="text-gray-400 mb-6">
              Find your dream property with MagicBricks. We make property buying, selling, and renting simple and hassle-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/buy/apartments" className="text-gray-400 hover:text-white transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/buy/villas" className="text-gray-400 hover:text-white transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/buy/plots" className="text-gray-400 hover:text-white transition-colors">
                  Plots
                </Link>
              </li>
              <li>
                <Link href="/rent/commercial" className="text-gray-400 hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/rent/pg-coliving" className="text-gray-400 hover:text-white transition-colors">
                  PG & Co-living
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  MagicBricks HQ, 123 Real Estate Avenue, New Delhi, 110001
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@magicbricks.com" className="text-gray-400 hover:text-white transition-colors">
                  info@magicbricks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MagicBricks Clone. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}