import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { personalInfo } from "@/constants/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample resume data that would come from the shared data file
const workExperience = [
  {
    id: 1,
    position: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2020 - Present",
    location: "New York, NY",
    description: [
      "Led the development of a high-traffic e-commerce platform using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries resulting in 30% faster page load times"
    ]
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "WebSolutions Ltd.",
    duration: "2018 - 2020",
    location: "Boston, MA",
    description: [
      "Developed and maintained multiple client websites using JavaScript, React, and Express",
      "Built RESTful APIs for mobile applications",
      "Collaborated with UX/UI designers to implement responsive designs",
      "Participated in Agile development cycles and sprint planning"
    ]
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "CreativeDigital",
    duration: "2016 - 2018",
    location: "San Francisco, CA",
    description: [
      "Created responsive web interfaces using HTML5, CSS3, and JavaScript",
      "Implemented state management with Redux for complex SPAs",
      "Worked with backend developers to integrate frontend with APIs",
      "Utilized webpack and Babel for modern JavaScript bundling"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "2014 - 2016",
    location: "Stanford, CA",
    description: [
      "Specialized in Artificial Intelligence and Machine Learning",
      "Research assistant for Natural Language Processing lab",
      "GPA: 3.9/4.0"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "Massachusetts Institute of Technology",
    duration: "2010 - 2014",
    location: "Cambridge, MA",
    description: [
      "Graduated with honors",
      "President of the Computer Science Club",
      "Capstone Project: Developed a real-time collaborative code editor"
    ]
  }
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022",
    description: "Professional certification for designing distributed systems on AWS"
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2021",
    description: "Advanced certification for building scalable applications on Google Cloud Platform"
  },
  {
    id: 3,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2020",
    description: "Expertise in managing Kubernetes clusters and containerized applications"
  }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Function to handle resume download
  const handleDownloadResume = () => {
    // In a real implementation, this would link to the actual PDF file
    window.open("/Ezekiel_Gwamna_Resume.pdf", "_blank");
  };

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
              My Resume
            </motion.h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my professional experience, education, and certifications.
              Feel free to download a copy for your reference.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                onClick={handleDownloadResume} 
                className="gap-2"
                size="lg"
              >
                Download Resume <Download size={16} />
              </Button>
            </motion.div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <Tabs defaultValue="experience" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="experience" className="text-sm md:text-base">
                  <Briefcase className="mr-2 h-4 w-4 hidden md:inline" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="text-sm md:text-base">
                  <GraduationCap className="mr-2 h-4 w-4 hidden md:inline" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="certifications" className="text-sm md:text-base">
                  <Award className="mr-2 h-4 w-4 hidden md:inline" />
                  Certifications
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="pt-2">
                <div className="space-y-8">
                  {workExperience.map((job) => (
                    <motion.div 
                      key={job.id}
                      className="border-l-2 border-primary pl-6 relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: job.id * 0.1 }}
                    >
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                        <span className="font-medium">{job.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>{job.duration}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>{job.location}</span>
                      </div>
                      <ul className="mt-3 space-y-1">
                        {job.description.map((item, index) => (
                          <li key={index} className="text-gray-600 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="pt-2">
                <div className="space-y-8">
                  {education.map((edu) => (
                    <motion.div 
                      key={edu.id}
                      className="border-l-2 border-primary pl-6 relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: edu.id * 0.1 }}
                    >
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>{edu.duration}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>{edu.location}</span>
                      </div>
                      <ul className="mt-3 space-y-1">
                        {edu.description.map((item, index) => (
                          <li key={index} className="text-gray-600 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="certifications" className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert) => (
                    <motion.div 
                      key={cert.id}
                      className="bg-gray-50 rounded-lg p-5 border border-gray-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: cert.id * 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-gray-800">{cert.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <span>{cert.issuer}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>{cert.year}</span>
                      </div>
                      <p className="text-gray-600">{cert.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button asChild>
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;