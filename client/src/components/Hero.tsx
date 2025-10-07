import { Button } from "@/components/ui/button";
import MotionButton from "@/components/ui/motion-button";
import { ShoppingCart, BookOpen, Phone, ArrowDown, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import ProgressiveImage from "@/components/ui/progressive-image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import heroImage1 from "@assets/generated_images/Healthy_cocoa_plantation_background_bf1ceda3.png";
import heroImage2 from "@assets/generated_images/Healthy_cocoa_crops_after_e6a56131.png";
import heroImage3 from "@assets/generated_images/Field_application_demonstration_51ad5748.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: heroImage1,
      title: "GIANT KILL",
      subtitle: "The Ultimate Protection for Your Cocoa Crops",
      description: "Powerful systemic and contact regenerating insecticide – The best solution for capsid control.",
      primaryButton: { text: "Buy Now", href: "/product", icon: ShoppingCart },
      secondaryButton: { text: "Learn More", href: "/how-it-works", icon: BookOpen }
    },
    {
      id: 2,
      image: heroImage2,
      title: "TRUSTED BY FARMERS",
      subtitle: "Real Results, Real Success",
      description: "Join over 1,000 farmers who have transformed their cocoa yields with Giant Kill.",
      primaryButton: { text: "See Results", href: "/testimonials", icon: TrendingUp },
      secondaryButton: { text: "Our Story", href: "/about", icon: BookOpen }
    },
    {
      id: 3,
      image: heroImage3,
      title: "HEALTHY HARVESTS",
      subtitle: "Protect Your Livelihood",
      description: "Ensure bountiful cocoa harvests with our proven pest control solution.",
      primaryButton: { text: "Get Started", href: "/contact", icon: Phone },
      secondaryButton: { text: "View Gallery", href: "/products", icon: BookOpen }
    }
  ];

  // Preload images for smooth transitions
  useEffect(() => {
    const imagePromises = heroSlides.map((slide) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => setImagesLoaded(true), 500);
    });
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Smooth fade transition after images load
  const slideVariants = imagesLoaded ? {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  } : {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 }
  };

  const slideTransition = imagesLoaded 
    ? { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    : { duration: 0.8, ease: "easeInOut" };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            <ProgressiveImage
              src={heroSlides[currentSlide].image}
              alt={`${heroSlides[currentSlide].title} - Cocoa farming`}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Navigation Arrows - Desktop Only */}
      <button
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-6 sm:space-y-8"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          key={currentSlide}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="text-primary block sm:inline">
                {heroSlides[currentSlide].title}
              </span>
              <span className="block sm:inline sm:ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-0">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto px-4 leading-relaxed"
          >
            {heroSlides[currentSlide].description}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <a href={heroSlides[currentSlide].primaryButton.href} className="w-full sm:w-auto">
              <MotionButton 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {React.createElement(heroSlides[currentSlide].primaryButton.icon, {
                  className: "mr-2 h-5 w-5 group-hover:rotate-12 transition-transform"
                })}
                {heroSlides[currentSlide].primaryButton.text}
              </MotionButton>
            </a>
            
            <a href={heroSlides[currentSlide].secondaryButton.href} className="w-full sm:w-auto">
              <MotionButton 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto backdrop-blur-md bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                whileTap={{ scale: 0.98 }}
              >
                {React.createElement(heroSlides[currentSlide].secondaryButton.icon, {
                  className: "mr-2 h-5 w-5 group-hover:rotate-12 transition-transform"
                })}
                {heroSlides[currentSlide].secondaryButton.text}
              </MotionButton>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section - Scroll Indicator + Slide Indicators */}
      <div className="absolute bottom-20 sm:bottom-20 left-0 right-0 z-20 flex flex-col items-center gap-4">
        {/* Slide Indicators */}
        <motion.div 
          className="flex items-center justify-center gap-1.5 sm:gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-6 h-1.5 sm:w-8 sm:h-2 bg-primary shadow-lg shadow-primary/50' 
                  : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="#features"
            className="flex flex-col items-center gap-2 group cursor-pointer"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hidden sm:block text-white/70 text-sm font-medium group-hover:text-white transition-colors">
              Scroll to Explore
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all">
              <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Pause auto-play on hover (desktop only) */}
      <div 
        className="hidden md:block absolute inset-0 z-5"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      />
    </section>
  );
}