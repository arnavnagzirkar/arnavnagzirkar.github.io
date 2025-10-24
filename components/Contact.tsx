import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, CheckCircle2, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@example.com',
      href: 'mailto:alex.chen@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
            Get In Touch
            <span className="text-[#22c55e]">{' />'}</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-[#f8fafc] mb-4">Let's talk about your next project</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                I'm always open to discussing new opportunities, innovative ideas, or partnerships. 
                Whether you need help with AI development, full-stack engineering, or technical 
                consulting, feel free to reach out.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-[#1e293b]/50 border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-[#38bdf8]/20 to-[#22c55e]/20 border border-[#38bdf8]/30 group-hover:shadow-lg group-hover:shadow-[#38bdf8]/20 transition-all">
                        <info.icon className="w-5 h-5 text-[#38bdf8]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#94a3b8]">{info.label}</div>
                        <div className="text-[#f8fafc]">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1e293b]/50 border border-[#38bdf8]/20">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-[#38bdf8]/20 to-[#22c55e]/20 border border-[#38bdf8]/30">
                        <info.icon className="w-5 h-5 text-[#38bdf8]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#94a3b8]">{info.label}</div>
                        <div className="text-[#f8fafc]">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Terminal Style Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-[#0f172a]/80 border border-[#22c55e]/30 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#22c55e]" />
                <span className="text-[#22c55e]">~/collaboration</span>
              </div>
              <div className="text-[#94a3b8]">
                <span className="text-[#22c55e]">$</span> ./start-project.sh
              </div>
              <div className="text-[#38bdf8] mt-2">
                → Ready to build something amazing together!
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#f8fafc]">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1e293b]/50 border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 text-[#f8fafc] placeholder:text-[#94a3b8]"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#f8fafc]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1e293b]/50 border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 text-[#f8fafc] placeholder:text-[#94a3b8]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#f8fafc]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-[#1e293b]/50 border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 text-[#f8fafc] placeholder:text-[#94a3b8] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-[#38bdf8] to-[#22c55e] hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 text-[#0f172a] py-6 disabled:opacity-50"
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>

            {/* Success Animation */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mt-6 p-4 rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/30 text-center"
                >
                  <div className="text-[#22c55e] font-mono">
                    {'>'} Message delivered successfully!
                  </div>
                  <div className="text-[#94a3b8] text-sm mt-1">
                    I'll get back to you soon.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
