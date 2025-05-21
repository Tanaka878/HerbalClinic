import React, { useState, useEffect } from 'react';
import { ChevronRight, Leaf, Heart, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const benefits = [
    { icon: <Leaf className="w-5 h-5 text-green-500" />, text: "Natural Herbal Products" },
    { icon: <Heart className="w-5 h-5 text-red-500" />, text: "Improved Well-being" },
    { icon: <MessageCircle className="w-5 h-5 text-blue-500" />, text: "Daily Support & Counseling" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-green-100 text-gray-800 py-24 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-300"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-green-400"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-yellow-200"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className={`text-left space-y-6 lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block px-3 py-1 rounded-full bg-green-100 border border-green-300">
              <span className="text-sm font-medium text-green-800">Herbal Wellness & Counseling</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Begin Your <span className="text-green-600">Natural Healing</span> Journey with SaveAman
            </h1>
            
            <p className="text-lg text-gray-600">
              Discover the transformative power of nature's remedies combined with expert daily counseling. 
              Join our supportive community today and unlock a path to holistic well-being.
            </p>
            
            <div className="pt-4 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/your-whatsapp-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Join Our WhatsApp Group
                <ChevronRight className="w-5 h-5" />
              </a>
              
              <a
                href="#learn-more"
                className="flex items-center justify-center gap-2 bg-white text-green-600 border border-green-300 px-6 py-3 rounded-lg shadow-sm hover:bg-green-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            
            <div className="pt-6 text-sm text-gray-500">
              <p>No sign-up required. Connect instantly and start your wellness journey today.</p>
            </div>
          </div>
          
          {/* Hero image */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-green-200"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl bg-yellow-100"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-green-100 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="SaveAman Herbal Products" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">100% Natural</p>
                      <p className="text-sm text-gray-500">Herbal Products</p>
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
};

export default Hero;