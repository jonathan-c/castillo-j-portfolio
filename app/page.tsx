import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { OutboundLink } from "@/components/OutboundLink";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="max-w-[740px] mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-12 sm:pt-24">
        <h1 className="font-display text-[48px] sm:text-[64px] font-extrabold leading-[0.95] tracking-[-0.035em] mb-3">
          Jonathan
          <br />
          Castillo
        </h1>
        <p className="font-mono text-[15px] text-accent font-semibold uppercase tracking-[2.5px] mb-6">
          Full-Stack Engineer
        </p>
        <p className="text-[17px] text-muted leading-relaxed max-w-[540px]">
          I build things people actually use. Outside of work, I&apos;ve shipped
          a product suite for Airbnb hosts, a cross-platform sports app, and an
          AI agent that writes newsletters.
        </p>
      </section>

      {/* Featured Projects */}
      <p className="font-mono text-[11px] text-accent uppercase tracking-[2.5px] font-semibold mb-7 mt-8 pb-3 border-b-2 border-border">
        Featured Projects
      </p>
      {featured.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      {/* About */}
      <section className="pt-12 pb-8 border-t-2 border-border mt-4">
        <h2 className="font-display text-[30px] font-extrabold tracking-tight mb-3">
          About
        </h2>
        <p className="text-[15px] text-muted leading-relaxed max-w-[540px] mb-5">
          Full-stack engineer based in Tampa Bay. I like building tools that help
          people make better decisions, especially when those decisions normally
          get made on instinct. Always looking for teams that care about craft.
        </p>
        <div className="flex flex-wrap gap-5">
          <OutboundLink
            href="https://github.com/jonathan-c/"
            label="GitHub"
            className="text-sm text-accent font-semibold hover:text-accent-hover"
          >
            GitHub
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/castillojonathan/"
            label="LinkedIn"
            className="text-sm text-accent font-semibold hover:text-accent-hover"
          >
            LinkedIn
          </OutboundLink>
          <OutboundLink
            href="/resume.pdf"
            label="Resume"
            isResume
            className="text-sm text-accent font-semibold hover:text-accent-hover"
          >
            Resume (PDF)
          </OutboundLink>
        </div>
      </section>
    </div>
  );
}
