import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    role: 'Data Scientist',
    company: 'Morgan Stanley',
    duration: 'Mar 2025 - Present',
    description: 'Advanced machine learning solutions for financial data analysis and risk assessment.',
  },
  {
    role: 'Data Scientist',
    company: 'Target',
    duration: 'Previous',
    description: 'Predictive models for customer segmentation and inventory optimization with real-time analytics.',
  },
  {
    role: 'Associate Data Scientist',
    company: 'Accenture',
    duration: 'Previous',
    description: 'NLP solutions for enterprise clients. Production ML pipelines with Airflow and Spark.',
  },
  {
    role: 'Data Scientist Analyst',
    company: 'GMR',
    duration: 'Previous',
    description: 'Predictive maintenance models and automated reporting systems.',
  },
  {
    role: 'Teaching Assistant',
    company: 'Mercer University',
    duration: 'Previous',
    description: 'Advanced analytics and machine learning education. Student mentorship.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold mb-4 text-lg">Background</p>
          <h2 className="text-6xl font-bold text-white mb-2">Experience</h2>
          <p className="text-gray-400">6+ years in data science and machine learning</p>
        </div>
        
        <div className="space-y-6 mb-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition group">
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold text-sm mt-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-3">{exp.duration}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <FaGraduationCap className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <p className="text-lg font-semibold text-gray-300">Master of Science in Business Analytics</p>
              <p className="text-gray-400">Mercer University • GPA: 3.75/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
