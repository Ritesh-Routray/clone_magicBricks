'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-primary-700">
            <span className="text-secondary-700">Magic</span>Bricks
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary-700 font-medium">
              Buy <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              <Link href="/buy/apartments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Apartments</Link>
              <Link href="/buy/houses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Houses</Link>
              <Link href="/buy/villas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Villas</Link>
              <Link href="/buy/plots" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plots</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary-700 font-medium">
              Rent <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              <Link href="/rent/apartments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Apartments</Link>
              <Link href="/rent/houses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Houses</Link>
              <Link href="/rent/pg-coliving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PG & Co-living</Link>
              <Link href="/rent/commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary-700 font-medium">
              Sell <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              <Link href="/post-property" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Post Property</Link>
              <Link href="/sell/owner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">For Owners</Link>
              <Link href="/sell/builder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">For Builders</Link>
            </div>
          </div>

          <Link href="/home-loans" className="text-gray-700 hover:text-primary-700 font-medium">
            Home Loans
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-700 hover:text-primary-700">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-700 hover:text-primary-700">
            <Heart className="w-5 h-5" />
          </button>
          <Link href="/login" className="btn btn-outline">
            Login
          </Link>
          <Link href="/post-property" className="btn btn-primary">
            Post Property
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 md:hidden animate-fade-in">
          <div className="container py-4 flex flex-col space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <div className="font-medium text-lg mb-2">Buy</div>
              <div className="flex flex-col space-y-2 ml-4">
                <Link href="/buy/apartments" className="text-gray-700">Apartments</Link>
                <Link href="/buy/houses" className="text-gray-700">Houses</Link>
                <Link href="/buy/villas" className="text-gray-700">Villas</Link>
                <Link href="/buy/plots" className="text-gray-700">Plots</Link>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <div className="font-medium text-lg mb-2">Rent</div>
              <div className="flex flex-col space-y-2 ml-4">
                <Link href="/rent/apartments" className="text-gray-700">Apartments</Link>
                <Link href="/rent/houses" className="text-gray-700">Houses</Link>
                <Link href="/rent/pg-coliving" className="text-gray-700">PG & Co-living</Link>
                <Link href="/rent/commercial" className="text-gray-700">Commercial</Link>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <div className="font-medium text-lg mb-2">Sell</div>
              <div className="flex flex-col space-y-2 ml-4">
                <Link href="/post-property" className="text-gray-700">Post Property</Link>
                <Link href="/sell/owner" className="text-gray-700">For Owners</Link>
                <Link href="/sell/builder" className="text-gray-700">For Builders</Link>
              </div>
            </div>
            
            <Link href="/home-loans" className="font-medium text-lg">
              Home Loans
            </Link>
            
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/login" className="btn btn-outline w-full">
                Login
              </Link>
              <Link href="/post-property" className="btn btn-primary w-full">
                Post Property
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}