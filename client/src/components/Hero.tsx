import { Button } from "@/components/ui/button";
import MotionButton from "@/components/ui/motion-button";
import { ShoppingCart, BookOpen, Phone, ArrowDown, ChevronLeft, ChevronRight, Circle, TrendingUp } from "lucide-react";
import ProgressiveImage from "@/components/ui/progressive-image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import heroImage1 from "@assets/generated_images/Healthy_cocoa_plantation_background_bf1ceda3.png";
import heroImage2 from "@assets/generated_images/Healthy_cocoa_crops_after_e6a56131.png";
import heroImage3 from "@assets/generated_images/Field_application_demonstration_51ad5748.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      id: 1,
      image: heroImage1,
      title: "GIANT KILL",
      subtitle: "– The Ultimate Protection for Your Cocoa Crops",
      description: "Powerful systemic and contact regenerating insecticide – The best solution for capsid control.",
      primaryButton: { text: "Buy Now", href: "/product", icon: ShoppingCart },
      secondaryButton: { text: "Learn More", href: "/how-it-works", icon: BookOpen }
    },
    {
      id: 2,
      image: heroImage2,
      title: "TRUSTED BY FARMERS",
      subtitle: "– Real Results, Real Success",
      description: "Join over 1,000 farmers who have transformed their cocoa yields with Giant Kill.",
      primaryButton: { text: "See Results", href: "/testimonials", icon: TrendingUp },
      secondaryButton: { text: "Our Story", href: "/about", icon: BookOpen }
    },
    {
      id: 3,
      image: heroImage3,
      title: "HEALTHY HARVESTS",
      subtitle: "– Protect Your Livelihood",
      description: "Ensure bountiful cocoa harvests with our proven pest control solution.",
      primaryButton: { text: "Get Started", href: "/contact", icon: Phone },
      secondaryButton: { text: "View Gallery", href: "/gallery", icon: BookOpen }
    }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
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

  const slideVariants = {
    enter: { x: "100%" },
    center: { x: 0 },
    exit: { x: "-100%" }
  };

  return (
    <section className="relative h-[100vh]  flex items-center justify-center overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <ProgressiveImage
              src={heroSlides[currentSlide].image}
              alt={`Hero slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      
      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </motion.button>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={currentSlide} // Re-trigger animation on slide change
      >
        <motion.h1 
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" 
          data-testid="text-hero-title"
          variants={titleVariants}
        >
          <motion.span 
            className="text-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
          >
            {heroSlides[currentSlide].title}
          </motion.span>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {" "}{heroSlides[currentSlide].subtitle}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" 
          data-testid="text-hero-subtitle"
          variants={itemVariants}
        >
          {heroSlides[currentSlide].description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
            <a href={heroSlides[currentSlide].primaryButton.href}>
            <MotionButton 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2 p-3 text-black font-semibold group"
              data-testid="button-buy-now"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 193, 7, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {(() => {
                const IconComponent = heroSlides[currentSlide].primaryButton.icon;
                return <IconComponent className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />;
              })()}
              {heroSlides[currentSlide].primaryButton.text}
            </MotionButton>
            </a>
          </motion.div>
          
          <motion.div variants={buttonVariants}>
            <a href={heroSlides[currentSlide].secondaryButton.href}>
            <MotionButton 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-sm bg-white/20 p-3 border-white/40 text-white hover:bg-white/30 group"
              data-testid="button-learn-more"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {(() => {
                const IconComponent = heroSlides[currentSlide].secondaryButton.icon;
                return <IconComponent className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />;
              })()}
              {heroSlides[currentSlide].secondaryButton.text}
            </MotionButton>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Centered and Clean */}
        <motion.div 
          className="flex mt-10 flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-white/80 text-lg font-medium mb-3 group-hover:text-white transition-colors duration-300">
              Scroll Down
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <ArrowDown className="h-5 w-5 text-white group-hover:text-primary transition-colors duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Auto-play Pause on Hover */}
      <div 
        className="absolute inset-0 z-5"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      />
    </section>
  );
}
