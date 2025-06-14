import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MoodMusic – Emotion‑Aware Music App",
    description:
      "Detects facial expressions and recommends mood-matching tracks. Achieved 89% accuracy. Published in IEEE.",
    image: "/projects/moodmusic.png",
    tags: ["Android", "PyTorch", "CNN"],
    demoUrl: "#", // Replace with actual demo link
    githubUrl: "#", // Replace with actual GitHub link
  },
  {
    id: 2,
    title: "Adversarial ML Toolkit",
    description:
      "Web platform to run FGSM, JSMA, and Substitute-Model attacks with robustness metrics. Built during DRDO internship.",
    image: "/projects/adversarial.png",
    tags: ["Flask", "Python", "DRDO"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
       title: "Lok Sabha 2024 Election Chatbot",
    description:
      "RAG pipeline converts natural language queries to SQL for real-time election data access via Streamlit UI.",
    image: "/projects/electionbot.png",
    tags: ["LangChain", "OpenAI", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
  id: 4,
  title: "AI-Enhanced Website for Ras Tech Company",
  description:
    "Designed and deployed a responsive website with Flask and MongoDB. Integrated a lead capture system, built RASBot (intent-based AI chatbot), and created an interactive CAPTCHA with real-time animations.",
  image: "/projects/website.png",
  tags: ["Flask", "MongoDB", "React", "AI Chatbot", "Framer Motion"],
  demoUrl: "#", // Replace with live link if hosted
  githubUrl: "#", // Replace with GitHub repo if public
}
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
  <a
    className="cosmic-button w-fit flex items-center mx-auto gap-2"
    target="_blank"
    href="https://www.linkedin.com/in/bhavy-chaudhary/"
  >
    Connect on LinkedIn <ArrowRight size={16} />
  </a>
</div>
      </div>
    </section>
  );
};