import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, Code2, Brain, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Creating reliable, scalable solutions in AI, blockchain, and cloud.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
        </motion.div>
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        >
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 opacity-20"
        >
          <Code2 className="w-16 h-16 text-[#38bdf8]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-20 opacity-20"
        >
          <Brain className="w-20 h-20 text-[#22c55e]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-40 opacity-20"
        >
          <Sparkles className="w-12 h-12 text-[#38bdf8]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#38bdf8] flex items-center justify-center gap-2"
          >
            <span className="text-[#22c55e]">{'>'}</span>
            <span>Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#f8fafc]"
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl mb-4">Arnav Nagzirkar</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-[#94a3b8] flex items-center justify-center flex-wrap gap-2"
          >
            <span>Software Engineer</span>
            <span className="text-[#38bdf8]">•</span>
            <span>AI, Blockchain & Cloud</span>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="min-h-[80px] flex items-center justify-center"
          >
            <p className="text-lg sm:text-xl text-[#f8fafc] max-w-3xl">
              {displayedText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-[#38bdf8] ml-1"
                />
              )}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToPortfolio}
              className="bg-gradient-to-r from-[#38bdf8] to-[#22c55e] hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 text-[#0f172a] px-8 py-6 rounded-lg group"
            >
              <span>Explore Portfolio</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </Button>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/arnavnagzirkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#f8fafc]/5 border border-[#38bdf8]/20 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all"
              >
                <Github className="w-5 h-5 text-[#f8fafc]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/arnav-nagzirkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#f8fafc]/5 border border-[#38bdf8]/20 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all"
              >
                <Linkedin className="w-5 h-5 text-[#f8fafc]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="p-3 rounded-lg bg-[#f8fafc]/5 border border-[#38bdf8]/20 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all"
              >
                <Mail className="w-5 h-5 text-[#f8fafc]" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-[#38bdf8]" />
        </motion.div>
      </div>
    </section>
  );
}
