import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Heart, Terminal } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex.chen@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#38bdf8]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Terminal className="w-6 h-6 text-[#38bdf8]" />
            <span className="text-[#f8fafc] text-lg">{'<DevPortfolio />'}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-[#1e293b]/50 border border-[#38bdf8]/20 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-[#f8fafc]" />
              </motion.a>
            ))}
          </motion.div>

          {/* Terminal Style Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center font-mono text-sm"
          >
            <div className="text-[#94a3b8] mb-2">
              <span className="text-[#22c55e]">$</span> cat motivation.txt
            </div>
            <div className="flex items-center justify-center gap-2 text-[#f8fafc]">
              Built with
              <Heart className="w-4 h-4 text-[#38bdf8] fill-[#38bdf8]" />
              and lots of
              <span className="text-[#22c55e]">{'<code>'}</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-[#94a3b8] text-sm"
          >
            <p>© 2025 Alex Chen. All rights reserved.</p>
            <p className="mt-1">
              Designed & Developed with modern web technologies
            </p>
          </motion.div>

          {/* Tech Stack Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 text-xs text-[#94a3b8]"
          >
            {['React', 'TypeScript', 'Tailwind CSS', 'Motion'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-3 py-1 rounded-full bg-[#1e293b]/50 border border-[#38bdf8]/20"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#38bdf8]/5 to-transparent"></div>
      </div>
    </footer>
  );
}
