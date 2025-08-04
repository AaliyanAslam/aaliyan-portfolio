'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes , FaDatabase  } from 'react-icons/fa';
import { HiCode, HiOutlineDesktopComputer, HiOutlineLightBulb } from 'react-icons/hi';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

useEffect(() => {
 console.log("Menu state changed:", isMenuOpen);
 
}, [isMenuOpen]);


  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-[0%] z-50"
        style={{ scaleX }}
      />

      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full z-40 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white font-bold text-xl font-heading"
              >
                Aaliyan Aslam
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink href="#home">Home</NavLink>
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#projects">Projects</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
                </div>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-2"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/30 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(true)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(true)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(true)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(true)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
                Frontend Developer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Crafting beautiful and responsive web experiences with modern technologies
              </p>
              <div className="flex justify-center space-x-6">
                <SocialLink href="https://github.com/AaliyanAslam" icon={<FaGithub />} />
                <SocialLink href="https://www.linkedin.com/in/aaliyan-muhammad-aslam-884664374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<FaLinkedin />} />
                <SocialLink href="mailto:aaliyanaslam22@gmail.com" icon={<FaEnvelope />} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className='flex items-center flex-col justify-center'>
                <h2 className="text-4xl font-bold text-white mb-6 font-heading text-center">About Me</h2>
                <p className="text-lg text-gray-300 mb-6">
                  I&apos;m a passionate frontend developer with expertise in creating
                  modern web applications. I specialize in React, Next.js, and
                  responsive design.
                </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg flex justify-center items-center hover:bg-blue-700 transition-colors"
                  >
                  <a href='AaliyanNewCv.pdf' download> Download CV</a>
                  
                  </motion.button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard
                  icon={<HiCode />}
                  title="Frontend Development"
                  skills={['React', 'Next.js', 'TypeScript']}
                />
                <SkillCard
                  icon={<HiOutlineDesktopComputer />}
                  title="UI/UX Design"
                  skills={['Tailwind CSS', 'Framer Motion', 'Responsive Design']}
                />
                <SkillCard
                  icon={<HiOutlineLightBulb />}
                  title="Best Practices"
                  skills={['Clean Code', 'Performance', 'SEO']}
                />
                <SkillCard
  icon={<FaDatabase />} // You can import this icon from 'react-icons/hi'
  title="Backend Development"
  skills={['Node.js', 'Express', 'MongoDB']}
/>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center font-heading">
             Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           
              <ProjectCard
                title="( Chat App )"
                description="Responsive Chatting platform with dynamic features ( AUTH ) System using Redux ( RTK )"
                tags={['React', 'Redux', 'Firebase' , 'tailwind CSS' , 'Daysi UI']}
                link="https://chatupapk.netlify.app/"
              />
              <ProjectCard
                title="( E-commerce Cart System )"
                description="Interactive UI/UX with real-time updates in cart with Redux ( RTK )"
                tags={['React', 'API integration', 'Tailwind CSS' , 'Framer Motion' , 'Daysi UI']}
                link="https://hypercart.vercel.app/"
              />
                 <ProjectCard
                title="( Noon.com Clone )"
                description="A modern web application built with React and Tailwind CSS"
                tags={['React','Tailwind CSS']}
                link="https://noon-com-clone.vercel.app"
                
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6 font-heading">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                I&apos;m always open to new opportunities and collaborations. Let&apos;s create something amazing together!
              </p>
              <motion.a
               href="mailto:aaliyanaslam22@gmail.com"

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Say Hello 👋
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white text-3xl transition-colors"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

const SkillCard = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
  >
    <div className="text-3xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-4 font-heading">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-300 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="block p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-colors hover:border-blue-500/50"
  >
    <h3 className="text-xl font-semibold text-white mb-3 font-heading">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.a>
);
