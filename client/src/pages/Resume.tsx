import { motion } from "framer-motion";
import { Calendar, MapPin, Building, GraduationCap, Download, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/constants/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample resume data
const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    duration: "Jan 2022 - Present",
    description: [
      "Lead the development of a high-traffic e-commerce platform using React, Node.js, and PostgreSQL, resulting in a 35% increase in conversion rates",
      "Implemented microservices architecture to improve scalability and reduce deployment time by 40%",
      "Collaborated with a team of 8 developers using Agile methodologies, leading sprint planning and code reviews",
      "Optimized database queries and implemented caching strategies, reducing average page load time by 2.5 seconds"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    duration: "May 2019 - Dec 2021",
    description: [
      "Developed and maintained multiple web applications for clients in finance, healthcare, and retail sectors",
      "Built RESTful APIs and GraphQL endpoints that processed over 1 million requests per day",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment errors by 75%",
      "Mentored junior developers and led technical workshops on React and Node.js best practices"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Web Creations Studio",
    location: "Boston, MA",
    duration: "Aug 2017 - Apr 2019",
    description: [
      "Created responsive, cross-browser compatible web interfaces using HTML5, CSS3, and JavaScript",
      "Transformed design mockups into functional web pages with pixel-perfect accuracy",
      "Integrated third-party APIs for payment processing, social media, and analytics",
      "Collaborated with designers to improve UX and implement accessibility standards (WCAG 2.1)"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    duration: "2015 - 2017",
    description: "Specialized in Software Engineering and Distributed Systems. Graduated with a 3.9 GPA. Thesis on 'Optimizing Distributed Database Performance in Cloud Environments'."
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    duration: "2011 - 2015",
    description: "Dean's List for all semesters. Participated in the ACM programming competition. Completed internships at Google and Microsoft."
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2021",
    url: "https://cloud.google.com/certification/cloud-architect"
  },
  {
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "2020",
    url: "https://university.mongodb.com/certification"
  }
];

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Go", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Django", "TailwindCSS", "Redux", "GraphQL"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Webpack", "Jest"]
  },
  {
    category: "Methodologies",
    items: ["Agile/Scrum", "Test-Driven Development", "CI/CD", "Microservices", "RESTful APIs"]
  }
];

const ResumePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Resume
              </motion.h1>
              <div className="h-1 w-20 bg-primary mb-4 rounded-full"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="shadow-md">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Profile Summary */}
          <motion.section
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Full-stack software engineer with over 7 years of experience designing and developing web applications 
              across various domains including e-commerce, fintech, and digital marketing. Experienced in all phases 
              of the software development lifecycle with expertise in React, Node.js, and cloud infrastructure. 
              Strong problem-solving abilities and a passion for writing clean, efficient, and maintainable code.
            </p>
          </motion.section>
          
          {/* Experience */}
          <motion.section
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className={index !== experiences.length - 1 ? "pb-8 border-b border-gray-200" : ""}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-gray-700 mt-1">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Education */}
          <motion.section
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className={index !== education.length - 1 ? "pb-8 border-b border-gray-200" : ""}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <div className="flex items-center text-gray-700 mt-1">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Skills & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Skills */}
            <motion.section
              className="bg-white rounded-xl shadow-md p-8 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    {index !== skills.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </motion.section>
            
            {/* Certifications */}
            <motion.section
              className="bg-white rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className={index !== certifications.length - 1 ? "pb-4 border-b border-gray-200" : ""}>
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <div className="flex items-center text-gray-700 mt-1">
                      <Building className="h-4 w-4 mr-2" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline mt-2"
                    >
                      <Link2 className="h-4 w-4 mr-1" />
                      <span>Verify</span>
                    </a>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
          
          {/* Call to Action */}
          <motion.div
            className="bg-primary/5 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to work together?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions. Let's discuss how I can contribute 
              to your team or project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResumePage;