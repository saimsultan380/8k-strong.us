import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";
import { createPageMetadata, pageDescriptions, pageKeywords, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";
import { BLOG_POSTS } from "@/data/blogs";
import { FadeIn } from "@/components/animation/fade-in";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.blogs,
  description: pageDescriptions.blogs,
  path: routes.blogs,
  keywords: [...pageKeywords.blogs],
});

export default function BlogsPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.blogs} />

      <section className="relative isolate overflow-hidden pb-10 pt-32 sm:pt-36">
        <Container className="relative z-10 text-center">
          <HeroReveal delay={0.05}>
            <h1
              className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Strong8k IPTV Guides for USA Setup, Subscriptions and Support
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <p
              className="mx-auto mt-6 max-w-3xl text-sm leading-[1.8] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Practical Strong 8k guides covering setup, subscriptions, reviews, and support questions.
            </p>
          </HeroReveal>
        </Container>
      </section>

      <section
        className="relative isolate overflow-hidden pb-20 md:pb-28"
        style={{ backgroundColor: "var(--hero-base)" }}
      >
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Browse Strong8k Blog Guides
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, index) => (
              <ScrollReveal key={post.slug} direction="up" delay={0.04 * index} once className="h-full">
                <Link
                  href={post.path}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-200 hover:border-[var(--hero-accent)]"
                  style={{
                    backgroundColor: "var(--feature-card-bg)",
                    borderColor: "var(--feature-card-border)",
                    boxShadow: "var(--feature-card-shadow)",
                  }}
                >
                  <div
                    className="relative aspect-[16/10] w-full border-b"
                    style={{
                      borderColor: "var(--feature-card-border)",
                      backgroundColor: "rgba(0,0,0,0.4)",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p
                      className="text-lg font-bold leading-snug transition-colors group-hover:text-[var(--hero-accent)]"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      {post.title}
                    </p>
                    <p
                      className="mt-3 flex-1 text-sm leading-[1.75]"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      {post.line}
                    </p>
                    <span
                      className="mt-5 text-sm font-semibold"
                      style={{ color: "var(--hero-accent)" }}
                    >
                      Read guide →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
