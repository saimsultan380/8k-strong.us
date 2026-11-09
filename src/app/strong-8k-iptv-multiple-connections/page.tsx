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

const post = getBlogBySlug("strong-8k-iptv-multiple-connections")!;

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

const DEVICE_EXAMPLES = [
  "Amazon Firestick",
  "Android TV",
  "Smart TV",
  "Android smartphone",
  "iPhone or iPad",
  "Android TV box",
  "Tablet",
] as const;

const CONNECTION_ROWS = [
  ["Watching on one Firestick", "One active connection"],
  ["Watching on one Smart TV", "One active connection"],
  ["Watching on a Firestick and phone simultaneously", "Two active connections"],
  ["Watching on two televisions simultaneously", "Two active connections"],
  ["Watching on three devices simultaneously", "Three active connections"],
] as const;

const BENEFITS = [
  {
    title: "1. Watch on Different Televisions",
    body: [
      "You may have more than one television at home. For example, one television might be in the living room, while another is in a bedroom.",
      "With a subscription that supports the required simultaneous connections, different household members can watch on separate televisions without having to take turns.",
    ],
  },
  {
    title: "2. Use IPTV on Different Devices",
    body: [
      "You do not always need to watch IPTV on your main television. You can also use a compatible player on a smartphone, tablet, or other supported device.",
      "This provides flexibility when you are away from your usual viewing area or want to watch something privately.",
    ],
  },
  {
    title: "3. Better Convenience for Families",
    body: [
      "Different family members may prefer different channels, programmes, or sports events.",
      "Multiple connections can help households avoid conflicts over which television gets used, provided the subscription allows everyone to stream simultaneously.",
    ],
  },
  {
    title: "4. Switch Between Devices",
    body: [
      "Even if you do not need simultaneous playback, accessing your subscription from different compatible devices can be convenient.",
      "For example, you may watch on your Smart TV in the evening and use your phone at another time. Always follow the provider's device and connection policies.",
    ],
  },
  {
    title: "5. More Flexible Entertainment",
    body: [
      "A suitable multi-connection arrangement can make your IPTV setup more practical. You can choose the devices that suit your household rather than depending on a single television.",
    ],
  },
] as const;

const DEVICE_ROWS = [
  ["Amazon Firestick", "Compatible Fire TV IPTV player", "Television streaming"],
  ["Android TV", "Compatible Android IPTV player", "Home entertainment"],
  ["Android phone", "Compatible Android IPTV player", "Mobile viewing"],
  ["Smart TV", "Compatible TV application, if supported", "Direct television access"],
  ["iPhone or iPad", "Compatible iOS IPTV player", "Mobile and tablet viewing"],
  ["Android TV box", "Compatible Android IPTV player", "Television streaming"],
] as const;

const CONFIRM_ITEMS = [
  "The number of permitted simultaneous connections",
  "Whether additional connections are available",
  "Whether there are device restrictions",
  "Whether the same login details can be used on multiple devices",
  "Any applicable upgrade charges",
] as const;

const LOGIN_METHODS = [
  "Xtream Codes API login",
  "M3U playlist URL",
  "Other supported login details",
] as const;

const NEED_ROWS = [
  ["Individual user with one television", "One simultaneous connection"],
  ["Individual using a TV and phone at different times", "One may be sufficient"],
  ["Couple watching on separate televisions", "Two simultaneous connections"],
  ["Small family using two televisions", "Two simultaneous connections"],
  ["Household using three televisions at once", "Three simultaneous connections"],
] as const;

const DIFF_ROWS = [
  ["Installing or configuring IPTV on different devices", "Streaming on multiple devices simultaneously"],
  ["Does not necessarily require extra connections", "Depends on your subscription allowance"],
  ["You may switch between devices", "Several devices may play content at once"],
  ["Refers to device compatibility and setup", "Refers to concurrent usage"],
] as const;

const SPEED_FACTORS = [
  "The number of devices streaming simultaneously",
  "Video resolution and bitrate",
  "Wi-Fi signal strength",
  "Network congestion",
  "Other activities using your internet connection",
] as const;

