"use client";

import { Container } from "@/components/layout/container";
import { SMART_TV_PLAYERS } from "@/data/device-guides";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

export function InstallationAppsCodes() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              Recommended Apps for Different Smart TV Models
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-3xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
              Choose from the following players where a compatible version is available for your television.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div
              className="mt-8 rounded-2xl border p-5 sm:p-7"
              style={{
                backgroundColor: "var(--feature-card-bg)",
                borderColor: "var(--feature-card-border)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.12em] text-gradient-brand"
              >
                Recommended players
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SMART_TV_PLAYERS.map((player) => (
                  <li
                    key={player}
                    className="flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-semibold sm:text-[15px]"
                    style={{
                      borderColor: "rgba(212,168,75,0.45)",
                      color: "var(--hero-heading)",
                      background:
                        "linear-gradient(135deg, rgba(212,168,75,0.12) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{
                        background: "var(--grad-brand)",
                        boxShadow: "0 0 10px rgba(212,168,75,0.55)",
                      }}
                      aria-hidden
                    />
                    {player}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <div className="mt-6 max-w-3xl space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
            <p>Player availability varies by television, operating system and region. The list does not mean that every app is available on every model.</p>
            <p>Check the app’s publisher and setup instructions, particularly where similarly named players appear.</p>
            </RevealParts>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              Add Your Account Using the Correct Login Method
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-3xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
              Use the setup method supplied for your account and supported by your player.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border p-6" style={{ borderColor: "var(--feature-card-border)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Xtream Codes</h3>
              <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                Enter the supplied server URL, username and password. Copy the information accurately, including any required port or path. A profile name is usually your own label inside the player.
              </p>
            </article>
            <article className="rounded-2xl border p-6" style={{ borderColor: "var(--feature-card-border)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>M3U playlist</h3>
              <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                Enter the complete playlist link in the player’s playlist URL field. Do not shorten the address or remove parts. If a separate EPG URL is needed, use the information supplied by support.
              </p>
            </article>
            <article className="rounded-2xl border p-6" style={{ borderColor: "var(--feature-card-border)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Device activation</h3>
              <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                Some players display a device ID, MAC address or key. Send the required identifiers privately, together with the app name. After account linking, refresh or restart the player.
              </p>
            </article>
          </div>
          </FadeIn>
          <FadeIn delay={0.22}>
          <p className="mt-6 max-w-3xl text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Keep passwords and full private playlist links out of public posts and screenshots.
          </p>
          </FadeIn>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              Check Live Channels and On-Demand Playback After Installation
            </h2>
          </FadeIn>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
            <p>Once the catalogue loads:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Open a live channel.</li>
              <li>Test an on-demand film.</li>
              <li>Play an available series episode.</li>
              <li>Check your preferred audio language.</li>
              <li>Try any subtitles supplied for the title.</li>
              <li>Save regular channels as favourites where supported.</li>
              <li>Set the device and player to the correct UK time zone if programme information appears offset.</li>
            </ul>
            <p>Our EPG coverage and catch-up availability are limited. A player supporting those features does not mean they are available for every channel or programme.</p>
            <p>If children use the device, review the player’s available parental controls.</p>
            </RevealParts>
          </div>
        </Container>
      </section>
    </>
  );
}
