export interface Project {
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  problem: string;
  approach: string;
  insight: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "hostalytics",
    title: "Hostalytics",
    tagline: "A/B testing toolkit for Airbnb hosts",
    featured: true,
    problem:
      "Airbnb hosts constantly tweak their listings but have no way to know if changes actually helped. They update a title, swap photos, rewrite descriptions, then hope for the best. The metrics Airbnb provides don't connect specific changes to outcomes.",
    approach:
      "I built a product suite: a Next.js dashboard for tracking experiments, a Chrome extension that auto-syncs listing data every 6 hours, and a growth tool that finds relevant host conversations on Reddit and BiggerPockets. The extension captures listing changes automatically, and the dashboard frames them as before-and-after experiments tied to real performance data.",
    insight:
      "People don't buy analytics because data is interesting. They buy clarity. The value isn't more numbers. It's helping someone feel less uncertain about whether their change worked.",
    techStack: ["Next.js", "Supabase", "Chrome Extension", "PostHog", "Tailwind"],
  },
  {
    slug: "good-boy-guide",
    title: "Good Boy Guide",
    tagline: "AI-powered event scraper for Tampa Bay dog owners",
    featured: true,
    problem:
      "My girlfriend runs a dog newsletter for Tampa Bay. Every week she spent hours visiting a dozen websites, copying event details, rewriting descriptions, and formatting everything into a Beehiiv draft. The sources were the real headache: Squarespace calendars, WordPress plugins, GoDaddy sites with events buried in inline JavaScript, Eventbrite embeds, and static HTML pages.",
    approach:
      "I built a CLI pipeline that does the whole job end to end. Playwright visits 13 configured sources, each with its own adapter for selectors and date formats. Luxon normalizes dates, a hashing function deduplicates across sources, and history tracking tags events as new, recurring, or returning. OpenAI enriches each event with a one-to-two sentence description, then the pipeline renders HTML and pushes a draft to Beehiiv via their API. Two minutes, scrape to draft.",
    insight:
      "The tool creates a draft, not a published newsletter. That boundary is what makes it useful. She handles editorial judgment, the automation handles drudgery. If I'd automated everything end to end, the output would be generic and she'd stop using it.",
    techStack: ["Node.js", "Playwright", "OpenAI", "Beehiiv", "Luxon"],
  },
  {
    slug: "poll-sports",
    title: "Poll Sports",
    tagline: "Fantasy football polling, cross-platform",
    featured: true,
    problem:
      "Fantasy football players constantly need quick feedback on lineup decisions, but the places they get it are messy. Reddit threads, Discord, group chats. The feedback is buried in opinions with no structure, no way to compare responses, and no accountability for bad advice.",
    approach:
      "I turned fantasy questions into lightweight polls. Instead of writing a long post and hoping for responses, a user asks a specific question and the community votes. I built a web app in Astro/Svelte and a native iOS app, both hitting the same Firebase backend. I layered in AI to complement community votes with context-aware analysis, and built data pipelines to scrape projections from different analysts.",
    insight:
      "Sometimes the biggest improvement isn't more intelligence. It's better format. Polling sounds simple, but the format changes behavior: faster participation, easier-to-read results, and discussions that are decision-oriented instead of open-ended.",
    techStack: ["Astro", "Svelte", "Swift/iOS", "Firebase", "OpenAI"],
  },
];

export const secondaryProjects = [
  {
    title: "Walks by Virginia",
    description: "Next.js web app (in progress)",
  },
  {
    title: "Hostalytics Growth",
    description: "Reddit + BiggerPockets outreach automation for Airbnb hosts",
  },
  {
    title: "Poll Sports Angular",
    description: "Earlier iteration showing framework range",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
