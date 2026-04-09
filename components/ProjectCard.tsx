import Image from "next/image";
import Link from "next/link";
import { TechTag } from "./TechTag";
import type { Project } from "@/lib/projects";
import { statusLabels } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-border rounded-[14px] overflow-hidden mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="relative h-[230px] sm:h-[280px] bg-[#EDE9E5]">
        <Image
          src={project.image}
          alt={`${project.title} product screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 740px) 100vw, 740px"
          priority={project.slug === "hostalytics"}
        />
      </div>
      <div className="p-7">
        <div className="flex items-center gap-3 mb-1.5">
          <h2 className="font-display text-[30px] font-extrabold leading-tight tracking-tight">
            {project.title}
          </h2>
          <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded">
            {statusLabels[project.status]}
          </span>
        </div>
        <p className="text-base text-muted mb-4">{project.tagline}</p>
        <p className="text-base leading-relaxed mb-4">
          <strong className="font-semibold">The problem:</strong>{" "}
          {project.problem.split(". ").slice(0, 2).join(". ")}.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
        {project.repos.length > 1 && (
          <div className="mb-4 pt-3 border-t border-border">
            <p className="font-mono text-[10px] text-muted uppercase tracking-[2px] mb-2">
              {project.repos.length} repos
            </p>
            <div className="space-y-1.5">
              {project.repos.map((repo) => (
                <div key={repo.name} className="flex items-baseline gap-2">
                  <span className="font-mono text-[12px] text-text font-medium">
                    {repo.name}
                  </span>
                  <span className="text-[12px] text-muted">{repo.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-accent font-semibold hover:text-accent-hover py-2"
            >
              Visit Site →
            </a>
          )}
          {project.chromeWebStoreUrl && (
            <a
              href={project.chromeWebStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-accent font-semibold hover:text-accent-hover py-2"
            >
              Chrome Web Store →
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block text-sm text-muted hover:text-text py-2"
          >
            How I built it →
          </Link>
        </div>
      </div>
    </div>
  );
}
