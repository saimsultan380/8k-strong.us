"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { routes } from "@/lib/routes";
import { BLOG_POSTS } from "@/data/blogs";
import { HeroReveal } from "@/components/animation/hero-reveal";

const NAV_LINKS = [
  { label: "Home", href: routes.home },
  { label: "Pricing", href: routes.subscriptionPlans },
  { label: "Installation Guide", href: routes.installationGuide },
  { label: "Reseller Panel", href: routes.resellerPanel },
  { label: "Contact Us", href: routes.contactUs },
  { label: "Blogs", href: routes.blogs },
];

const BLOG_NAV_LINKS = [
  { label: "All Blogs", href: routes.blogs },
  ...BLOG_POSTS.map((post) => ({
    label: post.navLabel,
    href: post.path,
  })),
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-[80] px-4 pt-5 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="glass-nav pointer-events-auto relative mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2.5 sm:px-5 sm:py-3 lg:max-w-6xl"
        >
          {/* Logo */}
          <HeroReveal variant="logo" delay={0.05} className="shrink-0">
            <Link
              href={routes.home}
              id="hero-logo"
              className="flex shrink-0 items-center gap-2.5 no-underline"
              onClick={closeMenu}
            >
              <Image
                src="/strong-8k.PNG?v=3"
                alt="Strong 8k"
                width={64}
                height={64}
                loading="eager"
                unoptimized
                className="h-12 w-12 object-contain sm:h-[3.25rem] sm:w-[3.25rem]"
              />
            </Link>
          </HeroReveal>

          {/* Nav links + actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
            <div className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link, index) => (
                <HeroReveal key={link.label} delay={0.08 + index * 0.04}>
                  {link.label === "Blogs" ? (
                    <div className="group relative">
                      <Link
                        href={link.href}
                        className="text-sm font-medium transition-colors duration-150 hover:text-[var(--hero-accent)]"
                        style={{ color: "var(--hero-nav-link)" }}
                      >
                        {link.label}
                      </Link>
                      <div
                        className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"
                      >
                        <div
                          className="rounded-xl border py-2 shadow-lg"
                          style={{
                            backgroundColor: "rgba(10, 10, 10, 0.96)",
                            borderColor: "var(--feature-card-border)",
                            boxShadow: "var(--feature-card-shadow)",
                          }}
                        >
                          {BLOG_NAV_LINKS.map((blogLink) => (
                            <Link
                              key={blogLink.href}
                              href={blogLink.href}
                              className="block px-4 py-2.5 text-sm transition-colors hover:text-[var(--hero-accent)]"
                              style={{ color: "var(--hero-nav-link)" }}
                            >
                              {blogLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-150 hover:text-[var(--hero-accent)]"
                      style={{ color: "var(--hero-nav-link)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </HeroReveal>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 md:hidden"
              style={{ color: "var(--hero-nav-text)" }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {/* Desktop CTA */}
            <HeroReveal variant="cta" delay={0.32} className="hidden md:inline-flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex"
            >
              <Link
                href={routes.subscriptionPlans}
                id="hero-get-started"
                className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:brightness-110 sm:px-5"
                style={{
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                View Plans
              </Link>
            </motion.div>
            </HeroReveal>
          </div>
        </nav>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            <motion.nav
              aria-label="Mobile navigation"
              className="glass-nav fixed left-0 right-0 top-0 z-[75] rounded-none border-b-0 px-4 pb-8 pt-[5.5rem] sm:px-6 md:hidden"
              style={{
                borderRadius: 0,
                boxShadow: "var(--hero-nav-shadow), 0 12px 40px rgba(0, 0, 0, 0.25)",
              }}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="mx-auto flex max-w-5xl flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium transition-colors hover:bg-black/5 hover:text-[var(--hero-accent)] dark:hover:bg-white/5"
                      style={{ color: "var(--hero-nav-text)" }}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-4 px-4"
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    Blog Guides
                  </p>
                </motion.div>
                {BLOG_NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-[var(--hero-accent)] dark:hover:bg-white/5"
                      style={{ color: "var(--hero-nav-text)" }}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="mt-4 px-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={routes.subscriptionPlans}
                      className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:brightness-110"
                      style={{
                        boxShadow: "var(--hero-cta-primary-shadow)",
                      }}
                      onClick={closeMenu}
                    >
                      View Plans
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