const PROBLEMS = [
  {
    title: "1. IPTV Stops Working on the First Device",
    issue: "If playback stops when you start streaming on another device, your subscription may have a simultaneous connection limit.",
    solution: "Check your subscription allowance and ask Strong8K support whether your plan permits the number of active streams you are trying to use.",
  },
  {
    title: "2. Login Details Are Not Working",
    issue: "Incorrect usernames, passwords, or playlist URLs can prevent a device from connecting.",
    solution: "Check your subscription information carefully. Make sure you have not accidentally added spaces or entered incorrect characters.",
  },
  {
    title: "3. IPTV Keeps Buffering on Multiple Devices",
    issue: "Buffering may occur when several devices use the same internet connection, especially if the available bandwidth is limited.",
    solutionList: [
      "Restart your router.",
      "Move devices closer to your Wi-Fi router.",
      "Use an Ethernet connection where possible.",
      "Pause unnecessary downloads.",
      "Test playback on one device at a time.",
    ],
  },
  {
    title: "4. Playlist Is Not Loading",
    issue: "An IPTV playlist may fail to load because of an incorrect URL, expired subscription, application problem, or temporary connection issue.",
    solution: "Check your playlist details, internet connection, and subscription status. If the problem continues, contact the support team.",
  },
  {
    title: "5. One Device Works but Another Does Not",
    issue: "Different devices support different applications and playback formats. An IPTV player that works on Android may not be available on your Smart TV.",
    solution: "Check application compatibility and use a suitable player for each device. Confirm that your subscription credentials are entered correctly.",
  },
  {
    title: "6. Too Many Connections Error",
    issue: "A connection limit error may appear when the number of active streams exceeds your subscription allowance.",
    solution: "Stop playback on devices that are not being used. If you regularly need more simultaneous streams, ask Strong8K support about available upgrade options.",
  },
] as const;

const CHOOSE_POINTS = [
  {
    title: "Number of simultaneous viewers",
    body: "Count how many people may watch different content at the same time.",
  },
  {
    title: "Device compatibility",
    body: "Check whether your televisions, streaming devices, and mobile phones support a compatible IPTV player.",
  },
  {
    title: "Internet connection",
    body: "Make sure your broadband connection can handle the number of streams you plan to use.",
  },
  {
    title: "Subscription conditions",
    body: "Confirm the connection allowance, renewal terms, and any additional charges before making a payment.",
  },
  {
    title: "Customer support",
    body: "Choose a provider that can explain its subscription and connection policies clearly.",
  },
] as const;

const FAQS = [
  {
    q: "1. What are Strong 8K IPTV multiple connections?",
    a: "Strong 8K IPTV multiple connections refer to using an IPTV subscription across multiple devices, subject to the number of simultaneous streams allowed by the selected subscription.",
  },
  {
    q: "2. Can I use Strong 8K IPTV on two devices?",
    a: "You may be able to configure your subscription on two compatible devices. However, watching on both devices simultaneously depends on your subscription's connection allowance. Confirm this with Strong8K support.",
  },
  {
    q: "3. Can I watch Strong 8K IPTV on my Firestick and Smart TV?",
    a: "You can use compatible IPTV players on a Firestick and Smart TV, provided the applications support those devices and you have valid subscription details. Simultaneous playback depends on your plan.",
  },
  {
    q: "4. Does installing IPTV on multiple devices mean I have multiple connections?",
    a: "No. Installing an IPTV application on multiple devices does not automatically provide multiple simultaneous connections. Your subscription determines how many devices can stream at the same time.",
  },
  {
    q: "5. Can two family members watch different channels simultaneously?",
    a: "Yes, if the subscription supports at least two simultaneous connections. You should confirm the exact connection allowance before relying on this feature.",
  },
  {
    q: "6. Why does Strong 8K IPTV stop working when I open it on another device?",
    a: "This may happen if your subscription has a simultaneous connection limit. Check whether another device is already streaming and contact support if the problem continues.",
  },
  {
    q: "7. Can I use Strong8K IPTV on my mobile phone?",
    a: "You can use a compatible IPTV player on a supported smartphone and enter your subscription details. Application compatibility depends on the phone's operating system.",
  },
  {
    q: "8. Does Strong 8K IPTV offer unlimited connections?",
    a: "Do not assume that unlimited simultaneous connections are included. Contact Strong8K support to confirm the available connection options and applicable subscription conditions.",
  },
  {
    q: "9. How can I increase my Strong 8K IPTV connections?",
    a: "Contact the Strong8K team and explain how many simultaneous streams you need. Ask whether an additional connection or upgraded subscription is available and confirm its price before proceeding.",
  },
  {
    q: "10. Can I use the same IPTV login on different devices?",
    a: "This depends on the provider's account and connection policies. Ask Strong8K support whether your subscription credentials can be used across your intended devices and whether simultaneous playback is permitted.",
  },
] as const;

