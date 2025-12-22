import { useState, useEffect, useRef } from 'react';
import projectsJSON from '@/assets/data/projects.json';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const [projects] = useState(projectsJSON);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            setVisibleProjects((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [projects]);
  
  const ProjectCard = ({ project }) => (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-purple-100 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-purple-500 hover:-translate-y-2 relative">
      {/* Purple Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-400/20 blur-xl"></div>
      </div>
      
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="w-full h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={project.screenshots[0].url} 
            alt={project.screenshots[0].caption}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{project.title}</CardTitle>
          <span className="text-xs text-muted-foreground bg-purple-100 dark:bg-purple-900/50 px-3 py-1 rounded-full font-medium">
            {project.date}
          </span>
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4 pt-0 relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium border border-purple-200 dark:border-purple-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 gap-2 relative z-10">
        {project.url && (
          <Button 
            variant="default" 
            size="sm"
            onClick={() => window.open(project.url, '_blank')}
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white shadow-md hover:shadow-purple-500/50 transition-all duration-300"
          >
            View Live
          </Button>
        )}
        <Button 
          variant="secondary" 
          size="sm"
          onClick={() => setSelectedProject(project)}
          className="border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300"
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Explore my featured work and personal projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleProjects.has(index)
                  ? 'opacity-100 translate-y-0 rotate-0'
                  : 'opacity-0 translate-y-8 -rotate-3'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-background rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl font-bold hover:text-primary transition-colors"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
            
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="mb-4">
                <img 
                  src={selectedProject.screenshots[0].url} 
                  alt={selectedProject.screenshots[0].caption}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  {selectedProject.screenshots[0].caption}
                </p>
              </div>
            )}
            
            <p className="text-base mb-4">{selectedProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {selectedProject.url && (
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => window.open(selectedProject.url, '_blank')}
                >
                  View Live
                </Button>
              )}
              {selectedProject.github && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(selectedProject.github, '_blank')}
                >
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};