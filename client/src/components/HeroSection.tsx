import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/constants/data";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = personalInfo.name;

  useEffect(() => {
    if (typedText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullName.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullName]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
              <span>{typedText}</span>
              {!isTypingComplete && (
                <span className="inline-block w-1 h-8 bg-primary animate-pulse ml-1"></span>
              )}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-gray-600 max-w-lg mb-8">
              {personalInfo.shortBio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} className="gap-2">
                View My Work
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                Contact Me
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-5">
              {personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="/src/assets/images/profile.jpg" 
                alt={personalInfo.name} 
                className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
