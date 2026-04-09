import Link from "next/link";
import { TechTag } from "./TechTag";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-border rounded-[14px] overflow-hidden mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="bg-[#EDE9E5] h-[230px] flex items-center justify-center text-muted font-mono text-xs">
        [ Screenshot: {project.title} ]
      </div>
      <div className="p-7">
        <h2 className="font-display text-[30px] font-extrabold leading-tight tracking-tight mb-1.5">
          {project.title}
        </h2>
        <p className="text-[15px] text-muted mb-4">{project.tagline}</p>
        <p className="text-[15px] leading-relaxed mb-4">
          <strong className="font-semibold">The problem:</strong>{" "}
          {project.problem.split(". ").slice(0, 2).join(". ")}.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-accent font-semibold hover:text-accent-hover"
        >
          Read case study →
        </Link>
      </div>
    </div>
  );
}
