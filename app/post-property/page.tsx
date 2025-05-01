'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Upload, Plus, X, Info, MapPin, Building, Home, Warehouse, Square, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Form steps
const STEPS = {
  PROPERTY_TYPE: 0,
  BASIC_INFO: 1,
  LOCATION: 2,
  FEATURES: 3,
  PHOTOS: 4,
  PRICING: 5,
  REVIEW: 6,
};

export default function PostPropertyPage() {
  const [step, setStep] = useState(0);
  const [listingType, setListingType] = useState<'buy' | 'rent'>('buy');
  const [propertyType, setPropertyType] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    city: '',
    pincode: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    amenities: [] as string[],
    price: '',
    images: [] as { url: string; file?: File }[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleListingTypeChange = (type: 'buy' | 'rent') => {
    setListingType(type);
  };

  const handlePropertyTypeChange = (type: string) => {
    setPropertyType(type);
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData((prev) => {
      const currentAmenities = [...prev.amenities];
      if (currentAmenities.includes(amenity)) {
        return {
          ...prev,
          amenities: currentAmenities.filter((a) => a !== amenity),
        };
      } else {
        return {
          ...prev,
          amenities: [...currentAmenities, amenity],
        };
      }
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));
      
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages].slice(0, 10), // Limit to 10 images
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Render different form steps
  const renderStep = () => {
    switch (step) {
      case STEPS.PROPERTY_TYPE:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">What do you want to do with your property?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 text-center transition-all",
                  listingType === 'buy'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handleListingTypeChange('buy')}
              >
                <div className="text-xl font-semibold mb-2">Sell</div>
                <p className="text-gray-600">List your property for sale</p>
              </button>
              
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 text-center transition-all",
                  listingType === 'rent'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handleListingTypeChange('rent')}
              >
                <div className="text-xl font-semibold mb-2">Rent</div>
                <p className="text-gray-600">List your property for rent</p>
              </button>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">What type of property do you have?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all",
                  propertyType === 'apartment'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handlePropertyTypeChange('apartment')}
              >
                <Building className="w-8 h-8 mb-3 text-primary-600" />
                <div className="text-lg font-semibold">Apartment</div>
              </button>
              
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all",
                  propertyType === 'house'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handlePropertyTypeChange('house')}
              >
                <Home className="w-8 h-8 mb-3 text-primary-600" />
                <div className="text-lg font-semibold">House</div>
              </button>
              
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all",
                  propertyType === 'villa'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handlePropertyTypeChange('villa')}
              >
                <Home className="w-8 h-8 mb-3 text-primary-600" />
                <div className="text-lg font-semibold">Villa</div>
              </button>
              
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all",
                  propertyType === 'plot'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handlePropertyTypeChange('plot')}
              >
                <MapPin className="w-8 h-8 mb-3 text-primary-600" />
                <div className="text-lg font-semibold">Plot/Land</div>
              </button>
              
              <button
                type="button"
                className={cn(
                  "border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all",
                  propertyType === 'commercial'
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                )}
                onClick={() => handlePropertyTypeChange('commercial')}
              >
                <Warehouse className="w-8 h-8 mb-3 text-primary-600" />
                <div className="text-lg font-semibold">Commercial</div>
              </button>
            </div>
          </div>
        );
      
      case STEPS.BASIC_INFO:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Tell us about your property</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="label">Property Title</label>
                <input
                  type="text"
                  id="title"
                  className="input"
                  placeholder="e.g., Spacious 3 BHK Apartment with City View"
                  value={formData.title}
                  onChange={(e) => updateFormData({ title: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="label">Property Description</label>
                <textarea
                  id="description"
                  rows={6}
                  className="input"
                  placeholder="Describe your property in detail..."
                  value={formData.description}
                  onChange={(e) => updateFormData({ description: e.target.value })}
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Include details about the condition, special features, nearby amenities, etc.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="bedrooms" className="label">Bedrooms</label>
                  <select
                    id="bedrooms"
                    className="select"
                    value={formData.bedrooms}
                    onChange={(e) => updateFormData({ bedrooms: e.target.value })}
                    required={propertyType !== 'plot' && propertyType !== 'commercial'}
                    disabled={propertyType === 'plot'}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bathrooms" className="label">Bathrooms</label>
                  <select
                    id="bathrooms"
                    className="select"
                    value={formData.bathrooms}
                    onChange={(e) => updateFormData({ bathrooms: e.target.value })}
                    required={propertyType !== 'plot'}
                    disabled={propertyType === 'plot'}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="area" className="label">Area (sq.ft)</label>
                  <input
                    type="number"
                    id="area"
                    className="input"
                    placeholder="e.g., 1500"
                    value={formData.area}
                    onChange={(e) => updateFormData({ area: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case STEPS.LOCATION:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Where is your property located?</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="location" className="label">Complete Address</label>
                <input
                  type="text"
                  id="location"
                  className="input"
                  placeholder="Enter your property's full address"
                  value={formData.location}
                  onChange={(e) => updateFormData({ location: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="label">City</label>
                  <input
                    type="text"
                    id="city"
                    className="input"
                    placeholder="e.g., Mumbai"
                    value={formData.city}
                    onChange={(e) => updateFormData({ city: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="pincode" className="label">PIN Code</label>
                  <input
                    type="text"
                    id="pincode"
                    className="input"
                    placeholder="e.g., 400001"
                    value={formData.pincode}
                    onChange={(e) => updateFormData({ pincode: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 mb-4">Pin the exact location on the map:</p>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary-600" />
                  <span className="ml-2">Map will be displayed here</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case STEPS.FEATURES:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Property Features & Amenities</h2>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-4">Select the amenities available in your property:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Lift',
                  'Power Backup',
                  'Car Parking',
                  'Swimming Pool',
                  'Gym',
                  'Garden',
                  'Club House',
                  'Children\'s Play Area',
                  'Security',
                  'CCTV',
                  'Intercom',
                  'Fire Safety',
                  'Rainwater Harvesting',
                  'Senior Citizen Area',
                  'Indoor Games',
                  'Sports Facility',
                ].map((amenity) => (
                  <div 
                    key={amenity}
                    className={cn(
                      "border rounded-lg p-3 flex items-center cursor-pointer transition-colors",
                      formData.amenities.includes(amenity)
                        ? "border-primary-600 bg-primary-50"
                        : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                    )}
                    onClick={() => handleAmenityToggle(amenity)}
                  >
                    <div 
                      className={cn(
                        "w-5 h-5 rounded-md border flex items-center justify-center mr-3",
                        formData.amenities.includes(amenity)
                          ? "bg-primary-600 border-primary-600"
                          : "border-gray-300"
                      )}
                    >
                      {formData.amenities.includes(amenity) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case STEPS.PHOTOS:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Upload Property Photos</h2>
            
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Add high-quality photos of your property (up to 10)</p>
              <p className="text-xs text-gray-500 flex items-center">
                <Info className="w-4 h-4 mr-1" />
                Properties with good photos get 2x more interest
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {/* Upload button */}
              {formData.images.length < 10 && (
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-primary-500 hover:text-primary-600 transition-colors"
                >
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">Upload Photos</span>
                </button>
              )}
              
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
                multiple
              />
              
              {/* Uploaded images */}
              {formData.images.map((image, index) => (
                <div key={index} className="relative h-40 rounded-lg overflow-hidden group">
                  <Image
                    src={image.url}
                    alt={`Property image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
              <Info className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-700 mb-1">Photo tips:</p>
                <ul className="text-xs text-blue-600 list-disc ml-4 space-y-1">
                  <li>Add photos of all rooms, exterior and surrounding area</li>
                  <li>Make sure your photos are well-lit and clear</li>
                  <li>Avoid watermarks and timestamps on photos</li>
                  <li>Landscape orientation works best</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case STEPS.PRICING:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Set Your Price</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="price" className="label">
                  {listingType === 'buy' ? 'Sale Price (₹)' : 'Monthly Rent (₹)'}
                </label>
                <input
                  type="number"
                  id="price"
                  className="input"
                  placeholder={listingType === 'buy' ? 'e.g., 5000000' : 'e.g., 25000'}
                  value={formData.price}
                  onChange={(e) => updateFormData({ price: e.target.value })}
                  required
                />
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Price Guidance</h3>
                <p className="text-sm text-yellow-700 mb-4">
                  Similar properties in your area are listed between:
                </p>
                <div className="text-xl font-bold text-yellow-800">
                  {listingType === 'buy' 
                    ? '₹' + (parseInt(formData.price || '0') * 0.9).toLocaleString('en-IN') + ' - ₹' + (parseInt(formData.price || '0') * 1.1).toLocaleString('en-IN')
                    : '₹' + (parseInt(formData.price || '0') * 0.9).toLocaleString('en-IN') + ' - ₹' + (parseInt(formData.price || '0') * 1.1).toLocaleString('en-IN') + '/month'
                  }
                </div>
              </div>
              
              {listingType === 'rent' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Charges</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="maintenance" className="label">Maintenance (₹/month)</label>
                      <input
                        type="number"
                        id="maintenance"
                        className="input"
                        placeholder="e.g., 3000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="security-deposit" className="label">Security Deposit (₹)</label>
                      <input
                        type="number"
                        id="security-deposit"
                        className="input"
                        placeholder="e.g., 75000"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case STEPS.REVIEW:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Review Your Listing</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              {/* Property Images */}
              <div className="relative h-80 bg-gray-100">
                {formData.images.length > 0 ? (
                  <Image
                    src={formData.images[0].url}
                    alt={formData.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No images uploaded</p>
                  </div>
                )}
                
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  {listingType === 'buy' ? 'For Sale' : 'For Rent'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{formData.title || 'No title provided'}</h3>
                
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-gray-600 mr-1" />
                  <p className="text-gray-600">{formData.location || 'No location provided'}</p>
                </div>
                
                <p className="text-2xl font-bold text-primary-700 mb-6">
                  {formData.price ? `₹${parseInt(formData.price).toLocaleString('en-IN')}` : 'Price not set'}
                  {listingType === 'rent' && <span className="text-sm font-normal text-gray-600">/month</span>}
                </p>
                
                <div className="flex items-center gap-6 border-t border-b border-gray-100 py-4 mb-6">
                  {propertyType !== 'plot' && propertyType !== 'commercial' && formData.bedrooms && (
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 text-gray-600 mr-1" />
                      <span>{formData.bedrooms} {parseInt(formData.bedrooms) === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                  )}
                  
                  {propertyType !== 'plot' && formData.bathrooms && (
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 text-gray-600 mr-1" />
                      <span>{formData.bathrooms} {parseInt(formData.bathrooms) === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                  )}
                  
                  {formData.area && (
                    <div className="flex items-center">
                      <Square className="w-5 h-5 text-gray-600 mr-1" />
                      <span>{formData.area} sq.ft</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700">{formData.description || 'No description provided'}</p>
                </div>
                
                {formData.amenities.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.amenities.map((amenity) => (
                        <span 
                          key={amenity}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Ready to Publish
              </h3>
              <p className="text-sm text-green-700">
                Your property listing is ready to be published. Click "Submit Listing" below to make it live.
              </p>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-8 py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Listing'}
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Listed Successfully!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your property has been listed successfully and is now live on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn btn-outline">
                Go to Home
              </Link>
              <Link href="/properties" className="btn btn-primary">
                View All Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">List Your Property</h1>
          <p className="text-gray-600">
            Fill in the details below to create your property listing. The more information you provide, the better!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            {Object.values(STEPS).slice(0, 7).map((stepValue, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    step === stepValue
                      ? "bg-primary-600 text-white"
                      : step > stepValue
                        ? "bg-primary-200 text-primary-700"
                        : "bg-gray-200 text-gray-400"
                  )}
                >
                  {index + 1}
                </div>
                <span className="text-xs mt-1 hidden md:block">
                  {Object.keys(STEPS)[index].split('_').map(word => 
                    word.charAt(0) + word.slice(1).toLowerCase()
                  ).join(' ')}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute h-1 bg-gray-200 top-0 left-0 right-0"></div>
            <div 
              className="absolute h-1 bg-primary-600 top-0 left-0 transition-all"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 0 ? (
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="btn btn-outline"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 6 && (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="btn btn-primary"
                  disabled={
                    (step === STEPS.PROPERTY_TYPE && (!listingType || !propertyType))
                  }
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}