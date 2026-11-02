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
import { createPageMetadata, enquiryWhatsApp, siteConfig } from "@/lib/site";
import { routes } from "@/lib/routes";
import { getBlogBySlug } from "@/data/blogs";

const post = getBlogBySlug("strong-8k-down")!;

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

const SYMPTOM_ROWS = [
  ["All channels are not working", "Connection, account, or service-side issue"],
  ["Only one channel is unavailable", "Temporary channel or source problem"],
  ["Channels keep buffering", "Unstable internet or playback issue"],
  ["Black screen appears", "Player, stream, or device issue"],
  ["Login details are rejected", "Incorrect credentials or account issue"],
  ["Movies are not loading", "VOD availability or application issue"],
  ["IPTV works on one device but not another", "Device or player configuration issue"],
  ["Service stopped after subscription expiry", "Subscription renewal required"],
] as const;

const BUFFERING_FIXES = [
  ["Restart your router", "Refreshes the network connection"],
  ["Restart your IPTV device", "Clears temporary device problems"],
  ["Use Ethernet", "Provides a more consistent connection"],
  ["Switch to 5 GHz Wi-Fi", "May reduce interference"],
  ["Close background applications", "Frees device resources"],
  ["Clear the app cache", "Removes temporary cached files"],
  ["Update the IPTV player", "Addresses possible application bugs"],
  ["Test another channel", "Helps identify source-specific issues"],
  ["Check your subscription", "Rules out account expiry"],
  ["Contact support", "Helps investigate account or service-side problems"],
] as const;

const DEVICE_CHECK_ROWS = [
  ["Samsung Smart TV", "Compatible IPTV application, internet connection, and playlist"],
  ["LG Smart TV", "Application compatibility, webOS version, and account details"],
  ["Android TV", "Player updates, app cache, and login information"],
  ["Android phone", "Mobile data or Wi-Fi connection and application permissions"],
  ["iPhone and iPad", "Compatible IPTV player, network connection, and account configuration"],
  ["Apple TV", "Supported IPTV player and subscription credentials"],
  ["Windows PC", "Network connection, player compatibility, and account details"],
] as const;

const FIRESTICK_STEPS = [
  {
    step: "1",
    title: "Restart your Firestick",
    desc: "Go to Settings, select My Fire TV, and choose Restart. You can also disconnect the power supply briefly before reconnecting it.",
  },
  {
    step: "2",
    title: "Check your internet connection",
    desc: "Open your Firestick network settings and verify that your device is connected to the correct Wi-Fi network.",
  },
  {
    step: "3",
    title: "Clear the IPTV application cache",
    desc: "Go to Settings, Applications, Manage Installed Applications, and select your IPTV player. Choose Clear Cache.",
  },
  {
    step: "4",
    title: "Check your subscription details",
    desc: "Make sure your account is active and the correct credentials have been entered.",
  },
  {
    step: "5",
    title: "Update your application",
    desc: "Check whether an update is available from the official application source.",
  },
  {
    step: "6",
    title: "Test another channel",
    desc: "If other channels work, the problem may be limited to the original channel.",
  },
] as const;

const PREVENTION_HABITS = [
  {
    title: "Keep your application updated",
    desc: "Install compatible updates from trusted sources.",
  },
  {
    title: "Maintain a stable internet connection",
    desc: "Use a suitable Wi-Fi connection or Ethernet where possible.",
  },
  {
    title: "Check your subscription expiry",
    desc: "Keep track of your renewal date to avoid unexpected interruptions.",
  },
  {
    title: "Keep your device updated",
    desc: "Install operating system updates when they are available for your device.",
  },
  {
    title: "Avoid unnecessary application changes",
    desc: "Do not repeatedly delete and reinstall your IPTV player without understanding the problem.",
  },
  {
    title: "Test important content in advance",
    desc: "If you plan to watch a particular live event, check its availability and playback before it starts.",
  },
  {
    title: "Keep your account details accessible",
    desc: "Store your subscription information securely so you can re-enter it when necessary.",
  },
] as const;

