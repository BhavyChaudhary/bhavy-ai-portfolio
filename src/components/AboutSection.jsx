import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ───────────────────── Left Column ───────────────────── */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Versatile AI/ML Engineer &amp; Full‑Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I’ve built scalable web apps, intelligent chatbots, and
              adversarial‑machine‑learning toolkits. Proficient in Python,
              JavaScript, React, Flask, MongoDB, SQL, and modern LLM stacks
              (LangChain + OpenAI). My passion: shipping secure, real‑world
              AI‑powered solutions.
            </p>

            <p className="text-muted-foreground">
              Highlights include an IEEE‑published emotion‑aware music app, a
              RAG‑based election chatbot, and an adversarial‑attack evaluation
              platform for DRDO. I thrive on turning complex ideas into elegant,
              user‑centric products.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* ▼ Download CV button – points to your PDF in /public */}
              <a
                href="/Bhavy Chaudhary Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ───────────────────── Right Column (Service Cards) ───────────────────── */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Engineering</h4>
                  <p className="text-muted-foreground">
                    Building LLM‑based apps with LangChain, OpenAI, and RAG for
                    natural‑language interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full‑Stack Development</h4>
                  <p className="text-muted-foreground">
                    Creating scalable web apps with React, Flask, MongoDB, and
                    modern frontend / backend stacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Adversarial ML &amp; Security
                  </h4>
                  <p className="text-muted-foreground">
                    Researching and implementing attacks to test and harden model
                    robustness.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ─────────────────────────────────────────────────────── */}
        </div>
      </div>
    </section>
  );
};