export default function Strong8kIptvMultipleConnectionsPage() {
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
                Connections Guide
              </span>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <h1
              className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Strong 8K IPTV Multiple Connections: How to Watch on Multiple Devices
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px] md:text-base" style={{ color: "var(--hero-muted)" }}>
              <p>
                Do you want to watch Strong 8K IPTV on more than one device? If you have a Firestick, Smart TV, Android TV, smartphone, or tablet, you may want to access your subscription from different screens. This is where Strong 8K IPTV multiple connections becomes an important feature to understand.
              </p>
              <p>
                Multiple connections allow IPTV subscribers to use their service across more than one device, depending on the number of connections supported by their subscription. This can be useful for families, households with multiple televisions, and users who want to watch content in different rooms.
              </p>
              <p>
                However, installing an IPTV player on several devices does not automatically mean that you can stream on all of them simultaneously. The number of permitted connections, account restrictions, and subscription conditions determine how many devices can watch at the same time.
              </p>
              <p>
                In this guide, we explain how Strong 8K IPTV multiple connections work, how to use your subscription on different devices, what to check before choosing a plan, and how to troubleshoot common connection problems.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <BlogFeaturedImage src={post.image} alt={post.imageAlt} />
          </HeroReveal>
        </Container>
      </section>

      {/* What are multiple connections */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              What Are Strong 8K IPTV Multiple Connections?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
              <p>
                Strong 8K IPTV multiple connections refer to the ability to access an IPTV subscription on multiple compatible devices, subject to the connection limit of your selected plan.
              </p>
              <p>For example, you might want to use your subscription on:</p>
            </RevealParts>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {DEVICE_EXAMPLES.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>The important difference is between device installation and simultaneous connections.</p>
            <p>
              You may be able to install a compatible IPTV player on several devices, but your subscription might only allow one active stream at a time. If you want two or more people to watch different channels simultaneously, you need to confirm that your subscription supports multiple concurrent connections.
            </p>
          </div>
        </Container>
      </section>

      {/* Can you use on multiple devices */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Can You Use Strong 8K IPTV on Multiple Devices?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Yes, you can use a compatible IPTV player on different devices, provided you have the required subscription details and your plan permits the intended usage.
            </p>
            <p>
              For example, you may set up your IPTV subscription on a Firestick connected to your main television and also configure a compatible player on your smartphone.
            </p>
            <p>Before using both devices simultaneously, check the connection limit with the Strong8K support team.</p>
            <p>
              This distinction matters because some IPTV subscriptions allow users to switch between devices but restrict simultaneous playback. Other subscriptions may offer additional connections under separate terms.
            </p>
            <p>
              <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>Important:</span> Do not assume that one subscription automatically includes unlimited simultaneous connections. Confirm the available connection options before purchasing or upgrading.
            </p>
          </div>
        </Container>
      </section>

      {/* How connections work */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How Do Multiple IPTV Connections Work?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              An IPTV connection generally refers to an active stream using your subscription. When you start watching a live channel or video on demand, your device uses an active connection.
            </p>
            <p>Consider this example:</p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Situation</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Connection requirement</th>
                </tr>
              </thead>
              <tbody>
                {CONNECTION_ROWS.map(([situation, requirement]) => (
                  <tr key={situation} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{situation}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              These examples explain the general concept. Your actual Strong8K connection allowance depends on the terms of your selected subscription.
            </p>
            <p>
              If your plan only supports one simultaneous connection, starting playback on another device may interrupt the first stream or result in a connection restriction.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Benefits of Strong 8K IPTV Multiple Connections
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Choosing a subscription with an appropriate number of connections can make IPTV more convenient, particularly when several people use the same household entertainment setup.
          </p>

          <div className="mt-8 space-y-4">
            {BENEFITS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold sm:text-[17px]" style={{ color: "var(--hero-heading)" }}>
                  {item.title}
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                  {item.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Devices */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Which Devices Can You Use with Strong 8K IPTV?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Your device needs a compatible IPTV player and an appropriate internet connection. The availability of specific applications depends on the device and its operating system.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Device</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>IPTV player setup</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Typical use</th>
                </tr>
              </thead>
              <tbody>
                {DEVICE_ROWS.map(([device, setup, use]) => (
                  <tr key={device} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{device}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{setup}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>Strong8K subscription details may be entered into a compatible IPTV player using the login method supplied by the service.</p>
            <p>Remember that IPTV players are separate applications. Their availability, features, and subscription charges may vary.</p>
          </div>
        </Container>
      </section>

      {/* Setup steps */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Set Up Strong 8K IPTV on Multiple Devices
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Setting up IPTV on multiple devices involves installing a compatible player and entering your subscription information.
          </p>
          <p className="mt-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Follow these general steps:
          </p>

          <div className="mt-8 space-y-5">
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>1</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Contact Strong8K Support</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>First, contact the Strong8K team through the WhatsApp contact option available on the official website.</p>
                <p>Ask about the connection allowance included in your subscription and explain how many devices you want to use simultaneously.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>2</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Confirm Your Subscription Details</h3>
              </div>
              <p className="mt-4 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                Before configuring additional devices, confirm:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                {CONFIRM_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                This helps you avoid interruptions or account restrictions.
              </p>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>3</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Install a Compatible IPTV Player</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Install an IPTV player that supports your device.</p>
                <p>
                  For example, Firestick and Android TV users can explore compatible applications available for their platforms. Smartphone and tablet users should select an application that supports their operating system.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>4</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Enter Your Subscription Information</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>Open the IPTV player and select the available login method.</p>
                <p>Depending on the details provided by Strong8K, this may include:</p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  {LOGIN_METHODS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Enter the information carefully. Incorrect credentials can prevent your playlist from loading.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>5</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Repeat the Setup on Other Devices</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>If your subscription permits it, install a compatible IPTV player on your other devices.</p>
                <p>
                  Use the login information according to the instructions supplied by Strong8K. Do not assume that adding more devices increases your simultaneous connection allowance.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black" style={{ background: "var(--grad-brand)" }}>6</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Test Your Connections</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>After completing the setup, test playback on the devices you intend to use.</p>
                <p>
                  If you want to watch on two televisions at the same time, start playback on both and check whether the streams work without interruptions.
                </p>
                <p>
                  If you experience a connection error, contact support to verify your subscription limit and account configuration.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* How many connections */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How Many Strong 8K IPTV Connections Do You Need?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>The right number of connections depends on how many people want to watch IPTV at the same time.</p>
            <p>Here are some general examples to help you understand your requirements.</p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Household or user type</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Suggested connection requirement</th>
                </tr>
              </thead>
              <tbody>
                {NEED_ROWS.map(([type, need]) => (
                  <tr key={type} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{type}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>These are usage examples, not a list of confirmed Strong8K subscription packages.</p>
            <p>
              If you are unsure, consider your actual viewing habits rather than counting every device on which you might install an IPTV player.
            </p>
          </div>
        </Container>
      </section>

      {/* Simultaneous streaming */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Does Strong 8K IPTV Support Simultaneous Streaming?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>Simultaneous streaming means watching different content on multiple devices at the same time.</p>
            <p>
              For example, one person might watch a live sports channel on a living-room television while another watches a different programme on a bedroom television.
            </p>
            <p>
              Whether this works depends on the number of concurrent connections permitted by your subscription.
            </p>
            <p>
              Before selecting a Strong8K plan, ask the support team to confirm the exact simultaneous streaming allowance. Also ask whether additional connections require a separate subscription or upgrade.
            </p>
            <p>
              This is particularly important if several people in your household regularly watch IPTV at the same time.
            </p>
          </div>
        </Container>
      </section>

      {/* Devices vs connections */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Multiple Devices vs Multiple Connections: What Is the Difference?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            These two terms are often confused, but they do not mean the same thing.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Multiple devices</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Multiple connections</th>
                </tr>
              </thead>
              <tbody>
                {DIFF_ROWS.map(([devices, connections]) => (
                  <tr key={devices} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{devices}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{connections}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              For example, you might configure an IPTV player on a Firestick, Smart TV, and smartphone. However, if your subscription allows only one simultaneous connection, you may not be able to stream on all three devices at once.
            </p>
            <p>Understanding this difference helps you choose a subscription that matches your needs.</p>
          </div>
        </Container>
      </section>

      {/* Internet speed */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              What Internet Speed Is Required for Multiple IPTV Connections?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>Your internet connection plays an important role in streaming quality.</p>
            <p>
              When several devices stream simultaneously, they share your available internet bandwidth. If your connection is slow or unstable, you may experience buffering, delayed playback, or reduced video quality.
            </p>
            <p>The internet speed you need depends on several factors:</p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SPEED_FACTORS.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              For a better experience, use a stable broadband connection. If possible, connect televisions and streaming devices through Ethernet rather than relying entirely on Wi-Fi.
            </p>
            <p>
              You should also avoid running unnecessary downloads or bandwidth-heavy applications while several devices are streaming.
            </p>
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Common Strong 8K IPTV Multiple Connection Problems and Solutions
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Sometimes, users experience problems when accessing their subscriptions from multiple devices. Many issues can be checked through a few basic troubleshooting steps.
          </p>

          <div className="mt-8 space-y-4">
            {PROBLEMS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold sm:text-[17px]" style={{ color: "var(--hero-heading)" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                  {item.issue}
                </p>
                {"solutionList" in item && item.solutionList ? (
                  <>
                    <p className="mt-3 text-sm font-semibold" style={{ color: "var(--hero-heading)" }}>
                      Solution:
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                      {item.solutionList.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="mt-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                    <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>Solution:</span>{" "}
                    {"solution" in item ? item.solution : null}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Choose subscription */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Choose the Right Strong 8K IPTV Subscription
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Before selecting a Strong8K subscription, think about how you intend to use the service.
          </p>
          <p className="mt-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Consider these points:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CHOOSE_POINTS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            If you are considering Strong8K, contact the team through its official website to discuss your device requirements and available subscription options.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Frequently Asked Questions
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
              Get Started with Strong8K
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              <p>
                Looking for an IPTV setup that works across your compatible devices? Strong8K provides a way to explore its subscription service and discuss your viewing requirements before choosing a plan.
              </p>
              <p>
                You can contact the team through WhatsApp, ask about the available subscription options, and request a free trial if available.
              </p>
              <p>
                Before subscribing, explain how many devices you want to use and whether you need simultaneous streaming. The support team can help clarify the connection options and provide the appropriate subscription details.
              </p>
              <p>
                Visit{" "}
                <Link href={routes.home} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                  8K Strong
                </Link>{" "}
                to contact the team, ask about multiple connections, and explore the available subscription options.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={routes.subscriptionPlans} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
                View Subscription Plans
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
              <Link
                href={enquiryWhatsApp("renewal")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Ask About Connections
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
