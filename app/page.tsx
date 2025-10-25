"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github, ExternalLink, Award, BookOpen } from "lucide-react"
import Atropos from "atropos"

export default function ResumePage() {
  const photoRef = useRef(null)
  const skillRefsMap = useRef({})
  const certRefsMap = useRef({})
  const achievementRefsMap = useRef({})
  const projectRefsMap = useRef({})
  const sectionRefsMap = useRef({})
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Track which sections are visible
      Object.entries(sectionRefsMap.current).forEach(([key, ref]) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0
          setVisibleSections((prev) => ({ ...prev, [key]: isVisible }))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (photoRef.current) {
      const photoAtropos = Atropos({
        el: photoRef.current,
        activeOffset: 40,
        rotateXMax: 15,
        rotateYMax: 15,
        shadowScale: 1.05,
      })
      return () => photoAtropos.destroy()
    }
  }, [])

  useEffect(() => {
    const atroposInstances = []
    Object.values(skillRefsMap.current).forEach((ref) => {
      if (ref) {
        const instance = Atropos({
          el: ref,
          activeOffset: 30,
          rotateXMax: 10,
          rotateYMax: 10,
          shadowScale: 1.02,
        })
        atroposInstances.push(instance)
      }
    })
    return () => atroposInstances.forEach((instance) => instance.destroy())
  }, [])

  useEffect(() => {
    const atroposInstances = []
    Object.values(certRefsMap.current).forEach((ref) => {
      if (ref) {
        const instance = Atropos({
          el: ref,
          activeOffset: 30,
          rotateXMax: 10,
          rotateYMax: 10,
          shadowScale: 1.02,
        })
        atroposInstances.push(instance)
      }
    })
    return () => atroposInstances.forEach((instance) => instance.destroy())
  }, [])

  useEffect(() => {
    const atroposInstances = []
    Object.values(achievementRefsMap.current).forEach((ref) => {
      if (ref) {
        const instance = Atropos({
          el: ref,
          activeOffset: 30,
          rotateXMax: 10,
          rotateYMax: 10,
          shadowScale: 1.02,
        })
        atroposInstances.push(instance)
      }
    })
    return () => atroposInstances.forEach((instance) => instance.destroy())
  }, [])

  useEffect(() => {
    const atroposInstances = []
    Object.values(projectRefsMap.current).forEach((ref) => {
      if (ref) {
        const instance = Atropos({
          el: ref,
          activeOffset: 25,
          rotateXMax: 8,
          rotateYMax: 8,
          shadowScale: 1.03,
        })
        atroposInstances.push(instance)
      }
    })
    return () => atroposInstances.forEach((instance) => instance.destroy())
  }, [])

  const skillsData = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["Java", "JavaScript (ES6+)", "Python", "C"],
      color: "from-blue-500/20 to-blue-600/20",
      symbols: ["☕", "⚡", "🐍", "⚙️"],
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
      color: "from-pink-500/20 to-rose-600/20",
      symbols: ["🏗️", "🎨", "🌊", "⚛️"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
      color: "from-green-500/20 to-emerald-600/20",
      symbols: ["🟢", "🚀", "🔌", "🔐"],
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL"],
      color: "from-yellow-500/20 to-orange-600/20",
      symbols: ["🍃", "🗂️"],
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman", "VS Code", "GitHub Actions", "CI/CD", "Vercel"],
      color: "from-purple-500/20 to-indigo-600/20",
      symbols: ["📦", "🐙", "📮", "💻", "⚡", "🔄", "🚀"],
    },
    {
      category: "Testing",
      icon: "🧪",
      skills: ["Manual Testing", "Cypress", "Playwright"],
      color: "from-cyan-500/20 to-blue-600/20",
      symbols: ["✅", "🌳", "🎭"],
    },
  ]

  const  projectsData   = [
  {
    title: "FoodShare (RefedConnect)",
    subtitle: "Donation Management System",
    description:
      "A comprehensive food donation platform with multi-role dashboard system for Donors, NGOs, and Biogas Agents. Features secure authentication, real-time donation tracking, and location-based routing for efficient pickup coordination.",
    features: ["Multi-role dashboard", "10+ REST APIs", "Real-time tracking", "Location-based routing"],
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/cse22148/Final_RefedConnect",
      live: "https://final-refed-connect.vercel.app/"
    },
    symbol: "🍽️",
  },
  {
    title: "Team Pulse Dashboard",
    subtitle: "Productivity Tool",
    description:
      "Built a React-based dashboard for tracking team productivity with Power BI integration. Implemented role-based access and real-time data visualization for better decision-making.",
    features: ["Role-based access", "Real-time visualization", "Data analytics"],
    tech: ["React.js", "Power BI", "JavaScript"],
    links: {
      github: "https://github.com/cse22148/appversal_dashboard",
      live: "https://appversal-assignmentbychanchal.vercel.app/"
    },
    symbol: "📊",
  },
  {
    title: "Simon Says Game",
    subtitle: "Interactive Memory Game",
    description:
      "Developed a browser-based memory game using HTML, CSS, and JavaScript. Enhanced logic flow, debugging, and interactive UI for improved gameplay.",
    features: ["Interactive UI", "Logic flow", "Debugging"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/cse22148/Simon-Says-Memory-Game",
    },
    symbol: "🎮",
  },
]

  const certificationsData = [
    {
      title: "CCNA (Routing & Switching)",
      issuer: "Cisco",
      desc: "Comprehensive networking certification covering routing protocols and network infrastructure.",
    },
    {
      title: "Introduction to CyberSecurity",
      issuer: "Cisco Networking Academy",
      desc: "Foundational knowledge in cybersecurity principles and best practices.",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco",
      desc: "Core Python programming concepts and practical application development.",
    },
  ]

  const achievementsData = [
    {
      title: "Flipkart Grid 6.0 (2024)",
      status: "Qualified",
      desc: "Cleared initial rounds, solved DSA challenges, and worked on backend services development.",
      icon: "🏆",
    },
    {
      title: "Hack With India (2025)",
      status: "Completed",
      desc: "Developed complete APIs and database integration for MVP within 24-hour timeframe.",
      icon: "⚡",
    },
    {
      title: "EY Hackathon (2024)",
      status: "Pre-Semifinalist",
      desc: "Achieved pre-semifinalist status using full-stack development tools in Agile team environment.",
      icon: "🎯",
    },
    {
      title: "DSA Proficiency",
      status: "200+ Problems",
      desc: "Solved 200+ problems on LeetCode with strong understanding of algorithmic complexity.",
      icon: "💡",
    },
  ]

  const statsData = [
    { label: "CGPA", value: "8.5/10", icon: "📚" },
    { label: "DSA Problems", value: "200+", icon: "🧩" },
    { label: "Focus", value: "Full Stack", icon: "🚀" },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Chanchal Teotia</h1>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("achievements")} className="text-sm hover:text-primary transition">
              Achievements
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition">
              Contact
            </button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact details and intro */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 text-foreground">Chanchal Teotia</h1>
              <p className="text-2xl text-primary font-semibold mb-6">Full Stack Developer</p>

              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Passionate about building scalable web applications with modern technologies. Specializing in React,
                Node.js, and cloud deployment with a focus on performance optimization and clean code.
              </p>

              {/* Contact details on left */}
              <div className="space-y-4 mb-8">
                <a href="tel:+917057733606" className="flex items-center gap-3 hover:text-primary transition group">
                  <Phone size={20} className="text-primary group-hover:scale-110 transition" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <span className="font-semibold">+91-70577-33606</span>
                  </div>
                </a>
                <a
                  href="mailto:chanchalteotia390@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition group"
                >
                  <Mail size={20} className="text-primary group-hover:scale-110 transition" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <span className="font-semibold">chanchalteotia390@gmail.com</span>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/chanchal-teotia-9a7848287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition group"
                >
                  <Linkedin size={20} className="text-primary group-hover:scale-110 transition" />
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <span className="font-semibold">Connect with me</span>
                  </div>
                </a>
                <a
                  href="https://github.com/cse22148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition group"
                >
                  <Github size={20} className="text-primary group-hover:scale-110 transition" />
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <span className="font-semibold">View my work</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Photo with parallax effect */}
            <div
              className="flex justify-center animate-fade-in"
              style={{
                animationDelay: "0.1s",
                transform: `translateY(${Math.max(-50, scrollY * -0.5)}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div ref={photoRef} className="atropos my-atropos w-80 h-96">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/50 transition-shadow duration-300">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%2008.58.45-wGENuhYXPAm3gpjQ6bN1ehBbhJlbzP.jpeg"
                          alt="Chanchal Teotia"
                          className="w-full h-full object-cover"
                          data-atropos-offset="5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16"
        ref={(el) => {
          if (el) sectionRefsMap.current["about"] = el
        }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["about"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["about"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="w-1 h-10 bg-primary rounded-full"></span>
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-card border-2 border-primary/20 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              style={{
                opacity: visibleSections["about"] ? 1 : 0,
                transform: `translateY(${visibleSections["about"] ? 0 : 30}px)`,
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <p className="text-4xl mb-2">{stat.icon}</p>
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div
          className="bg-card border border-primary/20 rounded-lg p-8"
          style={{
            opacity: visibleSections["about"] ? 1 : 0,
            transform: `translateY(${visibleSections["about"] ? 0 : 30}px)`,
            transition: "all 0.6s ease-out 0.2s",
          }}
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm an enthusiastic Full Stack Developer with strong backend and frontend skills, currently pursuing B.Tech
            in Computer Science Engineering at GL Bajaj Institute of Technology and Management with a CGPA of 8.5/10.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Passionate about performance optimization, automation, and CI/CD pipelines. I have proven ability to build
            scalable systems and clean APIs, with experience in Agile methodologies and the complete Software
            Development Life Cycle.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16"
        ref={(el) => {
          if (el) sectionRefsMap.current["skills"] = el
        }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["skills"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["skills"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="w-1 h-10 bg-primary rounded-full"></span>
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) skillRefsMap.current[index] = el
              }}
              className="atropos skill-card animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: visibleSections["skills"] ? 1 : 0,
                transform: `translateY(${visibleSections["skills"] ? 0 : 30}px)`,
                transition: `all 0.6s ease-out ${index * 0.08}s`,
              }}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div
                    className={`atropos-inner bg-gradient-to-br ${skillGroup.color} border-2 border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300 h-full backdrop-blur-sm hover:shadow-lg hover:shadow-primary/30`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{skillGroup.icon}</span>
                      <h3 className="font-bold text-lg text-foreground">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-1"
                        >
                          <span>{skillGroup.symbols[idx]}</span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16"
        ref={(el) => {
          if (el) sectionRefsMap.current["projects"] = el
        }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["projects"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["projects"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="w-1 h-10 bg-primary rounded-full"></span>
          Featured Projects
        </h2>
        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) projectRefsMap.current[index] = el
              }}
              className="atropos animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: visibleSections["projects"] ? 1 : 0,
                transform: `translateY(${visibleSections["projects"] ? 0 : 40}px)`,
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div
                    className="atropos-inner bg-card border border-primary/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
                    style={{
                      transform: `translateY(${Math.max(0, scrollY - 1500 + index * 200) * 0.08}px)`,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                            {project.symbol}
                          </span>
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2 font-semibold">Key Features:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="group/item">
                            <span className="text-accent group-hover/item:text-primary transition-colors">•</span>{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2 font-semibold">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-accent/20 hover:text-accent transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="text-primary text-sm hover:text-accent hover:underline flex items-center gap-1 hover:scale-105 transition"
                        >
                          GitHub <ExternalLink size={14} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          className="text-primary text-sm hover:text-accent hover:underline flex items-center gap-1 hover:scale-105 transition"
                        >
                          Live <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="max-w-6xl mx-auto px-6 py-16"
        ref={(el) => {
          if (el) sectionRefsMap.current["education"] = el
        }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["education"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["education"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="w-1 h-10 bg-primary rounded-full"></span>
          Education
        </h2>
        <div className="space-y-4">
          <div
            className="bg-card border-l-4 border-primary pl-6 py-4 rounded-r-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            style={{
              opacity: visibleSections["education"] ? 1 : 0,
              transform: `translateX(${visibleSections["education"] ? 0 : -30}px)`,
              transition: "all 0.6s ease-out",
            }}
          >
            <h3 className="font-semibold text-lg text-foreground">B.Tech - Computer Science & Engineering</h3>
            <p className="text-primary font-medium">GL Bajaj Institute of Technology and Management, Greater Noida</p>
            <p className="text-sm text-muted-foreground">CGPA: 8.47/10</p>
          </div>
          <div
            className="bg-card border-l-4 border-primary pl-6 py-4 rounded-r-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            style={{
              opacity: visibleSections["education"] ? 1 : 0,
              transform: `translateX(${visibleSections["education"] ? 0 : -30}px)`,
              transition: "all 0.6s ease-out 0.1s",
            }}
          >
            <h3 className="font-semibold text-lg text-foreground">XII (CBSE)</h3>
            <p className="text-primary font-medium">Delhi City School, Bulandshahar</p>
            <p className="text-sm text-muted-foreground">90.5%</p>
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="max-w-6xl mx-auto px-6 py-16"
        ref={(el) => {
          if (el) sectionRefsMap.current["achievements"] = el
        }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["achievements"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["achievements"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="w-1 h-10 bg-primary rounded-full"></span>
          Experience & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) achievementRefsMap.current[index] = el
              }}
              className="atropos animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: visibleSections["achievements"] ? 1 : 0,
                transform: `translateY(${visibleSections["achievements"] ? 0 : 30}px)`,
                transition: `all 0.6s ease-out ${index * 0.08}s`,
              }}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <p className="text-2xl mb-2 animate-pulse">{achievement.icon}</p>
                    <p className="font-semibold text-lg text-foreground mb-2">{achievement.title}</p>
                    <p className="text-accent font-bold mb-2">{achievement.status}</p>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3
          className="text-2xl font-bold mb-6 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["achievements"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["achievements"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out 0.2s",
          }}
        >
          <Award size={24} />
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) certRefsMap.current[index] = el
              }}
              className="atropos animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: visibleSections["achievements"] ? 1 : 0,
                transform: `translateY(${visibleSections["achievements"] ? 0 : 30}px)`,
                transition: `all 0.6s ease-out ${0.2 + index * 0.08}s`,
              }}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center">
                    <BookOpen className="text-primary mx-auto mb-3" size={32} />
                    <p className="font-semibold text-foreground mb-1">{cert.title}</p>
                    <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-16"
        ref={(el) => {
          if (el) sectionRefsMap.current["contact"] = el
        }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-2"
          style={{
            opacity: visibleSections["contact"] ? 1 : 0.3,
            transform: `translateY(${visibleSections["contact"] ? 0 : 20}px)`,
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="w-1 h-10 bg-primary rounded-full"></span>
          Get in Touch
        </h2>
        <div
          className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-lg p-8 text-center"
          style={{
            opacity: visibleSections["contact"] ? 1 : 0,
            transform: `translateY(${visibleSections["contact"] ? 0 : 30}px)`,
            transition: "all 0.6s ease-out 0.1s",
          }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="tel:+917057733606"
              className="flex items-center justify-center gap-3 bg-card p-4 rounded-lg hover:border-primary border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Phone className="text-primary" size={24} />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-semibold">+91-70577-33606</p>
              </div>
            </a>
            <a
              href="mailto:chanchalteotia390@gmail.com"
              className="flex items-center justify-center gap-3 bg-card p-4 rounded-lg hover:border-primary border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="text-primary" size={24} />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-semibold">chanchalteotia390@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://linkedin.com/in/chanchal-teotia-9a7848287"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold hover:shadow-lg hover:shadow-primary/30"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/cse22148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold hover:shadow-lg hover:shadow-primary/30"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 bg-card/50 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 Chanchal Teotia. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground">Designed and developed with ❤️</p>
        </div>
      </footer>
    </div>
  )
}
