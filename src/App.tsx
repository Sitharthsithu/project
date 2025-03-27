import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, GraduationCap, Code, Database, Palette } from 'lucide-react';
import NeuralBackground from './components/NeuralBackground';
import AnimatedBox from './components/AnimatedBox';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const projects = [
    {
      title: "MVIT Weeb",
      description: "A dynamic anime streaming platform built with React and Node.js. Features include user authentication, watchlist management, and real-time updates.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using stable diffusion models. Users can create unique artwork from text descriptions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "TensorFlow", "Flask"],
      link: "#"
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart home devices. Features real-time data visualization and automated routines.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "IoT", "GraphQL"],
      link: "#"
    },
    {
      title: "ML Weather Predictor",
      description: "Machine learning model that predicts weather patterns using historical data and neural networks for accurate forecasting.",
      image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "TensorFlow", "pandas"],
      link: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-white transition-colors ${activeSection === 'home' ? 'text-blue-400' : 'hover:text-blue-400'}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-white transition-colors ${activeSection === 'about' ? 'text-blue-400' : 'hover:text-blue-400'}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`text-white transition-colors ${activeSection === 'projects' ? 'text-blue-400' : 'hover:text-blue-400'}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className={`text-white transition-colors ${activeSection === 'education' ? 'text-blue-400' : 'hover:text-blue-400'}`}
              >
                Education
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-800/30 rounded-xl p-8 shadow-xl border border-gray-700/50">
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
                Strong foundation in Python, Flask.
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
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-800/30 rounded-xl p-8 shadow-xl border border-gray-700/50">
          <div className="flex items-center mb-12">
            <Briefcase className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedBox key={index} delay={index * 0.1}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/20 rounded text-sm">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-400 hover:text-blue-300 flex items-center">
                    View <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-800/30 rounded-xl p-8 shadow-xl border border-gray-700/50">
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
              <p className="text-blue-400 mb-2">Fita Academy</p>
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