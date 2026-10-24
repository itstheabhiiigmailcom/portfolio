import React, { useEffect, useState } from "react";
import { HiArrowDown, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { headlines, profile } from "../data/content";

const Mark = () => (
  <div
    className="rise relative w-full max-w-[280px] shrink-0"
    style={{ animationDelay: "120ms" }}
    aria-hidden="true"
  >
    <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brass/20 blur-3xl" />
    <div className="relative overflow-hidden rounded-[1.7rem] border border-brass/30 bg-raised px-5 pb-5 pt-5">
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] uppercase tracking-[0.22em] text-mist">In practice</p>
      </div>

      <svg viewBox="0 0 240 188" className="mt-3 w-full text-fg" fill="none">
        <circle cx="104" cy="86" r="46" stroke="currentColor" strokeOpacity="0.1" />
        <circle cx="104" cy="86" r="26" stroke="currentColor" strokeOpacity="0.16" />
        <circle cx="104" cy="86" r="5" className="fill-brass" />

        <rect x="8" y="18" width="28" height="18" rx="5" stroke="currentColor" strokeOpacity="0.4" />
        <rect x="8" y="77" width="28" height="18" rx="5" stroke="currentColor" strokeOpacity="0.4" />
        <rect x="8" y="136" width="28" height="18" rx="5" stroke="currentColor" strokeOpacity="0.4" />

        <path className="mark-flow stroke-brass" strokeWidth="1.4" d="M36 27 H58 C80 27 80 86 96 86" />
        <path className="stroke-brass" strokeWidth="1.4" strokeOpacity="0.55" d="M36 86 H96" />
        <path className="mark-flow stroke-brass" strokeWidth="1.4" d="M36 145 H58 C80 145 80 86 96 86" />
        <path className="stroke-brass" strokeWidth="1.4" d="M112 86 H138" />

        <rect x="138" y="22" width="92" height="128" rx="14" stroke="currentColor" strokeOpacity="0.3" />
        <path d="M154 48 h52" className="stroke-brass" strokeWidth="4" strokeLinecap="round" />
        <path d="M154 66 h34" stroke="currentColor" strokeOpacity="0.28" strokeWidth="4" strokeLinecap="round" />
        <path d="M154 88 h44" className="stroke-brass" strokeWidth="4" strokeLinecap="round" />
        <path d="M154 106 h26" stroke="currentColor" strokeOpacity="0.28" strokeWidth="4" strokeLinecap="round" />
        <path d="M154 128 h40" className="stroke-brass" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />

        <text x="22" y="178" textAnchor="middle" fontSize="8" letterSpacing="1.6" className="fill-mist">
          DEVICE
        </text>
        <text x="104" y="178" textAnchor="middle" fontSize="8" letterSpacing="1.6" className="fill-mist">
          FLEET
        </text>
        <text x="184" y="178" textAnchor="middle" fontSize="8" letterSpacing="1.6" className="fill-mist">
          SCREEN
        </text>
      </svg>
    </div>
  </div>
);

const Home = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLineIndex(headlines.length);
      return undefined;
    }

    let line = 0;
    let char = 0;
    let pause = 0;
    const timer = setInterval(() => {
      if (pause > 0) {
        pause -= 1;
        return;
      }
      char += 1;
      if (char > headlines[line].length) {
        line += 1;
        char = 0;
        pause = 8;
        if (line >= headlines.length) {
          clearInterval(timer);
          setLineIndex(headlines.length);
          setCount(0);
          return;
        }
      }
      setLineIndex(line);
      setCount(char);
    }, 32);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      name="home"
      id="home"
      className="relative min-h-screen overflow-hidden bg-canvas pt-24"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brass/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brass/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center gap-12 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 max-w-xl md:flex-1">
          <p className="rise text-sm uppercase tracking-[0.22em] text-brass">
            {profile.role}
            <span className="mt-1 block tracking-[0.18em]">{profile.location}</span>
          </p>
          <h1 className="rise mt-4 font-serif text-5xl leading-[1.05] text-fg sm:text-6xl md:text-7xl" style={{ animationDelay: "80ms" }}>
            Abhishek Kumar
          </h1>
          <p
            className="rise relative mt-5 font-serif text-xl leading-snug text-fg sm:text-2xl"
            style={{ animationDelay: "140ms" }}
          >
            <span className="invisible block" aria-hidden="true">
              {headlines.map((line) => (
                <span key={line} className="mt-2 block first:mt-0">
                  {line}
                </span>
              ))}
            </span>
            <span className="absolute inset-x-0 top-0" aria-label={headlines.join(" ")}>
              {headlines.map((line, index) => {
                if (index > lineIndex) return null;
                const text = index < lineIndex ? line : line.slice(0, count);
                const showCaret = index === lineIndex && lineIndex < headlines.length;
                return (
                  <span key={line} className="mt-2 block first:mt-0">
                    {text}
                    {showCaret ? <span className="type-caret" aria-hidden="true" /> : null}
                  </span>
                );
              })}
            </span>
          </p>
          <p className="rise mt-4 max-w-lg text-base leading-relaxed text-mist" style={{ animationDelay: "200ms" }}>
            Software developer at NewSpace Research &amp; Technologies. I work
            on device data, fleets of robots and bots, secure updates, and
            full-stack web and mobile products.
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "260ms" }}>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-[#f0c48a]"
            >
              Selected work
              <HiArrowDown className="text-base" />
            </a>
            <a
              href={profile.resume}
              download={profile.resumeName}
              className="inline-flex rounded-full border border-line px-5 py-2.5 text-sm text-fg transition hover:border-brass/70 hover:text-brass"
            >
              Download resume
            </a>
          </div>

          <div className="rise mt-6 flex gap-3 lg:hidden" style={{ animationDelay: "300ms" }}>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg hover:text-brass">
              <FaLinkedin />
            </a>
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg hover:text-brass">
              <FaGithub />
            </a>
            <a aria-label="Email" href={`mailto:${profile.email}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg hover:text-brass">
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <Mark />
      </div>
    </section>
  );
};

export default Home;