const FAQS = [
  {
    q: "1. Is Strong 8K down right now?",
    a: "A search for Strong 8K down does not confirm a live outage. If your service is not working, first check your internet connection, subscription status, and IPTV application. Contact official support to confirm whether there is a wider service issue.",
  },
  {
    q: "2. Why is Strong8K IPTV not working today?",
    a: "Strong8K IPTV may stop working because of an unstable internet connection, application errors, incorrect login information, an expired subscription, or temporary channel availability problems. Check whether the issue affects all channels or only one.",
  },
  {
    q: "3. Why are all my Strong 8K channels not loading?",
    a: "If all channels fail to load, check your internet connection and account credentials first. Restart your device and IPTV player. If the same problem continues across compatible devices, contact support for further investigation.",
  },
  {
    q: "4. Why is Strong 8K IPTV buffering?",
    a: "Buffering can happen because of weak Wi-Fi, network congestion, device limitations, application problems, or an unstable video source. Try restarting your router, using Ethernet, closing background applications, and testing another channel.",
  },
  {
    q: "5. Is Strong8K down or is my internet connection causing the problem?",
    a: "Test another online application and try your IPTV subscription on another compatible device. If other online services work but IPTV fails everywhere, contact Strong8K support. If the problem only occurs on one device, investigate its network and application settings.",
  },
  {
    q: "6. Why is Strong 8K showing a black screen?",
    a: "A black screen may indicate a problem with the video stream, IPTV player, device compatibility, or application configuration. Restart your player, test another channel, and check whether the problem occurs with all content.",
  },
  {
    q: "7. What should I do if Strong8K login is not working?",
    a: "Check your username, password, and server URL. Make sure you are using the correct login format for your IPTV application. If the details are correct but the login still fails, ask support to check your account.",
  },
  {
    q: "8. Is Strong 8K IPTV down on Firestick?",
    a: "Not necessarily. If Strong 8K IPTV is not working on Firestick, restart your device, check your Wi-Fi, clear the application cache, and verify your subscription details. If other devices work normally, the problem may be specific to your Firestick setup.",
  },
  {
    q: "9. Why are some Strong8K channels working while others are not?",
    a: "This may indicate that the issue is limited to particular channels or content sources rather than your entire subscription. Try another channel in the same category and report the affected channel names to support.",
  },
  {
    q: "10. Can a VPN fix Strong 8K IPTV connection problems?",
    a: "A VPN may help diagnose certain routing or network-related problems, but it is not a guaranteed solution. Test your connection with and without a VPN, where permitted, and compare the results. If the issue remains, contact support.",
  },
  {
    q: "11. Does restarting my router fix Strong 8K IPTV?",
    a: "It can help if your router has a temporary connection problem. Restarting refreshes your network connection, but it will not fix an expired subscription, incorrect login details, or an unavailable content source.",
  },
  {
    q: "12. What information should I send to Strong8K support?",
    a: "Provide your subscription reference, device model, IPTV player name, error message, and a screenshot if possible. Also mention whether all channels are affected or only specific ones. This makes it easier for the team to investigate.",
  },
] as const;

