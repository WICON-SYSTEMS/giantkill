import { Button } from "@/components/ui/button";
import MotionButton from "@/components/ui/motion-button";
import { ShoppingCart, BookOpen, Phone } from "lucide-react";
import ProgressiveImage from "@/components/ui/progressive-image";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Healthy_cocoa_plantation_background_bf1ceda3.png";

export default function Hero() {
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

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ProgressiveImage
          src={heroImage}
          alt="Healthy cocoa plantation background"
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
            GIANT KILL
          </motion.span>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {" "}– The Ultimate Protection for Your Cocoa Crops
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" 
          data-testid="text-hero-subtitle"
          variants={itemVariants}
        >
          Powerful systemic and contact regenerating insecticide – The best solution for capsid control.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
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
              <ShoppingCart className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              Buy Now
            </MotionButton>
          </motion.div>
          
          <motion.div variants={buttonVariants}>
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
              <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              Learn More
            </MotionButton>
          </motion.div>
          
          <motion.div variants={buttonVariants}>
            <MotionButton 
              size="lg" 
              className="bg-primary p-3 hover:bg-primary group"
              data-testid="button-contact-us"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 177, 79, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              Contact Us
            </MotionButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
