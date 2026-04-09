import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import { TechTag } from "@/components/TechTag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Jonathan Castillo`,
      description: project.tagline,
      images: [`/og/${slug}.png`],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="max-w-[740px] mx-auto px-6">
      <nav className="pt-8 pb-4">
        <Link
          href="/"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          ← Back
        </Link>
      </nav>

      {/* Hero */}
      <section className="pb-8">
        <h1 className="font-display text-[40px] sm:text-[48px] font-extrabold leading-[0.95] tracking-[-0.035em] mb-2">
          {project.title}
        </h1>
        <p className="text-[17px] text-muted mb-6">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </section>

      {/* Screenshot placeholder */}
      <div className="bg-[#EDE9E5] rounded-[14px] h-[280px] sm:h-[360px] flex items-center justify-center text-muted font-mono text-xs mb-12">
        [ Screenshot: {project.title} ]
      </div>

      {/* Content */}
      <section className="space-y-10 pb-16">
        <div>
          <p className="font-mono text-[11px] text-accent uppercase tracking-[2.5px] font-semibold mb-3">
            The Problem
          </p>
          <p className="text-base leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <p className="font-mono text-[11px] text-accent uppercase tracking-[2.5px] font-semibold mb-3">
            The Approach
          </p>
          <p className="text-base leading-relaxed">{project.approach}</p>
        </div>

        <div>
          <p className="font-mono text-[11px] text-accent uppercase tracking-[2.5px] font-semibold mb-3">
            Key Insight
          </p>
          <p className="text-base leading-relaxed italic text-muted">
            &ldquo;{project.insight}&rdquo;
          </p>
        </div>
      </section>

      {/* Repos */}
      {project.repos.length > 0 && (
        <section className="pb-12">
          <p className="font-mono text-[11px] text-accent uppercase tracking-[2.5px] font-semibold mb-4">
            {project.repos.length === 1 ? "Repository" : `${project.repos.length} Repositories`}
          </p>
          <div className="space-y-3">
            {project.repos.map((repo) => (
              <div
                key={repo.name}
                className="bg-surface border border-border rounded-[10px] p-4"
              >
                <p className="font-mono text-[13px] font-medium mb-1">
                  {repo.name}
                </p>
                <p className="text-[13px] text-muted mb-2">{repo.description}</p>
                <div className="flex flex-wrap gap-1">
                  {repo.techStack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-tag-text bg-tag-bg px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Links */}
      {(project.githubUrl || project.liveUrl || project.chromeWebStoreUrl) && (
        <section className="pb-16 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent font-semibold hover:text-accent-hover"
            >
              Live Site →
            </a>
          )}
          {project.chromeWebStoreUrl && (
            <a
              href={project.chromeWebStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent font-semibold hover:text-accent-hover"
            >
              Chrome Web Store →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent font-semibold hover:text-accent-hover"
            >
              View on GitHub →
            </a>
          )}
        </section>
      )}
    </div>
  );
}
