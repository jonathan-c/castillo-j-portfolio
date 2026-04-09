# Design System — Jonathan Castillo Portfolio

## Product Context
- **What this is:** Personal portfolio website for job applications
- **Who it's for:** Hiring managers at startups and mid-to-large companies
- **Space/industry:** Developer portfolio, job hunting
- **Project type:** Static marketing/personal site (Next.js on Vercel)

## Aesthetic Direction
- **Direction:** Warm Bold — heavy typography on a warm, light background with orange accents
- **Decoration level:** Minimal. Typography and whitespace carry the design. No gradients, blobs, or decorative elements.
- **Mood:** Confident, warm, human. Feels like a builder who cares about craft, not a developer template.
- **Reference sites:** brittanychiang.com (structure), leerob.com (simplicity)
- **Differentiation:** Heavy sans-serif headlines + orange accent on warm cream. Most dev portfolios use either dark navy + teal or ultra-minimal white. This is neither.

## Typography
- **Display/Hero:** Cabinet Grotesk Extrabold — heavy, geometric, confident. Name appears large and broken across lines.
- **Body:** Instrument Sans — clean, readable, pairs well with the heavy display. Good at 15-17px.
- **UI/Labels:** Instrument Sans (same as body)
- **Code/Tags:** Geist Mono — Vercel's monospace. Clean for tech stack badges.
- **Loading:** Google Fonts for Instrument Sans and Geist Mono. Cabinet Grotesk via CDN Fonts (cdnfonts.com) or self-hosted.
- **Scale:**
  - Hero name: 64px / 4rem (font-weight: 800, letter-spacing: -0.035em, line-height: 0.95)
  - h1: 40px / 2.5rem (font-weight: 800)
  - h2: 30px / 1.875rem (font-weight: 800)
  - h3: 17px / 1.0625rem (font-weight: 800)
  - Body: 15px / 0.9375rem (font-weight: 400, line-height: 1.7)
  - Small/Tags: 11px / 0.6875rem (monospace, font-weight: 500)
  - Section labels: 11px uppercase, letter-spacing: 2.5px, monospace, accent color

## Color
- **Approach:** Restrained — one accent + warm neutrals. Orange is the only color. Screenshots provide the rest.
- **Background:** #FAF8F5 — warm cream, not sterile white
- **Surface/Cards:** #FFFFFF
- **Primary text:** #1A1A1A — near-black, easier on eyes than pure black
- **Muted text:** #6B6B6B
- **Accent:** #E85D26 — warm burnt orange. Used for links, section labels, CTAs, hover states.
- **Accent hover:** #D14E1A
- **Border:** #E8E5E1 — warm gray, barely visible
- **Tag background:** #F0EDE9 — warm light gray
- **Tag text:** #5C5C5C
- **Dark mode:** Deferred to post-launch

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous whitespace, content breathes
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(80px)
- **Between elements:** 18-24px
- **Between sections:** 48-72px
- **Between major sections:** 80-100px
- **Card padding:** 30px

## Layout
- **Approach:** Single-column, centered
- **Max content width:** 740px (prose and cards)
- **Grid:** Single column for featured projects, 2-column for secondary grid
- **Border radius:** sm: 5px (tags), md: 10px (secondary cards), lg: 14px (featured cards)
- **Card style:** White surface, 1px warm border, subtle box-shadow (0 1px 3px rgba(0,0,0,0.04))

## Motion
- **Approach:** None. Content renders immediately. No scroll animations, no fade-ins, no transitions beyond default browser hover states.

## Component Patterns
- **Featured project card:** Screenshot area (230px, warm gray #EDE9E5) + body (title, tagline, summary, tech tags, read more link)
- **Secondary project card:** Title + one-line description, smaller padding
- **Tech tags:** Monospace, 11px, warm gray background, 5px radius
- **Links:** Orange accent, no underline, font-weight 600
- **Section labels:** Monospace, 11px, uppercase, orange, 2.5px letter-spacing, bottom border
- **Buttons (if needed):** Primary = orange bg + white text, Secondary = transparent + border, Ghost = orange text only

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-08 | Warm Bold direction chosen | Heavy type + warm cream + orange. Stands out from dark/teal templates. Confident but approachable. |
| 2026-04-08 | Cabinet Grotesk for display | Geometric, heavy weight. Signals confidence and design taste in a space dominated by default sans-serif. |
| 2026-04-08 | Orange accent (#E85D26) | Distinctive in a sea of blue/teal dev portfolios. Warm, energetic, pairs with cream background. |
| 2026-04-08 | No dark mode for V1 | Ship fast, iterate later. One theme reduces scope by half. |
| 2026-04-08 | No animations | Per eng review. Content renders immediately. Simplifies testing and implementation. |
