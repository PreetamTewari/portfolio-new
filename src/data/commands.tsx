import { Command } from '../types/terminal';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';
import { getWelcomeMessage } from '../utils/asciiArt';
import { getTechStackArt } from '../utils/techStackArt';

export const commands: Command[] = [
  {
    name: 'help',
    description: 'List all available commands',
    execute: () => (
      <div className="space-y-2">
        <p className="font-bold">Available Commands:</p>
        {commands.map((cmd) => (
          <div key={cmd.name} className="ml-4">
            <span className="font-bold">{cmd.name}</span> - {cmd.description}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'about',
    description: 'Display information about me',
    execute: () => (
      <div className="space-y-2">
        <p>Hi! I'm Preetam, a passionate software developer.</p>
        <p>I love to learn new things and experiment with new technologies.</p>
        <p>I have over 6 years of experience and have been involved in developing and maintaing software applications</p>
      </div>
    ),
  },
  {
    name: 'whoami',
    description: 'Display current user information',
    execute: () => 'Preetam Tewari - Software Developer',
  },
  {
    name: 'ls',
    description: 'List portfolio sections',
    execute: () => (
      <div className="space-y-1">
        <div>/users/preetamtewari/portfolio</div>
      </div>
    ),
  },
  {
    name: 'clear',
    description: 'Clear terminal history',
    execute: () => '',
  },
  {
    name: 'welcome',
    description: 'Display welcome message',
    execute: () => getWelcomeMessage(),
  },
  {
    name: 'theme',
    description: 'Change terminal theme (usage: theme <name>)',
    execute: () => 'Available themes: ubuntu, gruvbox, nord, catppuccin, batman',
  },
  {
    name: 'education',
    description: 'Display my education',
    execute: () => (
      <div>
        <div>
          <p className="font-bold">Master of Science in Computer Networks</p>
          <p className="ml-4">2014 - 2016</p>
          <p className="ml-4">University of Illinois at Chicago</p>
          <p className='ml-4'>Chicago, IL</p>
          <p className='ml-4'>GPA: 3.07 / 4.0</p>
        </div>
        <div>
          <p className="font-bold">Bachelor of Engineering in Electrical Engineering</p>
          <p className="ml-4">2009 - 2013</p>
          <p className="ml-4">BVB College of Engineering and Technology</p>
          <p className='ml-4'>Hubballi</p>
          <p className='ml-4'>GPA: 8.77 / 10.0</p>
        </div>
      </div>
    ),
  },
  {
    name: 'techstack',
    description: 'Display my technical skills',
    execute: () => getTechStackArt(),
  },
  {
    name: 'experience',
    description: 'Show my work experience',
    execute: () => (
      <div className="space-y-3">
        <div>
          <p className="font-bold">Software Engineer @ Nagravision</p>
          <p className="ml-4">2024 - Present</p>
          <p className="ml-4">• Working on a building the Asset Tracker platform from the ground up</p>
          <p className="ml-4">• Worked on a java backend to handle user registration, manage token generation, authentication, handling of the device responses and push FOTA updates to the devices</p>
          <p className="ml-4">• Worked on a UI Admin Tool to handle users, device registration and managing FOTA campaigns</p>
          <p className="ml-4">• Built docker images for the mulitple components and deployed them on AWS ECS</p>
          <p className="ml-4">• Mentored junior engineers</p>
        </div>
        <div>
          <p className="font-bold">Software Engineer @ Juniper Networks</p>
          <p className="ml-4">2018 - 2022</p>
          <p className="ml-4">• Built scalable UI SaaS tool for the product offerings of Juniper for consumers by integrating internal CLI tools which led to reduction of testing time of over 40%</p>
          <p className="ml-4">• Integrated Mist AI API endpoints with the SaaS tool to automate event correlation, root cause identification and anomaly detection</p>
          <p className="ml-4">• Used python as a scripting language to setup automations to provision Linux VM instances on K8 pods, monitor the status and update a grafana dashboard in realtime</p>
          <p className="ml-4">• Wrote resuable unit test documents to ensure quality control and detect bugs</p>
        </div>
        <div>
          <p className="font-bold">Product Engineer @ INSZoom.Inc</p>
          <p className="ml-4">2017 - 2017</p>
          <p className="ml-4">• Analyzed requirements and designed software solutions</p>
          <p className="ml-4">• Implemented MVC architecture on .NET framework</p>
          <p className="ml-4">• Isolated, recreted and provided fixes for bugs reported in the prod environment</p>
          <p className="ml-4">• Participated in code reviews</p>
        </div>
        <div>
          <p className="font-bold">Assistant Software Engineer @ KPIT Technologies</p>
          <p className="ml-4">2013 - 2014</p>
          <p className="ml-4">• Participated in requirement gathering from client and update the existing modules based on client request</p>
          <p className="ml-4">• Contributed to design and development of client and servicer database application</p>
          <p className="ml-4">• Tested and validated the application on different testing environments and deployed the web application</p>
        </div>
      </div>
    ),
  },
  {
    name: 'contact',
    description: 'Display contact information',
    execute: () => (
      <div className="space-y-3">
        <p className="font-bold">Let's Connect!</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:tewaripreetam@gmail.com" className="hover:underline">
              tewaripreetam@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            <a href="https://github.com/preetamtewari" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/preetamtewari
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <a href="https://linkedin.com/in/preetamprakashtewari" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/preetamprakashtewari
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <Globe className="w-5 h-5" />
              <a href="https://portfolio-preetamtewari.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                https://portfolio-preetamtewari.vercel.app/
              </a>
          </div>
        </div>
        <p className="text-sm opacity-80 mt-2">Feel free to reach out or just to say hi!</p>
      </div>
    ),
  },
  {
    name: 'resume',
    description: 'Download my resume',
    execute: () => (
      <div className="flex items-center gap-2">
        <a
          href="/PREETAM_RESUME.pdf"
          download="Preetam_Tewari_Resume.pdf"
          className="flex items-center gap-1 hover:underline"
        >
          <span>Download Resume</span>
        </a>
      </div>
    ),
  }
];