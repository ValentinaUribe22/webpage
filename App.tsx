import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Download, 
  Briefcase, 
  Code2, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS } from './constants';
import SkillsChart from './components/SkillsChart';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl text-white tracking-tighter">
              ALEX<span className="text-indigo-500">.DEV</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-900/30 rounded-full border border-indigo-700/50">
            Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">experiences that matter.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            {PERSONAL_INFO.title} based in {PERSONAL_INFO.location}. 
            Crafting performant, accessible, and beautiful web applications.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
            >
              View Work
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 rounded-full bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Contact Me
            </button>
          </div>
          
          <div className="mt-20 flex justify-center animate-bounce">
            <ChevronDown className="text-slate-600" />
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                About Me
              </h2>
              <div className="prose prose-invert text-slate-400 text-lg leading-relaxed">
                <p className="mb-4">{PERSONAL_INFO.about}</p>
                <p>
                  When I'm not coding, you can find me exploring new coffee shops in San Francisco, 
                  contributing to open source, or tinkering with new IoT devices.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href={`https://${PERSONAL_INFO.socials.github}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={`https://${PERSONAL_INFO.socials.linkedin}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={`https://${PERSONAL_INFO.socials.twitter}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-2xl"></div>
              <SkillsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
          
          <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-slate-950"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-sm text-indigo-400 font-mono bg-indigo-950/50 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-lg text-slate-300 font-medium mb-3 flex items-center gap-2">
                  <Briefcase size={16} className="text-slate-500" />
                  {job.company}
                </div>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A selection of projects that showcase my technical depth and product design capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button className="px-4 py-2 bg-white text-slate-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                       View Case Study
                     </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-indigo-300 bg-indigo-950/50 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities.
            If you have a project that needs some creative injection, let's chat.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 rounded-xl text-white font-bold hover:bg-indigo-500 transition-all hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <button className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-xl text-white font-bold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-indigo-400" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-indigo-400" />
              Remote Friendly
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind & Gemini API</p>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;