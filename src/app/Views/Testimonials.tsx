'use client'
import React, { useState, useEffect } from 'react';
import { Star, Quote, Heart, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
  category: 'wellness' | 'counseling' | 'herbal';
}

const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wellness' | 'counseling' | 'herbal'>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      text: "SaveAman's herbal products and daily counseling transformed my approach to wellness. The natural remedies combined with professional guidance helped me achieve balance I never thought possible.",
      image: '/Images/noprofile.jpeg',
      name: 'Tanaka Musungare',
      title: 'Wellness Enthusiast',
      rating: 5,
      category: 'wellness'
    },
    {
      text: "The daily motivation and counseling sessions provided by SaveAman gave me the strength to overcome my challenges. Their holistic approach truly makes a difference.",
      image: '/Images/noprofile.jpeg',
      name: 'Mr Taurai',
      title: 'Business Owner',
      rating: 5,
      category: 'counseling'
    },
    {
      text: "I was skeptical about herbal remedies until I tried SaveAman's products. The quality and effectiveness exceeded my expectations, and the $1 subscription made it accessible.",
      image: '/Images/noprofile.jpeg',
      name: 'Tamuka Chikomo',
      title: 'Healthcare Worker',
      rating: 4,
      category: 'herbal'
    },
    {
      text: "The WhatsApp community is incredibly supportive, and the daily content keeps me motivated. SaveAman has created something truly special for mental health and wellness.",
      image: '/Images/noprofile.jpeg',
      name: 'Kudzi',
      title: 'Teacher',
      rating: 5,
      category: 'wellness'
    },
    {
      text: "Professional counseling at such an affordable price point is revolutionary. The team at SaveAman genuinely cares about making wellness accessible to everyone.",
      image: '/Images/noprofile.jpeg',
      name: 'Lisa Park',
      title: 'Student',
      rating: 5,
      category: 'counseling'
    },
    {
      text: "The natural herbs have become an essential part of my daily routine. Combined with the motivational content, I feel more energized and focused than ever before.",
      image: '/Images/noprofile.jpeg',
      name: 'Zviko',
      title: 'Entrepreneur',
      rating: 4,
      category: 'herbal'
    }
  ];

  const StarRating: React.FC<{ rating: 1 | 2 | 3 | 4 | 5 }> = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index} 
          className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const categoryColors = {
    wellness: 'from-green-500 to-emerald-500',
    counseling: 'from-blue-500 to-cyan-500',
    herbal: 'from-purple-500 to-pink-500'
  };

  const categoryIcons = {
    wellness: <Heart className="w-4 h-4" />,
    counseling: <Users className="w-4 h-4" />,
    herbal: <Sparkles className="w-4 h-4" />
  };

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const displayTestimonials = [...filteredTestimonials, ...filteredTestimonials];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-100 to-blue-100 rounded-full opacity-20 translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-20 -translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 mb-6">
            <Quote className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-800">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Community</span> Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Real stories from people who have transformed their lives through our holistic wellness approach.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'all' as 'all' | 'wellness' | 'counseling' | 'herbal', label: 'All Stories', icon: <Quote className="w-4 h-4" /> },
              { key: 'wellness' as 'all' | 'wellness' | 'counseling' | 'herbal', label: 'Wellness', icon: <Heart className="w-4 h-4" /> },
              { key: 'counseling' as 'all' | 'wellness' | 'counseling' | 'herbal', label: 'Counseling', icon: <Users className="w-4 h-4" /> },
              { key: 'herbal' as 'all' | 'wellness' | 'counseling' | 'herbal', label: 'Herbal', icon: <Sparkles className="w-4 h-4" /> }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid with Infinite Scroll */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white pointer-events-none z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-96 overflow-hidden mask-gradient">
            {[1, 2, 3].map((colNum) => (
              <div 
                key={colNum} 
                className={`animate-scroll-${colNum} ${colNum > 1 ? 'hidden md:block' : ''} ${colNum > 2 ? 'hidden lg:block' : ''}`}
                style={{
                  animationDelay: `${(colNum - 1) * 2}s`
                }}
              >
                {displayTestimonials.map((testimonial, index) => (
                  <div 
                    key={`col${colNum}-${testimonial.name}-${index}`} 
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 border border-gray-100 group hover:-translate-y-1"
                  >
                    {/* Category badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[testimonial.category]} text-white text-xs font-medium mb-4`}>
                      {categoryIcons[testimonial.category]}
                      {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
                    </div>
                    
                    <StarRating rating={testimonial.rating} />
                    
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                      <p className="text-gray-700 leading-relaxed pl-6 italic">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                            height={80}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-green-200 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Wellness Journey?</h3>
            <p className="text-green-100 mb-6">Join thousands of others who have transformed their lives with SaveAman.</p>
            <a
              href="https://whatsapp.com/channel/0029VaChiseHrDZagoSH1b1M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Join Our Community
              <Quote className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
        
        @keyframes scroll1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        
        @keyframes scroll2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        
        @keyframes scroll3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        
        .animate-scroll-1 {
          animation: scroll1 45s linear infinite;
        }
        
        .animate-scroll-2 {
          animation: scroll2 60s linear infinite;
        }
        
        .animate-scroll-3 {
          animation: scroll3 52s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;