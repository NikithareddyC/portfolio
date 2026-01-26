import { FaPython, FaDatabase, FaCube, FaCloud, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
    icon: <FaPython className="text-cyan-400" size={24} />,
  },
  {
    category: 'ML & AI',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'LLMs'],
    icon: <FaCube className="text-cyan-400" size={24} />,
  },
  {
    category: 'Data Science',
    skills: ['PySpark', 'Statistical Analysis', 'Feature Engineering', 'MLflow', 'Pandas'],
    icon: <FaCube className="text-cyan-400" size={24} />,
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Git'],
    icon: <FaCloud className="text-cyan-400" size={24} />,
  },
  {
    category: 'Web & APIs',
    skills: ['FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    icon: <FaCode className="text-cyan-400" size={24} />,
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'DynamoDB', 'Redis'],
    icon: <FaDatabase className="text-cyan-400" size={24} />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-gray-950">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold mb-4 text-lg">Toolbox</p>
          <h2 className="text-6xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition group">
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
