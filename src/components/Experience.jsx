import React, { useState } from "react";
import { jobs } from "../data/content";

const Experience = () => {
  const [activeId, setActiveId] = useState(jobs[0].id);
  const active = jobs.find((job) => job.id === activeId) || jobs[0];

  return (
    <section name="experience" id="experience" className="bg-raised py-24 text-fg">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm uppercase tracking-[0.22em] text-brass">Experience</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Where I have worked</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Two roles in Bengaluru. The notes under each one are the systems I built there.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
            {jobs.map((job) => {
              const selected = job.id === active.id;
              return (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setActiveId(job.id)}
                  className={`min-w-[220px] rounded-2xl border px-4 py-4 text-left transition lg:min-w-0 ${
                    selected
                      ? "border-brass/70 bg-brass/10"
                      : "border-line bg-card hover:border-brass/40"
                  }`}
                >
                  <p className="text-sm text-brass">{job.dates}</p>
                  <p className="mt-1 font-medium text-fg">{job.company}</p>
                  <p className="mt-1 text-sm text-mist">{job.title}</p>
                </button>
              );
            })}
          </div>

          <article className="rounded-3xl border border-line bg-canvas p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="font-serif text-3xl">{active.title}</h3>
                <p className="mt-1 text-brass">{active.company}</p>
              </div>
              <p className="text-sm text-mist">
                {active.dates} · {active.place}
              </p>
            </div>
            <p className="mt-4 text-mist">{active.summary}</p>
            {active.groups ? (
              <div className="mt-6 space-y-8">
                {active.groups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm uppercase tracking-[0.16em] text-brass">{group.title}</h4>
                    <ul className="mt-3 space-y-4">
                      {group.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-soft">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-6 space-y-4">
                {active.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
