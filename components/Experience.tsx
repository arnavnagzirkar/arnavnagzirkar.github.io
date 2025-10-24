import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Artificial Intelligence & Machine Learning Intern',
    company: 'VJDS International Inc.',
    period: 'Oct 2025 – Present',
    achievements: [
      'Contributing to applied AI/ML initiatives and model development.',
      'Exploring practical AI capabilities and ethics in real-world use cases.',
    ],
  },
  {
    title: 'Firmware Developer – Space Systems',
    company: 'University of Toronto Aerospace Team',
    period: 'Sep 2025 – Present',
    achievements: [
      'Developing firmware for space systems as part of a multidisciplinary team.',
      'Focusing on reliable, maintainable code and embedded development practices.',
    ],
  },
  {
    title: 'Software Engineering Intern (Blockchain)',
    company: 'Kavodax',
    period: 'Jun 2025 – Aug 2025',
    achievements: [
      'Helped build a blockchain-based cross-border payment platform.',
      'Led a small intern team and designed modular onboarding and transaction flows.',
      'Integrated third-party services and supported cloud-based deployment.',
    ],
  },
  {
    title: 'Private Tutor: Programming & Mathematics',
    company: 'Self-employed',
    period: 'Sep 2023 – Jun 2025',
    achievements: [
      'Tutored Java and Python for high-school and university students.',
      'Prepared exercises and reviews for OOP, recursion, and core math topics.',
    ],
  },
  {
    title: 'UTMSU Board of Directors – First Year Representative',
    company: 'University of Toronto Mississauga Students’ Union',
    period: 'Sep 2022 – Aug 2023',
    achievements: [
      'Represented 15,000+ students and supported campus events and initiatives.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            Experience
            <span className="text-[#22c55e]">{' />'}</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Building impactful solutions across leading tech companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38bdf8]/50 via-[#22c55e]/50 to-[#38bdf8]/50 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#22c55e] border-4 border-[#0f172a] z-10 flex-shrink-0">
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 rounded-full bg-[#38bdf8]"
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-xl bg-[#1e293b]/50 border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 hover:shadow-xl hover:shadow-[#38bdf8]/10 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#38bdf8]/20 to-[#22c55e]/20 border border-[#38bdf8]/30">
                          <Briefcase className="w-5 h-5 text-[#38bdf8]" />
                        </div>
                        <div>
                          <h3 className="text-lg text-[#f8fafc]">
                            {exp.title}
                          </h3>
                          <p className="text-[#38bdf8]">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-[#94a3b8] text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-start gap-2 text-[#94a3b8] text-sm"
                        >
                          <span className="text-[#22c55e] mt-1.5 flex-shrink-0">▹</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38bdf8]/20 to-[#22c55e]/20 rounded-xl blur"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 md:left-1/2 bottom-0 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#22c55e] blur-md"
          />
        </div>
      </div>
    </section>
  );
}
