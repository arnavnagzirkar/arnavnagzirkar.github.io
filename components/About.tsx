import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Code2, Rocket, Heart, Coffee } from 'lucide-react';

export function About() {
  const interests = [
    { icon: Code2, label: 'Clean Code', color: '#38bdf8' },
    { icon: Rocket, label: 'Innovation', color: '#22c55e' },
    { icon: Heart, label: 'Open Source', color: '#38bdf8' },
    { icon: Coffee, label: 'Collaboration', color: '#22c55e' },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            About Me
            <span className="text-[#22c55e]">{' />'}</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Passionate about leveraging AI to solve real-world problems
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-[#38bdf8]/30 shadow-2xl shadow-[#38bdf8]/20">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyMjQwODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Alex Chen"
                />
                <AvatarFallback className="bg-gradient-to-br from-[#38bdf8] to-[#22c55e] text-[#0f172a] text-6xl">
                  AC
                </AvatarFallback>
              </Avatar>

              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#38bdf8]/30"
                style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/20 to-[#22c55e]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Hey there! I'm <span className="text-[#38bdf8]">Alex Chen</span>, a software engineer 
                with a passion for artificial intelligence and machine learning. I love building 
                intelligent systems that make a real difference in people's lives.
              </p>
              <p>
                With over <span className="text-[#22c55e]">6 years of experience</span> in the tech 
                industry, I've worked on everything from scalable microservices to cutting-edge AI 
                models. My expertise spans full-stack development, cloud architecture, and modern ML 
                frameworks.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing 
                technical blogs, or exploring the latest advancements in AI research. I believe in 
                continuous learning and sharing knowledge with the developer community.
              </p>
              <p>
                I'm always excited to collaborate on innovative projects that push the boundaries of 
                technology. Let's build something amazing together!
              </p>
            </div>

            {/* Interests */}
            <div className="pt-6">
              <h3 className="text-[#f8fafc] mb-4">What drives me:</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1e293b]/50 border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all"
                  >
                    <div
                      className="p-2 rounded-lg bg-gradient-to-br from-[#38bdf8]/20 to-[#22c55e]/20"
                      style={{ boxShadow: `0 0 15px ${interest.color}20` }}
                    >
                      <interest.icon
                        className="w-5 h-5"
                        style={{ color: interest.color }}
                      />
                    </div>
                    <span className="text-[#f8fafc]">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 grid grid-cols-3 gap-4">
              {[
                { value: '50+', label: 'Projects' },
                { value: '6+', label: 'Years Exp' },
                { value: '2K+', label: 'Commits' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-[#1e293b]/50 to-[#1e293b]/30 border border-[#38bdf8]/20"
                >
                  <div className="text-2xl text-[#38bdf8] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#94a3b8]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
