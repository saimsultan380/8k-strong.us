import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { HeroReveal } from "@/components/animation/hero-reveal";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.blogs,
  description: pageDescriptions.blogs,
  path: routes.blogs,
});

const cardStyle = {
  backgroundColor: "var(--feature-card-bg)",
  borderColor: "var(--feature-card-border)",
  boxShadow: "var(--feature-card-shadow)",
} as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            {title}
          </h2>
        </FadeIn>
        <div className="mt-8 rounded-2xl border p-6 sm:p-8 md:p-10" style={cardStyle}>
          <div className="space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>{children}</RevealParts>
          </div>
        </div>
      </Container>
    </section>
  );
}

const linkClass = "inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black";

export default function BlogsPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.blogs} />
      <section className="relative isolate overflow-hidden pb-10 pt-32 sm:pt-36">
        <Container className="relative z-10 text-center">
          <HeroReveal delay={0.05}>
          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--hero-heading)" }}>
            Strong 8k IPTV Guides for Setup, Subscriptions and Support
          </h1>
          </HeroReveal>
          <HeroReveal delay={0.12}>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-base" style={{ color: "var(--hero-muted)" }}>
            <p>The Strong 8k IPTV blog answers common questions about devices, subscriptions and everyday viewing.</p>
            <p>Find help with login problems, understand the difference between a player and a service account, and check what to look for when comparing online reviews.</p>
            <p>For a question about your own account, our customer support is available 24/7.</p>
          </div>
          </HeroReveal>
          <HeroReveal variant="cta" delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={routes.installationGuide} className="inline-flex rounded-xl bg-gradient-brand px-6 py-3 text-sm font-bold text-black">Read the Installation Guide</Link>
            <Link href={routes.contactUs} className="inline-flex rounded-xl border px-6 py-3 text-sm font-semibold" style={{ borderColor: "var(--hero-btn-border)", color: "var(--hero-heading)" }}>Contact Customer Support</Link>
          </div>
          </HeroReveal>
        </Container>
      </section>

      <Section title="Find Practical Answers Before Choosing Your IPTV Subscription">
        <p>Start with the question that matches your situation.</p>
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                <th className="px-4 py-3 font-bold" style={{ color: "var(--hero-heading)" }}>Your question</th>
                <th className="px-4 py-3 font-bold" style={{ color: "var(--hero-heading)" }}>What to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Is Strong 8k down?", "Account expiry, other channels, connection limits and player behaviour"],
                ["Are Reddit reviews relevant to this website?", "The exact domain, date, device and account described"],
                ["What does 8k VIP mean?", "The actual content, connections, resolution and player costs"],
                ["How do Xtream Codes logins work?", "The supplied server URL, username and password"],
                ["Which installation route should I use?", "Your device model, operating system and compatible player"],
                ["Can I request a missing film or series?", "The title, release year, language, season and episode"],
              ].map(([q, a]) => (
                <tr key={q} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                  <td className="px-4 py-3 font-semibold" style={{ color: "var(--hero-heading)" }}>{q}</td>
                  <td className="px-4 py-3">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Keep your account reference handy when asking support about an existing subscription.</p>
      </Section>

      <Section title="Strong 8k Down? Check Login and Playback Problems">
        <p>If Strong 8k stops working, identify what has failed before assuming the whole service is unavailable.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Try other content</h3>
        <p>Open another live channel and an on-demand title. If both work, record the original channel or title and when the problem occurred. A fault affecting one source needs different checks from an account that cannot load anything.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Check expiry and simultaneous connections</h3>
        <p>Confirm that your trial or paid subscription is active. Close playback on other devices before testing again. A stream running elsewhere may be using your connection allowance. Turning off a display does not always stop background playback.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Check the app and internet connection</h3>
        <p>Restart the player and check whether other internet services work. For buffering, consider Wi-Fi signal strength and other household activity. Where supported, try a wired connection or a different available quality option. Avoid repeatedly deleting account data before you know which part has failed.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Send a useful problem report</h3>
        <p>Tell support your device model, player, affected content, error message and the time. Explain whether anything else plays. For our app, the current installation code is 4330396. The previous version used 439873. This section provides troubleshooting steps; it is not a live outage status report.</p>
        <Link href={enquiryWhatsApp("playback")} target="_blank" rel="noopener noreferrer" className={linkClass}>Get Playback Help</Link>
      </Section>

      <Section title="Understand Strong 8k IPTV Reddit Reviews and Discussions">
        <p>Strong 8k IPTV Reddit discussions can help you identify questions before subscribing. Check the context behind a review rather than relying only on a short rating.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Identify the provider</h3>
        <p>Look for the exact website associated with the review. Our domain is 8k-strong.co.uk. A post mentioning Strong8k alone may refer to a different seller. Reviews of another website should not be presented as reviews of this service.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Check the date and setup</h3>
        <p>Prices, app versions and content availability can change. Look at when the experience happened and which device, player and connection were used. A wired Android TV setup and an older television app on weak Wi-Fi may behave differently.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Look for specific observations</h3>
        <p>Useful reviews explain what was watched, which problem occurred and how support responded. EPG, catch-up, live channels and VOD are separate parts of the service. A missing programme schedule is different from failed playback. If a post includes a referral link or reseller offer, consider that relationship when assessing its recommendation. Use the information to plan your own trial and questions.</p>
        <Link href={enquiryWhatsApp("free-trial")} target="_blank" rel="noopener noreferrer" className={linkClass}>Ask About a Free Trial</Link>
      </Section>

      <Section title="Compare 8k VIP Labels with Actual Subscription Features">
        <p>An 8k VIP label may describe a player or a provider’s package. Premium IPTV and IPTV premium are broad descriptions. Check the actual offer behind the wording.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Content and account allowance</h3>
        <p>Strong 8k offers 40,000+ available live channels and 140,000+ VOD titles. Ask about the channels, films, series and languages important to you. Missing films and series can be requested, subject to availability. The connection allowance controls simultaneous streams. A VIP label does not establish unlimited playback across devices.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Picture quality</h3>
        <p>Available viewing includes HD, FHD and UHD where supported by the source and setup. The Strong 8k name, or an app name containing 8K, does not make every stream a genuine 8K source.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Player and subscription costs</h3>
        <p>A player provides the interface. A service account provides access to the available catalogue. Buying an app licence does not automatically purchase a viewing subscription. Some third-party premium features have their own charge. Compare the term price, connection allowance and any separate player cost together.</p>
      </Section>

      <Section title="Xtream IPTV 8k Setup and Account Login Details">
        <p>For Xtream IPTV 8k setup, use the account method supplied by Strong 8k. Server credentials, M3U playlist links and device activation are different routes.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Server URL, username and password</h3>
        <p>Choose the supported server-login option in the player. Enter the supplied server address, username and password exactly. Include any required port or path and remove accidental spaces. A profile name is usually just your label inside the app; it does not replace the account details.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>M3U playlist link</h3>
        <p>Choose the playlist URL option and paste the complete supplied link. Do not remove parts of the address. The link may contain information required for account access. If the player needs a separate EPG address, use the information supplied by support. Guide coverage remains limited.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Device activation</h3>
        <p>Some players show a device ID, MAC address or key. Confirm the app name and send the required identifiers privately to support. Follow that player’s activation process and refresh after account linking.</p>
        <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Rejected login or failed playback</h3>
        <p>Check expiry, typing errors and the account method selected. If the catalogue loads but playback fails, close other streams and check the connection allowance. Try another source and report the scope of the problem.</p>
        <Link href={enquiryWhatsApp("installation")} target="_blank" rel="noopener noreferrer" className={linkClass}>Get Login Help</Link>
      </Section>

      <Section title="Choose the Right Player for Your Supported Device">
        <p>Your device determines the appropriate installation route. For compatible Fire OS and Android devices, our own app uses Downloader code 4330396. TiviMate is an alternative for supported TV devices. Smart TVs use a suitable player for their operating system. Samsung Tizen and LG webOS models do not use an Android APK simply because they are Smart TVs. For iPhone and iPad, options include iPlayTV AIO, UHF IPTV, GSE Smart IPTV and IBO Player Pro where compatible. Windows, Mac and Roku also need a player matched to the device and available version. Check the model and any player licence before purchasing.</p>
        <Link href={routes.installationGuide} className={linkClass}>Find Your Device Instructions</Link>
      </Section>

      <Section title="Check Programme Guides, Catch-Up and Content Request Options">
        <p>Our EPG programme information and catch-up availability are limited. A channel may play without a complete guide, and a programme listed in the schedule may have no available replay. Check the specific channels during your trial if those features matter to you. For a missing film, send the title, release year and preferred language. For a series, include the season and episode. Mention subtitles or a preferred version where relevant. Support will check whether the requested content can be added. For a live event, include its name and scheduled date when asking for current information.</p>
        <Link href={enquiryWhatsApp("content-request")} target="_blank" rel="noopener noreferrer" className={linkClass}>Send a Content or Event Enquiry</Link>
      </Section>

      <Section title="Protect Your Account Information When Asking for Help">
        <p>Keep passwords and full private playlist links out of public posts and screenshots. Use your account reference, device and player name to explain the issue. Send sensitive account details only through the verified support route when required. If another household member needs access, follow the confirmed connection and device arrangement. An additional app installation does not increase the subscription’s simultaneous viewing allowance.</p>
      </Section>

      <Section title="Find Subscription Prices, Installation Instructions and Customer Support">
        <p>Compare durations and connections on Pricing, follow the Installation Guide for your device, or ask support about a trial and content availability. For business access, the Reseller Panel page explains the 120-credit minimum and personal branding options.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={routes.subscriptionPlans} className={linkClass}>Compare Subscription Prices</Link>
          <Link href={routes.installationGuide} className={linkClass}>Read the Installation Guide</Link>
          <Link href={routes.resellerPanel} className={linkClass}>Explore Reseller Options</Link>
          <Link href={routes.contactUs} className={linkClass}>Contact Strong 8k</Link>
        </div>
      </Section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
