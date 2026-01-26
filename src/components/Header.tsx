import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition">
          Nikitha Reddy
        </Link>
        <ul className="flex gap-10 text-gray-300">
          <li><Link href="#about" className="hover:text-white transition text-sm font-medium">About</Link></li>
          <li><Link href="#research" className="hover:text-white transition text-sm font-medium">Research</Link></li>
          <li><Link href="#projects" className="hover:text-white transition text-sm font-medium">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-white transition text-sm font-medium">Skills</Link></li>
          <li><Link href="#experience" className="hover:text-white transition text-sm font-medium">Experience</Link></li>
          <li><a href="https://www.linkedin.com/in/nikitharreddy/" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium">LinkedIn ↗</a></li>
        </ul>
      </nav>
    </header>
  );
}
