import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { BlogFeaturedImage } from "@/components/blog/blog-featured-image";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { createPageMetadata, enquiryWhatsApp } from "@/lib/site";
import { routes } from "@/lib/routes";
import { getBlogBySlug } from "@/data/blogs";

const post = getBlogBySlug("install-strong-8k-iptv-on-firestick")!;

export const metadata: Metadata = createPageMetadata({
  title: post.metaTitle,
  description: post.description,
  path: post.path,
});

const cardStyle = {
  backgroundColor: "var(--feature-card-bg)",
  borderColor: "var(--feature-card-border)",
  boxShadow: "var(--feature-card-shadow)",
} as const;

const buttonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all hover:brightness-110 sm:text-[15px]";

const QUICK_STEPS = [
  "Connect your Amazon Firestick to your television and internet connection.",
  "Open the Amazon Appstore.",
  "Search for a compatible IPTV player, such as IPTV Smarters or another supported application.",
  "Select the application and click Download or Get.",
  "Open the installed IPTV player.",
  "Choose the appropriate login method, such as Xtream Codes or M3U.",
  "Enter the subscription details provided by the Strong8K support team.",
  "Submit your information and wait for the channels and content to load.",
] as const;

const REQUIREMENT_ROWS = [
  ["Amazon Firestick", "Your streaming device"],
  ["Stable internet connection", "For loading and watching content"],
  ["Compatible IPTV player", "To access your subscription"],
  ["Strong8K subscription or trial", "Provides your viewing access"],
  ["Login details", "Connects the player to your subscription"],
  ["Firestick remote", "Used to navigate the settings and application"],
] as const;

const PLAYER_OPTIONS = [
  "IPTV Smarters.",
  "TiviMate, where available.",
  "Other compatible IPTV players.",
] as const;

const LOGIN_OPTIONS = [
  "Login with Xtream Codes API.",
  "Load M3U Playlist.",
  "Add Playlist.",
  "Add User.",
] as const;

const XTREAM_FIELDS = [
  ["Any Name", "A name for your playlist, such as Strong8K"],
  ["Username", "Your supplied username"],
  ["Password", "Your supplied password"],
  ["Server URL", "The supplied server address"],
] as const;

const CONTENT_CATEGORIES = [
  "Live TV.",
  "Movies.",
  "TV Series.",
  "Catch-up, where available.",
  "Electronic Programme Guide (EPG).",
] as const;

const DOWNLOADER_INSTALL = [
  "Open the Amazon Appstore.",
  "Search for Downloader by AFTVnews.",
  "Select the application.",
  "Click Get or Download.",
  "Wait for installation.",
] as const;

const PERMISSION_STEPS = [
  "Open Settings.",
  "Select My Fire TV or Device and Software.",
  "Open Developer Options.",
  "Select Install Unknown Apps.",
  "Enable permission for Downloader.",
] as const;

const LOGIN_COMPARE = [
  ["Login method", "Server URL, username, password", "Playlist URL"],
  ["Setup", "Enter separate login fields", "Paste the complete URL"],
  ["EPG", "Supported by compatible players", "Depends on the player and supplied EPG information"],
  ["Best for", "Players with Xtream login support", "Players with M3U support"],
] as const;

const EPG_STEPS = [
  "Open your IPTV player.",
  "Navigate to Settings.",
  "Find the EPG or TV Guide section.",
  "Select Add EPG Source if available.",
  "Enter the EPG URL supplied by your provider.",
  "Refresh or update the guide.",
] as const;

const PROBLEM_ROWS = [
  ["IPTV player not opening", "Restart Firestick and update the application"],
  ["Channels not loading", "Refresh the playlist and check login details"],
  ["Invalid login error", "Verify username, password, and server URL"],
  ["Buffering", "Check Wi-Fi stability and reduce network congestion"],
  ["Black screen", "Try another channel and restart the player"],
  ["EPG not loading", "Refresh the guide or check the EPG URL"],
  ["Application crashing", "Clear the app cache and restart Firestick"],
  ["Subscription not connecting", "Contact support to check your account"],
] as const;

const BUFFERING_FIXES = [
  "Restart your Firestick.",
  "Restart your Wi-Fi router.",
  "Use a stable 5 GHz Wi-Fi connection where available.",
  "Connect through Ethernet if supported.",
  "Close unnecessary background applications.",
  "Clear the IPTV player's cache.",
  "Test another channel.",
] as const;

