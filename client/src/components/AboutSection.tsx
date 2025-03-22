import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { about, personalInfo } from "@/constants/data";
import { Briefcase, GraduationCap, Heart, MapPin, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Get to know more about me, my background, and what drives me as a software engineer.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
              alt="Ezekiel working" 
              className="rounded-lg shadow-lg w-full object-cover h-80 md:h-96"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <GraduationCap className="mr-2 text-primary" size={18} />
                  Education
                </h4>
                <p className="text-gray-600">{about.education.degree}</p>
                <p className="text-gray-500 text-sm">{about.education.institution}, {about.education.year}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Briefcase className="mr-2 text-primary" size={18} />
                  Experience
                </h4>
                <p className="text-gray-600">{about.experience.position}</p>
                <p className="text-gray-500 text-sm">{about.experience.company}, {about.experience.period}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <MapPin className="mr-2 text-primary" size={18} />
                  Location
                </h4>
                <p className="text-gray-600">{personalInfo.location}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Heart className="mr-2 text-primary" size={18} />
                  Interests
                </h4>
                <p className="text-gray-600">{about.interests.join(', ')}</p>
              </div>
            </div>
            
            <Button className="gap-2" onClick={scrollToContact}>
              Let's Connect
              <MessageCircle size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
