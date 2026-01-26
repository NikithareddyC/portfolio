import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-400 text-sm">© {currentYear} Nikitha Reddy. Built with <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind</span>.</p>
          </div>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/nikitharreddy/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
              <FaLinkedin size={20} />
            </Link>
            <Link href="mailto:nikithareddy163@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
              <FaEnvelope size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
