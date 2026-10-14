"use client";

import { Tv, Trophy, Film, Clapperboard, Newspaper, Baby, Globe, Music } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

const CATEGORIES = [
  {
    id: "live-tv",
    icon: Tv,
    title: "Live television",
    description: "Available entertainment channels, everyday programming, and regional services",
  },
  {
    id: "sports",
    icon: Trophy,
    title: "Live sports",
    description: "Available sports channels and event feeds",
  },
  {
    id: "movies",
    icon: Film,
    title: "Movies",
    description: "Available genres, release years, languages, and subtitles",
  },
  {
    id: "series",
    icon: Clapperboard,
    title: "Series and box sets",
    description: "Available seasons, episodes, and language versions",
  },
  {
    id: "news",
    icon: Newspaper,
    title: "News and documentaries",
    description: "Available news, current affairs, factual, and documentary programming",
  },
  {
    id: "family",
    icon: Baby,
    title: "Kids and family",
    description: "Available animation and family entertainment",
  },
  {
    id: "international",
    icon: Globe,
    title: "International content",
    description: "Available UK and international channels and multilingual titles",
  },
  {
    id: "music",
    icon: Music,
    title: "Music and radio",
    description: "Available music channels and radio services",
  },
];

export function EverythingIncludedSection() {
  return (
    <section
      id="content-library"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 max-w-4xl md:mb-16">
          <FadeIn delay={0.05}>
            <h2
              className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Explore Our Channel List and On-Demand Content Catalog
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
              Explore the available catalog by the type of entertainment you enjoy.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} direction="up" delay={0.04 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 hover:border-[var(--hero-accent)]"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--feature-card-border)",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: "var(--hero-accent)" }} strokeWidth={1.75} />
                  <p className="mt-5 text-lg font-bold leading-snug" style={{ color: "var(--hero-heading)" }}>
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.65]" style={{ color: "var(--feature-body)" }}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 max-w-3xl space-y-4 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          <RevealParts>
            <p>
              For US sports, ask about the specific NFL, NBA, MLB, NHL, college sports, soccer, motorsports, boxing, or UFC event you want to watch.
            </p>
            <p>
              For local television, provide the station or network name and your city or ZIP code. Confirm the particular local affiliate or regional broadcast before ordering.
            </p>
            <p>
              Looking for UK IPTV in the USA or another international language group? Send support the channels and programs you want to check.
            </p>
            <p>
              Movies and series are included within the 140,000+ VOD title catalog. Audio, subtitles, and available versions vary by title.
            </p>
            <p>
              Save your regular channels as favorites where the player supports it. For series, check the available seasons and episodes before starting.
            </p>
          </RevealParts>
        </div>
      </Container>
    </section>
  );
}
