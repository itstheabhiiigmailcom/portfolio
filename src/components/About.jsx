import React from "react";
import { about, education, focus, stats } from "../data/content";

const About = () => {
  return (
    <section name="about" id="about" className="bg-canvas py-24 text-fg">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm uppercase tracking-[0.22em] text-brass">About</p>
        <h2 className="mt-4 max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-fg sm:text-2xl">
          {about.lead}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-mist">
            <p>{about.body}</p>
            <p>{about.closer}</p>
          </div>

          <aside className="rounded-3xl border border-line bg-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-brass">Education</p>
            <p className="mt-3 font-serif text-2xl leading-snug">{education.degree}</p>
            <p className="mt-2 text-sm text-fg">{education.school}</p>
            <p className="mt-2 text-sm text-mist">{education.meta}</p>
          </aside>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-line px-4 py-5 transition hover:border-brass/40"
            >
              <dt className="font-serif text-3xl text-fg">{item.value}</dt>
              <dd className="mt-1 text-sm text-mist">{item.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {focus.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-brass/40"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