const FAQS = [
  {
    q: "1. How do I install Strong 8K IPTV on Firestick?",
    a: "Download a compatible IPTV player from the Amazon Appstore, open it, and enter your Strong8K subscription details using Xtream Codes or an M3U playlist. Once connected, your available channels and content will load.",
  },
  {
    q: "2. Can I install Strong8K IPTV directly from the Amazon Appstore?",
    a: "You can install a compatible IPTV player from the Amazon Appstore. Whether a dedicated Strong8K application is available depends on the current app listing and device compatibility. Contact support for the recommended installation method.",
  },
  {
    q: "3. Do I need Downloader to install Strong 8K on Firestick?",
    a: "Not necessarily. If your preferred IPTV player is available through the Amazon Appstore, you can install it directly. Downloader is only needed when using a compatible sideloading method.",
  },
  {
    q: "4. Which IPTV player should I use for Strong 8K on Firestick?",
    a: "You can consider IPTV Smarters or TiviMate, depending on availability and compatibility. Check which player supports the login details supplied with your subscription. Some applications require a separate licence.",
  },
  {
    q: "5. How do I add Strong 8K IPTV to IPTV Smarters on Firestick?",
    a: "Open IPTV Smarters, select the Xtream Codes login option, enter your username, password, and server URL, and submit the information. If you receive an M3U playlist, choose the corresponding playlist option instead.",
  },
  {
    q: "6. Can I use Strong8K IPTV on Firestick 4K and Fire TV Stick 4K Max?",
    a: "Compatible Fire TV Stick 4K and 4K Max devices can run supported IPTV players. Check the application requirements and Fire OS compatibility before installing.",
  },
  {
    q: "7. Can I use my Strong8K subscription on multiple Firesticks?",
    a: "This depends on the simultaneous connection allowance included in your subscription. Installing an application on multiple devices does not automatically mean all devices can stream at the same time. Confirm your plan's connection limits with support.",
  },
  {
    q: "8. Why is Strong 8K IPTV buffering on Firestick?",
    a: "Buffering may be caused by unstable Wi-Fi, network congestion, device performance, or an issue with a particular stream. Restart your router, test your internet connection, and try another channel.",
  },
  {
    q: "9. Why are my Strong8K channels not loading?",
    a: "Check whether your subscription is active and your login details are correct. Refresh the playlist, restart the application, and test your connection. If the problem continues, contact support.",
  },
  {
    q: "10. Can I use Strong 8K IPTV without an 8K television?",
    a: "Yes. You do not need an 8K television to use the service on a compatible Firestick. The available playback resolution depends on the content, player, device, and television.",
  },
  {
    q: "11. Do I need a separate IPTV subscription to use TiviMate or IPTV Smarters?",
    a: "Yes. IPTV Smarters and TiviMate are player applications. They do not automatically provide television channels or movies. You need a compatible subscription, such as Strong8K, and the required login details.",
  },
  {
    q: "12. How can I get help setting up Strong 8K IPTV on Firestick?",
    a: "Contact the Strong8K support team through WhatsApp or the official website. Share your Firestick model and the IPTV player you are using so the team can provide the appropriate setup instructions.",
  },
] as const;

