import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { personalInfo } from "@/constants/data";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Have a project in mind or want to discuss a potential collaboration? 
              Feel free to reach out using the form below or through my social media channels.
            </p>
          </div>
          
          {/* Map or Location Section */}
          <motion.div
            className="mb-16 rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">My Location</h2>
              <p className="text-gray-600">{personalInfo.location}</p>
              <p className="text-gray-500 mt-2 text-sm">Available for remote work and relocation for the right opportunity</p>
            </div>
            
            {/* Embed Google Maps or use a static map image */}
            <div className="h-[300px] bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Map placeholder - Replace with actual map component</p>
              </div>
              
              {/* For a real implementation, add something like:
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d X!2d Y!3d Z" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> 
              */}
            </div>
          </motion.div>
          
          {/* Contact Form Section */}
          <ContactSection />
          
          {/* Availability Section */}
          <motion.div 
            className="mt-16 bg-primary/5 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">My Availability</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work, full-time positions, and consulting opportunities.
              My typical response time is within 24 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Freelance Projects</h3>
                <p className="text-gray-600">Available for new projects starting next month</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Full-time Positions</h3>
                <p className="text-gray-600">Open to offers with 2 weeks notice period</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Consulting</h3>
                <p className="text-gray-600">Available for technical consultations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;