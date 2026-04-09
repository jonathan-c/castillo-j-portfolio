export interface Repo {
  name: string;
  description: string;
  techStack: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  status: "live" | "chrome-web-store" | "testflight" | "in-development";
  featured: boolean;
  problem: string;
  approach: string;
  insight: string;
  techStack: string[];
  repos: Repo[];
  githubUrl?: string;
  liveUrl?: string;
  chromeWebStoreUrl?: string;
  appStoreUrl?: string;
}

export const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  "chrome-web-store": "In Chrome Web Store",
  testflight: "TestFlight",
  "in-development": "In Development",
};

export const projects: Project[] = [
  {
    slug: "hostalytics",
    title: "Hostalytics",
    tagline: "Helps Airbnb hosts track listing changes and see what actually worked",
    image: "/images/hostalytics.png",
    status: "live",
    featured: true,
    problem:
      "Airbnb gives hosts performance metrics but never connects them to specific listing changes. A host updates their title, sees bookings go up a week later, and has no idea if it was the title, a demand spike, or a pricing change. Every optimization is a guess.",
    approach:
      "I built a Next.js dashboard for tracking experiments and a Chrome extension that auto-syncs listing data every 6 hours. The extension captures listing changes automatically, and the dashboard frames them as before-and-after experiments tied to real performance data. Stripe handles payments, Supabase handles auth and storage, PostHog tracks funnel metrics.",
    insight:
      "People don't buy analytics because data is interesting. They buy clarity. The value isn't more numbers. It's helping someone feel less uncertain about whether their change worked.",
    techStack: ["Next.js", "Supabase", "Chrome Extension", "PostHog", "Stripe", "Tailwind"],
    liveUrl: "https://hostalytics.com/",
    chromeWebStoreUrl: "https://chromewebstore.google.com/detail/hostalytics/dplfgnjhbndklkblgmcbmogapcbhngkp",
    repos: [
      { name: "hostalytics-web", description: "Dashboard and marketing site", techStack: ["Next.js", "Supabase", "Tailwind"] },
      { name: "hostalytics-extension", description: "Chrome extension for listing sync", techStack: ["Chrome V5", "OAuth", "Background sync"] },
    ],
  },
  {
    slug: "hostalytics-growth",
    title: "Hostalytics Growth",
    tagline: "Autonomous growth engine that discovers, drafts, publishes, and measures across SEO, Reddit, and BiggerPockets",
    image: "/images/hostalytics-growth.png",
    status: "live",
    featured: true,
    problem:
      "Building a product is one thing. Getting it in front of the right people is another. Airbnb hosts searching for optimization tips don't know Hostalytics exists, and the communities where they ask for help are fragmented across Reddit, BiggerPockets, and Facebook Groups. Manual outreach doesn't scale, and generic content marketing doesn't convert.",
    approach:
      "I built a three-channel growth engine in TypeScript. The outreach channel discovers relevant threads across Reddit, BiggerPockets, and Facebook Groups, scores them for relevance with the OpenAI API, and generates community-appropriate draft responses with UTM-tagged links. The SEO channel generates and publishes resource pages targeting high-intent keywords as PRs to the main Hostalytics repo. Every experiment is tracked in PostHog and automatically evaluated after 7-30 days. Hierarchical prompt engineering (master, channel, community) keeps the voice consistent. All outputs require human review before publishing.",
    insight:
      "The human-in-the-loop design is what makes this work. Outreach drafts are never auto-posted, SEO pages require PR review. Full automation would produce spam. The system handles discovery, scoring, and drafting at scale, and humans handle judgment and approval.",
    techStack: ["TypeScript", "OpenAI API", "PostHog", "Playwright", "Cheerio", "simple-git"],
    repos: [
      { name: "hostalytics-growth", description: "Multi-channel growth engine with experiment tracking", techStack: ["TypeScript", "OpenAI", "PostHog", "Playwright", "Cheerio"] },
    ],
  },
  {
    slug: "good-boy-guide",
    title: "Good Boy Guide",
    tagline: "Scrapes 13+ venues, writes a weekly dog-friendly events newsletter for Tampa Bay",
    image: "/images/good-boy-guide.png",
    status: "live",
    featured: true,
    problem:
      "Dog-friendly event info in Tampa Bay is scattered across 13+ venue websites, none of which talk to each other and all of which render event data differently. My fiancée publishes a newsletter curating these events, and the manual process of visiting every site, deduplicating, and rewriting descriptions was taking hours every week.",
    approach:
      "I built a CLI pipeline that does the whole job end to end. Playwright visits 13 configured sources, each with its own adapter for selectors and date formats. Luxon normalizes dates, a hashing function deduplicates across sources, and history tracking tags events as new, recurring, or returning. OpenAI enriches each event with a one-to-two sentence description, then the pipeline renders HTML and pushes a draft to Beehiiv via their API. Two minutes, scrape to draft.",
    insight:
      "The tool creates a draft, not a published newsletter. That boundary is what makes it useful. She handles editorial judgment, the automation handles drudgery. If I'd automated everything end to end, the output would be generic and she'd stop using it.",
    techStack: ["Node.js", "Playwright", "OpenAI", "Beehiiv", "Luxon"],
    liveUrl: "https://goodboyguide.com/",
    repos: [
      { name: "good-boy-guide-agent", description: "Scraper, enrichment, and newsletter pipeline", techStack: ["Node.js", "Playwright", "OpenAI", "Luxon"] },
    ],
  },
  {
    slug: "poll-sports",
    title: "Poll Sports",
    tagline: "Community-driven fantasy football polls with accuracy leaderboards, web + iOS",
    image: "/images/pollsports.png",
    status: "live",
    featured: true,
    problem:
      "Every week, millions of fantasy football players make lineup decisions based on unstructured advice scattered across Reddit threads, Discord servers, and group chats. There's no way to compare opinions, no accountability for bad advice, and no signal for whose take is actually worth listening to.",
    approach:
      "I turned fantasy questions into lightweight polls. Instead of writing a long post and hoping for responses, a user asks a specific question and the community votes. I built an Angular web app with accuracy-based leaderboards, a native SwiftUI iOS app, and a Rails API that scrapes expert projections from fantasy sources using Selenium and processes them asynchronously with Sidekiq. The Angular app and iOS app both hit the same Firebase backend with Cloud Functions handling poll scoring, NFL data sync, and weekly accuracy percentiles.",
    insight:
      "Sometimes the biggest improvement isn't more intelligence. It's better format. Polling sounds simple, but the format changes behavior: faster participation, easier-to-read results, and discussions that are decision-oriented instead of open-ended.",
    techStack: ["Angular", "Swift/SwiftUI", "Rails", "Firebase", "Cloud Functions", "Stripe"],
    liveUrl: "https://pollsports.com/",
    appStoreUrl: "https://apps.apple.com/us/app/poll-sports/id1602304212",
    repos: [
      { name: "poll-sports-angular", description: "Web app with accuracy leaderboards and NFL data sync", techStack: ["Angular", "Firebase", "RxJS", "PrimeNG", "Stripe"] },
      { name: "poll-sports-ios", description: "Native iOS app with credibility badges and poll voting", techStack: ["Swift", "SwiftUI", "Firebase", "SPM"] },
      { name: "poll_sports_rails_api", description: "Projections scraper and analyst data pipeline", techStack: ["Rails 7", "PostgreSQL", "Sidekiq", "Selenium"] },
    ],
  },
  {
    slug: "walks-by-virginia",
    title: "Walks by Virginia",
    tagline: "Full booking platform for a boutique dog boarding business, built in 5 days",
    image: "/images/walksbyvirginia.png",
    status: "live",
    featured: true,
    problem:
      "The tools available to solo pet-care operators are either giant marketplaces like Rover or nothing at all. My fiancée Virginia runs a boutique dog boarding business, two dogs at a time, and there was no simple way to handle bookings, track each dog's care needs, manage capacity, or present a professional brand that matched the quality of her service.",
    approach:
      "I built her a full booking platform in five days. Next.js, Supabase, Tailwind. A multi-step booking form handles service selection, date picking, dog profiles, and vet authorization. A Supabase stored procedure checks real-time capacity against her two-dog limit. Confirmed bookings sync to Google Calendar. The admin dashboard handles date blocking, capacity overrides, and per-dog care plans. Row-level security on every table, immutable vet authorization records, and 149 tests across 21 files.",
    insight:
      "Start with the constraints, not the features. Virginia's two-dog limit is the single most important thing about her business. Every technical decision flows from that. If I'd started with a feature list instead of understanding the constraint, I would have over-engineered some parts and under-engineered the one that matters.",
    techStack: ["Next.js", "Supabase", "Tailwind", "Google Calendar API"],
    liveUrl: "https://www.walksbyvirginia.com/",
    repos: [
      { name: "walks-by-virginia-web", description: "Booking platform, admin dashboard, and marketing site", techStack: ["Next.js", "Supabase", "Tailwind", "RLS", "ISR"] },
    ],
  },
];

export const secondaryProjects: { title: string; description: string }[] = [];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
