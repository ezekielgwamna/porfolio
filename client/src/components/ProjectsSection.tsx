import { motion } from "framer-motion";
import { projects } from "@/constants/data";
import { ArrowRight, Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white font-bold text-lg">{project.title}</h3>
          <p className="text-gray-100 text-sm">{project.category}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={project.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore some of my recent work and the technologies I've used to build them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://github.com/ezekielgwamna" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium gap-1"
          >
            View All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
