import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Blockchain Cross-Border Payments (Internship)',
    description:
      'Contributed to a blockchain-based cross-border payment platform at Kavodax. Designed modular onboarding and transaction flows and integrated third-party services.',
    image:
      'https://images.unsplash.com/photo-1622630998477-20aa696ecb02?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Node.js', 'Blockchain', 'AWS'],
    github: 'https://github.com/arnavnagzirkar',
    demo: 'https://www.linkedin.com/in/arnav-nagzirkar/',
  },
  {
    title: 'Space Systems Firmware (UofT Aerospace)',
    description:
      'Embedded firmware work for the University of Toronto Aerospace Team (Space Systems), focusing on reliable, maintainable code in a multidisciplinary environment.',
    image:
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop',
    tags: ['C', 'Firmware', 'Embedded'],
    github: 'https://github.com/arnavnagzirkar',
    demo: 'https://www.utat.ca/',
  },
  {
    title: 'AI-Powered Financial Tools',
    description:
      'Built analysis tooling and experiments with Python and machine learning to extract insights from financial data and support decision-making.',
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'Pandas', 'ML'],
    github: 'https://github.com/arnavnagzirkar',
    demo: 'https://www.linkedin.com/in/arnav-nagzirkar/',
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
