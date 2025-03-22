import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, Project } from "@/constants/data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Get all unique categories
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  // Filter projects based on selected category
  const filteredProjects = filter
    ? projects.filter((project) => project.category === filter)
    : projects;

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
              My Projects
            </motion.h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Explore my latest work and technical projects. Each project showcases different skills
              and technologies I've worked with.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Button
                variant={filter === null ? "default" : "outline"}
                onClick={() => setFilter(null)}
                className="rounded-full"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative"
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
                      style={{
                        transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60"></div>
                    <Badge className="absolute top-3 right-3">{project.category}</Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 mb-4">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary/10 text-primary border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                        <Github size={16} /> Code
                      </a>
                    </Button>
                    
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                        <ExternalLink size={16} /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Project Pagination/Navigation */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
              <Button variant="outline" onClick={() => setFilter(null)} className="mt-4">
                View all projects
              </Button>
            </div>
          )}
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 bg-primary/5 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="gap-2">
                Get In Touch <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;