'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-gray-950">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4 text-lg">Get in Touch</p>
          <h2 className="text-6xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg">Have a project, question, or just want to chat? I'd love to hear from you.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
            <div className="space-y-6">
              <Link href="https://www.linkedin.com/in/nikitharreddy/" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition group">
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-cyan-500/20 transition">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-sm">@nikitharreddy</p>
                </div>
              </Link>
              <Link href="mailto:nikithareddy163@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition group">
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-cyan-500/20 transition">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm">nikithareddy163@gmail.com</p>
                </div>
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-cyan-400 text-center font-medium">✓ Thanks! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
