import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Code2, Brain, Database, Cpu, Globe, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: '#22c55e',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'ML Ops (basics)'],
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    color: '#38bdf8',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    color: '#22c55e',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    color: '#38bdf8',
    skills: ['Python', 'TypeScript', 'Java', 'C'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cpu,
    color: '#22c55e',
    skills: ['AWS (CCP)', 'Docker', 'CI/CD', 'Git'],
  },
  {
    title: 'Domains',
    icon: Zap,
    color: '#38bdf8',
    skills: ['Blockchain', 'Embedded/Firmware', 'Data Engineering (basics)'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
            Skills & Tech Stack
            <span className="text-[#22c55e]">{' />'}</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building cutting-edge AI and web solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-[#1e293b]/50 border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#38bdf8]/10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-lg bg-gradient-to-br from-[#38bdf8]/20 to-[#22c55e]/20 border border-[#38bdf8]/30"
                    style={{
                      boxShadow: `0 0 20px ${category.color}20`,
                    }}
                  >
                    <category.icon
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-lg text-[#f8fafc]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        variant="outline"
                        className="border-[#38bdf8]/30 text-[#f8fafc] bg-[#0f172a]/50 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/60 transition-all cursor-default"
                        style={{
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.1)',
                        }}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.color}15, transparent 40%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#1e293b]/50 to-[#1e293b]/30 border border-[#38bdf8]/20"
        >
          <p className="text-center text-[#94a3b8] mb-6">
            Constantly learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
              'TypeScript',
              'Next.js',
              'Node.js',
              'Python',
              'AWS',
              'Docker',
              'Blockchain',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ y: -4 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-[#22c55e]/10 border border-[#38bdf8]/30 text-[#f8fafc] hover:border-[#38bdf8]/60 transition-all"
                style={{
                  boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
