import { motion } from "framer-motion";
import { skills, Skill } from "@/constants/data";
import { Cloud, Code, Terminal, Wrench, Brain } from "lucide-react";
import { useEffect, useRef } from "react";

const SkillBar = ({ skill }: { skill: Skill }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${skill.percentage}%`;
              }
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [skill.percentage]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          ref={barRef}
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

const SkillTag = ({ name, icon }: { name: string; icon?: React.ReactNode }) => (
  <motion.span
    className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/5 hover:border-primary/20 transition duration-300 flex items-center gap-1"
    whileHover={{ y: -3 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
    {name}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Here are the technologies and tools I specialize in to create exceptional web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            
            {/* Frontend */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg text-primary/80">Frontend Development</h4>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg text-primary/80">Backend Development</h4>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div>
              <h4 className="font-semibold mb-4 text-lg text-primary/80">Artificial Intelligence</h4>
              <div className="space-y-4">
                {skills.artificialIntelligence.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Other Skills & Tools</h3>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <h4 className="w-full font-semibold mb-2 text-lg text-primary/80">Dev Tools & Workflow</h4>
              
              {skills.devTools.map((tool) => (
                <SkillTag key={tool} name={tool} icon={<Wrench className="w-4 h-4" />} />
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <h4 className="w-full font-semibold mb-2 text-lg text-primary/80">Libraries & Frameworks</h4>
              
              {skills.libraries.map((lib) => (
                <SkillTag key={lib} name={lib} icon={<Code className="w-4 h-4" />} />
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <h4 className="w-full font-semibold mb-2 text-lg text-primary/80">Soft Skills</h4>
              
              {skills.softSkills.map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
