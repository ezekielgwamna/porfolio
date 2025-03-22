import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/constants/data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle smooth scrolling for anchor links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            <span className="text-primary">Ezekiel</span>
            <span className="text-emerald-500">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/"
              className={`transition duration-300 hover:text-primary ${
                location === "/" ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link href="/projects"
              className={`transition duration-300 hover:text-primary ${
                location === "/projects" ? "text-primary font-semibold" : ""
              }`}
            >
              Projects
            </Link>
            <Link href="/blog"
              className={`transition duration-300 hover:text-primary ${
                location === "/blog" ? "text-primary font-semibold" : ""
              }`}
            >
              Blog
            </Link>
            <Link href="/contact"
              className={`transition duration-300 hover:text-primary ${
                location === "/contact" ? "text-primary font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Resume Button */}
            <Link href="/resume">
              <Button variant="default">Resume</Button>
            </Link>
          </div>
          
          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link href="/"
                  className={`px-2 py-1 ${
                    location === "/" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
                <Link href="/projects"
                  className={`px-2 py-1 ${
                    location === "/projects" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Projects
                </Link>
                <Link href="/blog"
                  className={`px-2 py-1 ${
                    location === "/blog" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Blog
                </Link>
                <Link href="/contact"
                  className={`px-2 py-1 ${
                    location === "/contact" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Contact
                </Link>
                <Link href="/resume" className="mt-2">
                  <Button className="w-full" variant="default">
                    Resume
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
