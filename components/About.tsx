import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Code2, Rocket, Heart, Coffee, FileDown, FileText } from 'lucide-react';

// Static asset URLs bundled by Vite (no need to move files to public/)
const resumeSWE = new URL('../assets/Arnav_Nagzirkar_SWE_Resume.pdf', import.meta.url).href;
const resumeML = new URL('../assets/Arnav_Nagzirkar_ML_AI_Resume.pdf', import.meta.url).href;
const resumePM = new URL('../assets/Arnav_Nagzirkar_PM_Resume.pdf', import.meta.url).href;
const awsCert = new URL('../assets/AWS Certified Cloud Practitioner certificate.pdf', import.meta.url).href;
const kavodaxRef = new URL('../assets/Kavodax Reference Letter - Arnav Nagzirkar.pdf', import.meta.url).href;

// Optional headshot: supports either at repo root (../IMG_5860.png) or assets folder
const headshotCandidates = import.meta.glob(
  ['../IMG_5860.png', '../assets/IMG_5860.png'],
  { eager: true, as: 'url' }
) as Record<string, string>;
const headshot = headshotCandidates['../IMG_5860.png'] ?? headshotCandidates['../assets/IMG_5860.png'];

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
            Honours BSc student at the University of Toronto focusing on AI and blockchain. 4× startup intern, currently building firmware for Space Systems.
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
                  src={headshot ?? 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop'}
                  alt="Arnav Nagzirkar"
                />
                <AvatarFallback className="bg-gradient-to-br from-[#38bdf8] to-[#22c55e] text-[#0f172a] text-6xl">
                  AN
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
                Hey there! I'm <span className="text-[#38bdf8]">Arnav Nagzirkar</span>, studying Honours BSc in Computer Science (with Statistics and Economics) at the University of Toronto. I build reliable, scalable solutions across AI, blockchain, and cloud.
              </p>
              <p>
                Recently, I have been a Firmware Developer with the University of Toronto Aerospace Team (Space Systems) and a Software Engineering Intern at Kavodax, working on a blockchain-based cross-border payment platform. I also bring experience as a Private Tutor and student leader.
              </p>
              <p>
                I care about teamwork, clarity, and shipping high-quality systems. If you're hiring for Summer 2026 internships, I'd love to connect.
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

            {/* Documents */}
            <div className="pt-8">
              <h3 className="text-[#f8fafc] mb-4">Resume & Documents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'SWE Resume (PDF)', href: resumeSWE },
                  { label: 'ML/AI Resume (PDF)', href: resumeML },
                  { label: 'PM Resume (PDF)', href: resumePM },
                  { label: 'AWS Cloud Practitioner (PDF)', href: awsCert },
                  { label: 'Kavodax Reference Letter (PDF)', href: kavodaxRef },
                ].map((doc, index) => (
                  <motion.a
                    key={doc.label}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#1e293b]/50 border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/5 transition-all"
                  >
                    <FileDown className="w-4 h-4 text-[#38bdf8]" />
                    <span className="text-[#f8fafc] text-sm">{doc.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
