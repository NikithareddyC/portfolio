import Link from 'next/link';

export default function Hero() {
  return (
    <section id="about" className="pt-40 pb-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Data Scientist <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">& ML Engineer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Transforming complex data into intelligent solutions. Currently at <span className="font-bold text-white">Morgan Stanley</span>. 
            Passionate about LLMs, AI systems, and building products that matter.
          </p>
          <div className="flex gap-6">
            <Link 
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold transition transform hover:scale-105"
            >
              Explore My Work
            </Link>
            <a
              href="/documents/Nikitha_Reddy_Resume.pdf"
              download="Nikitha_Reddy_Resume.pdf"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
}
