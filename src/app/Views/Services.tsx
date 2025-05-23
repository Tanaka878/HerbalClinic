import React, { useState, useEffect, useRef } from 'react';
import { useMemo } from 'react';
import { MessageCircle, TrendingUp, Leaf, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isHowWeDoItVisible, setIsHowWeDoItVisible] = useState(false);
  const servicesRef = useRef(null);
  const howWeDoItRef = useRef(null);

  const services = useMemo(() => [
    {
      id: 1,
      title: "Professional Counseling",
      description: "Expert guidance to navigate life's challenges and improve mental well-being through personalized sessions.",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["One-on-one sessions", "Group therapy", "24/7 support"]
    },
    {
      id: 2,
      title: "Daily Motivation",
      description: "Inspiring content and motivational guidance delivered daily to help you achieve your personal goals.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Daily inspiration", "Goal tracking", "Success stories"]
    },
    {
      id: 3,
      title: "Natural Herbs Distribution",
      description: "Natural herbs carefully selected and distributed as part of our holistic wellness approach.",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["100% natural", "Quality tested", "Testimonials from users"]
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.target === servicesRef.current && entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev: number[]) => [...new Set([...prev, index])]);
              }, index * 200);
            });
          }
          if (entry.target === howWeDoItRef.current && entry.isIntersecting) {
            setIsHowWeDoItVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (howWeDoItRef.current) observer.observe(howWeDoItRef.current);

    return () => observer.disconnect();
  }, [services]);

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100 to-emerald-100 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">You</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive wellness solutions designed to support your journey towards better mental health and holistic well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              } hover:-translate-y-2`}
            >
              {/* Card gradient border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="bg-white rounded-2xl h-full w-full"></div>
              </div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn more link */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How We Do It Section */}
        <div 
          ref={howWeDoItRef}
          className={`relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white transform transition-all duration-700 ${
            isHowWeDoItVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white translate-y-24 -translate-x-24"></div>
          </div>
          
          <div className="relative z-10 text-center" id='donations'>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How We Make It <span className="text-green-200">Accessible</span>
            </h2>
            <p className="text-lg lg:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              We do not make it a mandatory to pay to be part of community. But we would really appreciate it if you could pay a small weekly fee of 
              <span className="font-bold text-2xl text-white bg-green-500 px-3 py-1 rounded-lg mx-2">$1</span>
              making holistic care affordable for all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#subscribe"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Start Your Journey Today
              </a>
             
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
               
              </div>
              <div className="flex items-center gap-2">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;