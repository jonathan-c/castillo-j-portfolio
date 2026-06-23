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
    slug: "mentorium",
    title: "Mentorium",
    tagline:
      "Turns 600+ episodes of The Tim Ferriss Show into something you can ask — every answer cited to the exact moment",
    image: "/images/mentorium.png",
    status: "live",
    featured: true,
    problem:
      "The Tim Ferriss Show has 600+ episodes of world-class guests, but all of that advice is locked in linear audio. If you want to know how guests build habits or bounce back from failure, your only options are listening for hundreds of hours or keyword-searching transcripts and reading around the hit. There's no way to just ask a question and get an answer grounded in what people actually said.",
    approach:
      "I built a retrieval-augmented search engine over the full transcript corpus. 142,000+ transcript segments are embedded and stored in Postgres with pgvector, and a hybrid retriever blends full-text search with vector similarity (HNSW index) to pull the most relevant passages for any question. A grounded synthesis step answers using only those passages and emits citations as segment IDs, which I validate server-side against the retrieved set so a hallucinated source can never reach the UI. The app has three ways in — ask anything across the catalog, ask a single guest across all their appearances, or browse ranked lists the show keeps returning to, like most-gifted books and best sub-$100 purchases. Next.js front to back, deployed on Railway with a self-hosted pgvector database.",
    insight:
      "Citations are the entire product, and they can't be trusted to the model. They have to be engineered. The model proposes which segments support a claim, but the server decides whether those segments were actually retrieved before anything renders. That one constraint is the difference between an AI that talks about a podcast and a tool you can trust, because every claim links back to the exact moment a guest said it.",
    techStack: ["Next.js", "PostgreSQL", "pgvector", "OpenAI", "Drizzle ORM", "Railway", "Tailwind"],
    liveUrl: "https://mentorium.fyi",
    repos: [
      {
        name: "mentorium",
        description: "RAG search over The Tim Ferriss Show — hybrid retrieval, grounded synthesis, cited answers",
        techStack: ["Next.js", "pgvector", "OpenAI", "Drizzle", "Railway"],
      },
    ],
  },
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
      "Trust is everything when the product touches advice. People aren't looking for more opinions. They're looking for confidence. That means the quality of the insights, the credibility behind each vote, and the logic behind any AI-generated guidance all have to feel reliable. If the product makes bad assumptions, users feel it immediately.",
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
      "Each website is its own little kingdom with its own quirks. A generic scraper that tries to guess where event data lives works maybe 60% of the time. The real unlock was accepting that each source needs its own configuration. It's not elegant, but it's reliable, and reliable matters more when you're generating a newsletter someone actually sends to subscribers.",
    techStack: ["Node.js", "Playwright", "OpenAI", "Beehiiv", "Luxon"],
    liveUrl: "https://goodboyguide.com/",
    repos: [
      { name: "good-boy-guide-agent", description: "Scraper, enrichment, and newsletter pipeline", techStack: ["Node.js", "Playwright", "OpenAI", "Luxon"] },
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
      "I built it so every piece of data is scoped to the business that owns it, even though there's only one business right now. That made the security model simple and means the whole platform works out of the box if Virginia brings on another caregiver or if I offer this to other solo pet-care operators. The extra effort was almost zero, and now it's ready to grow without a rewrite.",
    techStack: ["Next.js", "Supabase", "Tailwind", "Google Calendar API"],
    liveUrl: "https://www.walksbyvirginia.com/",
    repos: [
      { name: "walks-by-virginia-web", description: "Booking platform, admin dashboard, and marketing site", techStack: ["Next.js", "Supabase", "Tailwind", "Row-Level Security"] },
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