export default function InstallStrong8kIptvOnFirestickPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs
        items={[
          { name: "Home", path: routes.home },
          { name: "Blogs", path: routes.blogs },
          { name: post.navLabel, path: post.path },
        ]}
      />

      <section className="relative isolate overflow-hidden pb-10 pt-32 sm:pt-36">
        <Container className="relative z-10 max-w-4xl">
          <HeroReveal delay={0.05}>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "var(--hero-pill-border)",
                backgroundColor: "transparent",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--hero-accent)" }}>
                Firestick Setup
              </span>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <h1
              className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              How to Install or Set Up Strong 8K IPTV on Firestick? Complete Guide
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px] md:text-base" style={{ color: "var(--hero-muted)" }}>
              <p>
                Want to watch Strong 8K IPTV on your Amazon Firestick but don&apos;t know how to install or configure it? The setup process is straightforward once you have a compatible IPTV player and your subscription details.
              </p>
              <p>
                Strong 8K IPTV allows customers to access available live TV channels, movies, and series through compatible streaming devices. On Firestick, you can use a supported IPTV application, add your subscription details, and start watching.
              </p>
              <p>
                Whether you searched for how to install Strong 8K on Firestick, Strong8K IPTV Firestick setup, or Strong 8K IPTV installation, this guide explains the complete process in simple steps.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <BlogFeaturedImage src={post.image} alt={post.imageAlt} />
          </HeroReveal>
        </Container>
      </section>

      {/* Quick install overview */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Install Strong 8K IPTV on Firestick
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
              <p>
                To install Strong 8K IPTV on Firestick, first download a compatible IPTV player from the Amazon Appstore. Then open the player, enter the subscription details provided by Strong8K, and load your available channels and content.
              </p>
              <p>Follow these steps to complete the setup:</p>
            </RevealParts>
          </div>

          <ol className="mt-8 space-y-3">
            {QUICK_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Once the setup is complete, you can browse the available live TV channels, movies, and series through your IPTV player.
          </p>
        </Container>
      </section>

      {/* Requirements */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              What Do You Need Before Setting Up Strong8K IPTV on Firestick?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Before starting the installation, make sure you have everything required.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Requirement</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {REQUIREMENT_ROWS.map(([requirement, purpose]) => (
                  <tr key={requirement} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{requirement}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              You can request a free trial from Strong8K before purchasing a subscription. This allows you to test the service on your Firestick and check whether it meets your requirements.
            </p>
            <p>
              <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>Important:</span> Strong 8K IPTV is the subscription service, while applications such as IPTV Smarters and TiviMate are separate players. Some IPTV players may require a separate licence or payment.
            </p>
          </div>
        </Container>
      </section>

      {/* Detailed steps */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Step-by-Step Guide to Set Up Strong 8K IPTV on Firestick
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            If you want a more detailed explanation, follow the steps below.
          </p>

          <div className="mt-8 space-y-5">
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>1</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Open the Amazon Appstore</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Turn on your Firestick and go to the home screen.</p>
                <p>Navigate to the Find or Search option and open the Amazon Appstore. Search for your preferred compatible IPTV player.</p>
                <p>You can check applications such as:</p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  {PLAYER_OPTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Choose an application that supports your subscription&apos;s login method.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>2</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Download and Install an IPTV Player</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>After finding your preferred application, open its listing.</p>
                <p>Select Download or Get and wait for the installation to finish.</p>
                <p>Once installed, choose Open to launch the application.</p>
                <p>If the player is not available in your Amazon Appstore, contact Strong8K support to confirm an alternative installation method for your Firestick model.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>3</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Open the IPTV Application</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>When you launch the IPTV player, you may see different options for adding an account or playlist.</p>
                <p>Depending on the application, these may include:</p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  {LOGIN_OPTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Select the method that matches the subscription details supplied by Strong8K.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>4</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Enter Your Strong 8K IPTV Login Details</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>After selecting the login method, enter the information provided by the support team.</p>
                <p>For an Xtream Codes login, you generally need:</p>
              </div>
              <div className="mt-4 overflow-x-auto rounded-xl border" style={{ borderColor: "var(--feature-card-border)" }}>
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                      <th className="px-4 py-3 font-bold" style={{ color: "var(--hero-heading)" }}>Login field</th>
                      <th className="px-4 py-3 font-bold" style={{ color: "var(--hero-heading)" }}>Information required</th>
                    </tr>
                  </thead>
                  <tbody>
                    {XTREAM_FIELDS.map(([field, info]) => (
                      <tr key={field} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: "var(--hero-heading)" }}>{field}</td>
                        <td className="px-4 py-3" style={{ color: "var(--hero-muted)" }}>{info}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Enter the details carefully because usernames and passwords may be case-sensitive.</p>
                <p>If you receive an M3U playlist instead, select the M3U option and enter the complete playlist URL.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>5</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Load Your Channels and VOD Library</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>After entering your details, select Login, Add User, or the relevant confirmation option.</p>
                <p>The application will connect to your subscription and load the available content.</p>
                <p>Depending on your player, you may see separate categories for:</p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  {CONTENT_CATEGORIES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Wait for the playlist and channel information to finish loading before navigating through the application.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>6</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Organise Your IPTV Channels</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Many IPTV players offer additional features to make browsing easier.</p>
                <p>You can organise favourite channels, browse categories, and use the electronic programme guide where supported.</p>
                <p>You may also be able to adjust playback settings, language preferences, and parental controls.</p>
                <p>Your available options depend on the IPTV player you have installed.</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Downloader method */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Install Strong 8K IPTV Using Downloader on Firestick
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Some compatible Fire TV devices allow users to install Android applications through the Downloader app. This process is commonly called sideloading.
            </p>
            <p>
              Use this method only if Strong8K support provides an official, compatible download link or installation instructions for your device.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 1: Install Downloader</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                {DOWNLOADER_INSTALL.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 2: Enable Installation Permissions</h3>
              <p className="mt-4 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                On Fire TV models that support sideloading:
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                {PERMISSION_STEPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  If Developer Options is not visible, some Fire TV versions allow you to reveal it by opening Settings, selecting My Fire TV, going to About, highlighting the device name, and pressing the Select button seven times.
                </p>
                <p>
                  Menu names and availability vary by Fire OS version and device model. Some newer Fire TV models may restrict sideloading.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 3: Enter the Official Download Link</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Open Downloader and enter the installation link provided by the Strong8K support team.</p>
                <p>Check that the download comes from a trusted source before proceeding. Avoid random APK websites and unverified Downloader codes.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 4: Install the Application</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Once the APK downloads, open the installation prompt and select Install if the application is compatible with your device.
                </p>
                <p>After installation, launch the application and follow the login instructions provided by Strong8K.</p>
                <p>
                  <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>Note:</span> Installing an APK does not automatically activate your subscription. You still need the correct account details.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Xtream vs M3U */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Set Up Strong8K IPTV Using Xtream Codes or M3U Playlist
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>Strong8K may provide different login formats depending on the supported player and account configuration.</p>
            <p>Understanding the difference helps you choose the correct setup method.</p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Feature</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Xtream Codes</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>M3U Playlist</th>
                </tr>
              </thead>
              <tbody>
                {LOGIN_COMPARE.map(([feature, xtream, m3u]) => (
                  <tr key={feature} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{feature}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{xtream}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{m3u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>If you are unsure which method to use, ask the support team for the correct details for your Firestick application.</p>
            <p>Never share your login information publicly.</p>
          </div>
        </Container>
      </section>

      {/* EPG */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Set Up EPG on Strong 8K IPTV
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              EPG stands for Electronic Programme Guide. It displays information about television programmes, including programme names, schedules, and descriptions where available.
            </p>
            <p>If your IPTV player supports external EPG configuration, follow these general steps:</p>
          </div>

          <ol className="mt-8 space-y-3">
            {EPG_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Not every player requires a separate EPG URL. Some applications load programme information automatically through the playlist or account connection.
          </p>
        </Container>
      </section>

      {/* Troubleshooting */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Strong 8K IPTV Not Working on Firestick? Common Problems and Fixes
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Sometimes Strong 8K IPTV may not work as expected after installation. The problem does not always mean the service is down. It may be related to your internet connection, application, or account settings.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Problem</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Possible solution</th>
                </tr>
              </thead>
              <tbody>
                {PROBLEM_ROWS.map(([problem, solution]) => (
                  <tr key={problem} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{problem}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 space-y-5">
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Fix IPTV Buffering on Firestick</h3>
              <p className="mt-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                If channels keep stopping during playback, try the following:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                {BUFFERING_FIXES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Fix Strong8K Login Problems</h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>If your IPTV player displays an authentication error, check your account information.</p>
                <p>
                  Make sure the username, password, and server URL are entered correctly. If you continue receiving an error, contact Strong8K support and ask them to verify your subscription details.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Frequently Asked Questions About Strong 8K IPTV on Firestick
            </h2>
          </FadeIn>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <article key={faq.q} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold sm:text-[17px]" style={{ color: "var(--hero-heading)" }}>
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <div className="rounded-2xl border px-6 py-10 text-center sm:px-10 sm:py-14" style={cardStyle}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Start Watching Strong 8K IPTV on Your Firestick
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              <p>
                Setting up Strong 8K IPTV on Firestick is simple when you follow the correct installation and login steps. Install a compatible IPTV player, add your subscription details, and load your available channels and on-demand content.
              </p>
              <p>
                If you have not subscribed yet, you can contact the Strong8K team to request a free trial and test the service on your device before choosing a plan.
              </p>
              <p>
                Already have a subscription but need installation assistance? Visit{" "}
                <Link href={routes.home} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                  8K-Strong.us
                </Link>{" "}
                and contact the support team for help with your Firestick setup, login details, and technical questions.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={routes.installationGuide} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
                View Installation Guide
              </Link>
              <Link
                href={enquiryWhatsApp("installation")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Get Firestick Setup Help
              </Link>
              <Link
                href={enquiryWhatsApp("free-trial")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Request Free Trial
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
