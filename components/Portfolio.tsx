import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with ML-driven insights and predictive analytics for business intelligence.',
    image: 'https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzYxMzIyMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive web application for visualizing and training custom neural networks with real-time performance metrics.',
    image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyOTc1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['PyTorch', 'Next.js', 'WebGL', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Smart E-Commerce Platform',
    description: 'Full-stack marketplace with AI-driven recommendations, natural language search, and automated inventory management.',
    image: 'https://images.unsplash.com/photo-1758598497143-84a0cfdc9958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjEyODY5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Predictive Maintenance System',
    description: 'IoT-based monitoring system using machine learning to predict equipment failures and optimize maintenance schedules.',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjEzMTE4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Scikit-learn', 'Flask', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f8fafc] mb-4">
            <span className="text-[#22c55e]">{'<'}</span>
            Featured Projects
            <span className="text-[#22c55e]">{' />'}</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-[#1e293b]/50 border-[#38bdf8]/20 hover:border-[#38bdf8] transition-all duration-300 hover:shadow-xl hover:shadow-[#38bdf8]/10">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0f172a]/80 backdrop-blur-sm border border-[#38bdf8]/40 hover:bg-[#38bdf8]/20"
                    >
                      <Github className="w-5 h-5 text-[#f8fafc]" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0f172a]/80 backdrop-blur-sm border border-[#22c55e]/40 hover:bg-[#22c55e]/20"
                    >
                      <ExternalLink className="w-5 h-5 text-[#f8fafc]" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-[#38bdf8]/30 text-[#38bdf8] bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38bdf8] to-[#22c55e] rounded-lg blur opacity-20"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