export default function Strong8kDownPage() {
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

      {/* Hero: title + intro description, then image placeholder */}
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
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--hero-accent)" }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Troubleshooting Guide
              </span>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <h1
              className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Is Strong 8K Down? How to Check Strong8K IPTV Status and Fix Streaming Problems
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <div
              className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                Are you trying to watch your favourite channels but Strong 8K IPTV isn&apos;t working? Maybe your channels won&apos;t load, the screen shows an error, or your IPTV player keeps buffering. When this happens, it is natural to search for terms like Strong 8K down, Strong8K down, or Strong 8K IPTV down to find out whether the service is experiencing an outage.
              </p>
              <p>
                However, not every streaming problem means the entire service is down. Sometimes the issue comes from your internet connection, IPTV application, device settings, expired subscription, or login details.
              </p>
              <p>
                In this guide, we explain how to check whether Strong 8K is down, identify common streaming problems, and follow practical troubleshooting steps to restore playback.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <BlogFeaturedImage src={post.image} alt={post.imageAlt} />
          </HeroReveal>
        </Container>
      </section>

      {/* Is Strong 8K Down Right Now? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Is Strong 8K Down Right Now?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
              <p>
                If Strong 8K IPTV is not working, it does not necessarily mean the service is experiencing an outage. The problem could be related to your device, internet connection, IPTV player, subscription status, or a temporary issue affecting a particular channel.
              </p>
              <p>
                Before assuming that Strong8K is down, try opening another channel, restarting your IPTV application, and checking your internet connection.
              </p>
              <p>
                Here is a quick way to understand what might be happening:
              </p>
            </RevealParts>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>What you are experiencing</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Possible reason</th>
                </tr>
              </thead>
              <tbody>
                {SYMPTOM_ROWS.map(([symptom, reason]) => (
                  <tr key={symptom} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{symptom}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            The first step is to identify the exact problem instead of immediately changing your settings.
          </p>
        </Container>
      </section>

      {/* How to Check Strong8K IPTV Server Status */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Check Strong8K IPTV Server Status
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            If you think Strong8K IPTV is down, you should check whether the problem affects your individual setup or the wider service. Follow these steps before making any changes.
          </p>

          <div className="mt-8 space-y-5">
            {/* Step 1 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  1
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Check Multiple Channels
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Start by opening several channels from different categories. For example, try:</p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>A general entertainment channel.</li>
                  <li>A news channel.</li>
                  <li>A sports channel.</li>
                  <li>An international channel.</li>
                  <li>A movie or VOD title.</li>
                </ul>
                <p>
                  If one channel does not open but the others work normally, the issue may be limited to that particular stream.
                </p>
                <p>
                  If all channels fail, continue with the remaining checks.
                </p>
              </div>
            </article>

            {/* Step 2 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  2
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Test Strong8K on Another Device
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  If possible, open your subscription on another compatible device.
                </p>
                <p>
                  For example, if you normally use an Amazon Fire TV Stick, try testing the same account on an Android phone or another supported device, subject to your subscription&apos;s simultaneous connection allowance.
                </p>
                <p>
                  This helps identify whether the problem is related to your original device or something affecting the account or connection.
                </p>
              </div>
            </article>

            {/* Step 3 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  3
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Check Your Internet Connection
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Open another application, such as YouTube or a website, and see whether it loads normally.
                </p>
                <p>
                  You can also run an internet speed test using a trusted service such as{" "}
                  <a
                    href="https://www.speedtest.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    Speedtest by Ookla
                  </a>
                  .
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  Pay attention to:
                </p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>Download speed.</li>
                  <li>Connection stability.</li>
                  <li>Latency.</li>
                  <li>Packet loss, if your testing tool provides it.</li>
                </ul>
                <p>
                  A high download speed does not always guarantee smooth streaming. An unstable connection can still cause buffering and playback interruptions.
                </p>
              </div>
            </article>

            {/* Step 4 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  4
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Contact Strong8K Support
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  If multiple channels fail across compatible devices and your internet connection is working, contact the Strong8K support team.
                </p>
                <p>
                  You can reach out through WhatsApp or the official email address listed on the website ({siteConfig.email}).
                </p>
                <p>
                  Provide your device model, IPTV player name, subscription reference, and a screenshot of the error message. This helps the support team understand the issue and investigate it more effectively.
                </p>
              </div>
            </article>
          </div>

          <div
            className="mt-6 rounded-2xl border p-5 sm:p-6"
            style={{
              borderColor: "var(--hero-accent)",
              backgroundColor: "rgba(212,168,75,0.06)",
            }}
          >
            <p className="text-sm leading-[1.8]" style={{ color: "var(--hero-heading)" }}>
              <strong className="font-bold text-[var(--hero-accent)]">Important:</strong> Strong8K does not currently publish a dedicated live server-status dashboard on its main website. Therefore, contact support for confirmation rather than relying on an unverified online outage claim.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Is Strong 8K IPTV Not Working? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Why Is Strong 8K IPTV Not Working?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            There are several reasons why Strong8K might stop working. Understanding the cause helps you choose the right solution without wasting time changing unnecessary settings.
          </p>

          <div className="mt-8 space-y-6">
            {/* 1. Unstable Internet Connection */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                1. Unstable Internet Connection
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  A weak or unstable internet connection is one of the common reasons for IPTV playback problems. Even when your internet package offers a good advertised speed, Wi-Fi interference, network congestion, and connection drops can affect streaming.
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  What you can do:
                </p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>Restart your Wi-Fi router.</li>
                  <li>Move your streaming device closer to the router.</li>
                  <li>Disconnect devices that are using unnecessary bandwidth.</li>
                  <li>Try a 5 GHz Wi-Fi connection where supported.</li>
                  <li>Use an Ethernet cable if your device supports it.</li>
                  <li>Run another speed test to check connection stability.</li>
                </ul>
                <p>
                  If other online applications are also struggling, the issue may be with your internet connection rather than Strong 8K.
                </p>
              </div>
            </article>

            {/* 2. IPTV Player Not Loading Channels */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                2. IPTV Player Not Loading Channels
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Sometimes the subscription is working, but the IPTV player is not loading the playlist correctly. This can happen because of temporary application problems, outdated software, or incorrect account configuration.
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  What you can do:
                </p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>Close your IPTV application.</li>
                  <li>Open it again.</li>
                  <li>Check whether your playlist or account is still connected.</li>
                  <li>Refresh the channel list if the application supports it.</li>
                  <li>Check for an available application update.</li>
                  <li>Restart your streaming device.</li>
                </ul>
                <p>
                  If the problem continues, contact support to check whether your account information needs attention.
                </p>
              </div>
            </article>

            {/* 3. Incorrect Login Details */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                3. Incorrect Login Details
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  If your IPTV application displays messages such as &quot;Invalid Username,&quot; &quot;Authentication Failed,&quot; or &quot;Login Error,&quot; check your subscription information. A small typing mistake can prevent the application from connecting.
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  Try these steps:
                </p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>Check your username and password.</li>
                  <li>Verify the server URL.</li>
                  <li>Remove any unwanted spaces.</li>
                  <li>Make sure you are using the correct login format.</li>
                  <li>Re-enter your account information carefully.</li>
                </ul>
                <p>
                  Strong8K may provide different connection methods depending on your player, including Xtream Codes credentials, an M3U playlist, or device activation. Make sure you are following the correct instructions for your application.
                </p>
              </div>
            </article>

            {/* 4. Expired Subscription */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                4. Expired Subscription
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Another possible reason for Strong 8K IPTV not working is an expired subscription. If your subscription period has ended, playback may stop even when your internet connection and application are working properly.
                </p>
                <p>
                  Check your original subscription information and expiry date. If your plan has expired, contact the support team to discuss renewal options. Once your payment and renewal have been confirmed, follow the activation instructions provided.
                </p>
              </div>
            </article>

            {/* 5. Outdated IPTV Application */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                5. Outdated IPTV Application
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  An outdated IPTV player can sometimes cause compatibility and playback problems. Applications may receive updates that improve stability, fix bugs, or support newer device operating systems.
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  What you can do:
                </p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>Check the official application store or developer website.</li>
                  <li>Install an available update.</li>
                  <li>Restart the application.</li>
                  <li>Refresh your playlist.</li>
                  <li>Test playback again.</li>
                </ul>
                <p>
                  Remember that your IPTV subscription and third-party IPTV player are separate. Updating a player does not automatically renew or change your subscription.
                </p>
              </div>
            </article>

            {/* 6. Device Storage or Cache Problems */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                6. Device Storage or Cache Problems
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Streaming devices with limited available storage can sometimes become slow or unresponsive. Temporary application files and cached data may also contribute to performance problems.
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  On supported Fire TV devices, you can check the application cache by following these steps:
                </p>
                <ol className="list-inside list-decimal space-y-1.5 pl-1">
                  <li>Open Settings.</li>
                  <li>Select Applications.</li>
                  <li>Choose Manage Installed Applications.</li>
                  <li>Select your IPTV application.</li>
                  <li>Choose Clear Cache.</li>
                  <li>Reopen the application and test playback.</li>
                </ol>
                <p>
                  Avoid selecting Clear Data unless necessary. Clearing application data may remove saved login details and require you to configure the application again.
                </p>
              </div>
            </article>

            {/* 7. Temporary Channel or Server Issues */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                7. Temporary Channel or Server Issues
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Sometimes a particular channel or content source becomes temporarily unavailable. This does not automatically mean the entire Strong8K IPTV service is down.
                </p>
                <p>
                  For example, if your entertainment channels are working but one sports channel is not opening, the problem may be limited to that particular source. Try another available channel or programme. If the issue continues, send the channel name and a screenshot to customer support.
                </p>
              </div>
            </article>

            {/* 8. VPN or Network Configuration Problems */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                8. VPN or Network Configuration Problems
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  VPN applications, DNS settings, firewalls, and network configurations can sometimes affect how an IPTV player connects to a service. If you use a VPN, temporarily compare playback with and without it, provided this is permitted by your network and applicable service terms.
                </p>
                <p>
                  You can also restart your router and check whether your device has the correct network settings. Avoid changing multiple DNS or network settings at once. Test one change at a time so you can identify what actually fixes the issue.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* How to Fix Strong 8K IPTV Buffering */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Fix Strong 8K IPTV Buffering
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              If Strong8K opens but the picture keeps stopping, the problem may be related to buffering rather than a complete outage. Buffering happens when the player cannot receive video data quickly or consistently enough to maintain playback.
            </p>
            <p>
              Here are some practical solutions:
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Troubleshooting step</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Why it may help</th>
                </tr>
              </thead>
              <tbody>
                {BUFFERING_FIXES.map(([step, help]) => (
                  <tr key={step} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{step}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Does Internet Speed Affect Strong8K Playback? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Does Internet Speed Affect Strong8K Playback?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Yes. Your internet speed and connection stability both influence streaming quality. The bandwidth you need depends on the resolution, stream bitrate, device, and number of simultaneous streams.
            </p>
            <p>
              For example, UHD playback generally requires more bandwidth than standard HD playback. If several people are streaming, downloading files, or gaming on the same network, your available bandwidth may decrease.
            </p>
            <p>
              Try testing the service when fewer devices are using the connection. If playback improves, network congestion may be contributing to the problem.
            </p>
          </div>
        </Container>
      </section>

      {/* Strong 8K IPTV Not Working on Firestick */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Strong 8K IPTV Not Working on Firestick: What Should You Do?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Amazon Fire TV Stick is a common device for IPTV viewing, but application and device problems can sometimes prevent channels from loading. If Strong 8K IPTV is not working on your Firestick, follow these steps.
          </p>

          <div className="mt-8 space-y-4">
            {FIRESTICK_STEPS.map((item) => (
              <article key={item.step} className="flex gap-4 rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--hero-heading)" }}>
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            If the issue continues, contact Strong8K support and mention your Fire TV Stick model and the exact error message.
          </p>
        </Container>
      </section>

      {/* Strong8K IPTV Not Working on Smart TV, Android, or iPhone */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Strong8K IPTV Not Working on Smart TV, Android, or iPhone
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            The troubleshooting process can vary depending on the device you use:
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Device</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>What to check</th>
                </tr>
              </thead>
              <tbody>
                {DEVICE_CHECK_ROWS.map(([device, check]) => (
                  <tr key={device} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{device}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            If your subscription works on another compatible device but not on your television, the problem may be related to the original device or player. You can also consult the{" "}
            <Link href={routes.installationGuide} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
              Strong8K Installation Guide
            </Link>{" "}
            for device-specific setup assistance.
          </p>
        </Container>
      </section>

      {/* How to Contact Strong8K Support if the Service Is Still Down */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Contact Strong8K Support if the Service Is Still Down
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              If you have completed the basic troubleshooting steps and Strong 8K IPTV is still not working, contacting support is the next sensible step. Instead of simply sending a message saying &quot;Strong8K is down,&quot; provide enough information for the team to investigate.
            </p>
            <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
              Include the following:
            </p>
          </div>

          <div className="mt-6 rounded-2xl border p-6 sm:p-7" style={cardStyle}>
            <ul className="space-y-2.5 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>Your subscription reference.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>Your device model.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>The IPTV application you are using.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>The exact error message.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>Whether all channels are affected or only some.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>Whether the same problem occurs on another device.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
                <span>A screenshot or short recording of the issue, if possible.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              This information helps the support team identify whether the problem is related to your account, device, application, network, or an unavailable stream.
            </p>
            <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
              You can contact Strong8K through:
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-1">
              <li>
                <strong>WhatsApp:</strong> Use the contact option on the official website.
              </li>
              <li>
                <strong>Email:</strong> {siteConfig.email}.
              </li>
            </ul>
            <p>
              Strong8K provides customer assistance for subscription questions, installation, account information, and playback problems.
            </p>
          </div>
        </Container>
      </section>

      {/* How to Avoid Future Strong 8K IPTV Problems */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Avoid Future Strong 8K IPTV Problems
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Although no internet-based streaming service can guarantee uninterrupted playback at all times, a few simple practices can help reduce common problems:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PREVENTION_HABITS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            These habits can make troubleshooting easier and help you maintain a more consistent viewing experience.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Frequently Asked Questions About Strong 8K Being Down
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
              Still Experiencing Strong 8K IPTV Problems? Contact Our Support Team
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              <p>
                If you have tried the troubleshooting steps and Strong 8K is still not working, you do not need to keep changing your device settings without knowing the cause.
              </p>
              <p>
                Contact the Strong8K support team and explain what is happening. Whether you are experiencing buffering, channels not loading, login problems, a black screen, or a possible service interruption, the team can help investigate the issue.
              </p>
              <p>
                You can also request assistance with subscription details, device compatibility, and installation. Before contacting support, keep your subscription reference and a screenshot of the error ready. This will help us understand the problem and guide you towards the appropriate next step.
              </p>
              <p>
                Visit{" "}
                <Link href={routes.home} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                  8K-Strong.us
                </Link>{" "}
                or contact our team through WhatsApp for assistance.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={routes.subscriptionPlans} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
                View Subscription Plans
              </Link>
              <Link
                href={enquiryWhatsApp("playback")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Contact Support on WhatsApp
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
