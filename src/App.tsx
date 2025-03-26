import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, GraduationCap, Code, Database, Palette } from 'lucide-react';
import NeuralBackground from './components/NeuralBackground';
import AnimatedBox from './components/AnimatedBox';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <NeuralBackground />
        <div className="relative z-10 text-center px-4">
          <img 
            src="/sitharth.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-4">Sitharth S</h1>
          <p className="text-xl text-blue-400 mb-6">ML Developer</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <User className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedBox delay={0.1}>
              <Code className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-300">
                Expertise in React, TypeScript, and modern CSS frameworks for building responsive UIs.
              </p>
            </AnimatedBox>
            <AnimatedBox delay={0.2}>
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-300">
                Strong foundation in Python,Flask.
              </p>
            </AnimatedBox>
            <AnimatedBox delay={0.3}>
              <Palette className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-300">
                Python.
              </p>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project, index) => (
              <AnimatedBox key={project} delay={index * 0.1}>
                <img 
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Mvit Weeb {project}</h3>
                <p className="text-gray-400 mb-4">
                  A brief description of the project and the technologies used in its development.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Node.js</span>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    View <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <GraduationCap className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <AnimatedBox delay={0.1}>
              <h3 className="text-xl font-bold mb-2">Bachelor of Technology</h3>
              <p className="text-blue-400 mb-2">Manakula Vinayagar Institute Of Technology</p>
              <p className="text-gray-400">2022 - 2026</p>
            </AnimatedBox>
            <AnimatedBox delay={0.2}>
              <h3 className="text-xl font-bold mb-2">Python Level 1 & 2 Certification</h3>
              <p className="text-blue-400 mb-2">Fita Acedamy</p>
              <p className="text-gray-400">2025</p>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">© 2025 Sitharth. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;