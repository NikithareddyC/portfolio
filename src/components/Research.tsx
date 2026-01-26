import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

const research = [
  {
    title: 'Human-AI Collaboration: Building Trust in Intelligent Systems',
    description: 'Exploring best practices for human-AI collaboration, the importance of transparency in AI decision-making, and strategies for building user trust.',
    date: 'Published on LinkedIn',
    link: 'https://www.linkedin.com/in/nikitharreddy/',
    tags: ['AI Ethics', 'Human-AI', 'Trustworthy AI'],
  },
  {
    title: 'LLMs in Production: Challenges and Solutions',
    description: 'Deep dive into deploying large language models in production, including optimization techniques, cost management, and reliability.',
    date: 'Published on LinkedIn',
    link: 'https://www.linkedin.com/in/nikitharreddy/',
    tags: ['LLMs', 'MLOps', 'Production'],
  },
  {
    title: 'Fine-tuning vs Prompt Engineering: When and Why',
    description: 'Analysis of different approaches to customizing LLM behavior, comparing strategies for various use cases.',
    date: 'Published on LinkedIn',
    link: 'https://www.linkedin.com/in/nikitharreddy/',
    tags: ['LLMs', 'Prompt Eng', 'Fine-tuning'],
  },
  {
    title: 'Retrieval-Augmented Generation: Extending LLM Knowledge',
    description: 'Comprehensive guide to RAG systems, implementation strategies, and real-world applications in enterprise.',
    date: 'Published on LinkedIn',
    link: 'https://www.linkedin.com/in/nikitharreddy/',
    tags: ['RAG', 'LLMs', 'IR'],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-32 bg-gray-950">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold mb-4 text-lg">Research & Publications</p>
          <h2 className="text-6xl font-bold text-white mb-6">Exploring AI & LLMs</h2>
          <p className="text-gray-400 max-w-2xl text-lg">Sharing insights on the frontier of artificial intelligence, large language models, and intelligent systems</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {research.map((item, idx) => (
            <Link 
              key={idx}
              href={item.link}
              target="_blank"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 hover:bg-gray-900/50 transition group"
            >
              <div className="flex gap-4">
                <FaBook className="text-cyan-400 flex-shrink-0 mt-1 text-xl group-hover:scale-110 transition" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-xl p-8 text-center">
          <p className="text-gray-300 mb-6 text-lg">Follow for more insights on AI and machine learning</p>
          <Link 
            href="https://www.linkedin.com/in/nikitharreddy/" 
            target="_blank"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-bold transition"
          >
            Visit LinkedIn Profile ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
