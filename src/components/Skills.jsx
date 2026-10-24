import React, { useState } from "react";
import { skillGroups } from "../data/content";

const Skills = () => {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId) || skillGroups[0];

  return (
    <section name="skills" id="skills" className="bg-canvas py-24 text-fg">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm uppercase tracking-[0.22em] text-brass">Skills</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Tools used</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Languages, frameworks, and tools from production work and the products
          I have shipped. Switch a group to see the full set.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skillGroups.map((group) => {
            const selected = group.id === active.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveId(group.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selected
                    ? "bg-gold text-ink"
                    : "border border-line text-mist hover:border-brass/40 hover:text-fg"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {active.items.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-line bg-card px-4 py-4 text-sm text-fg transition hover:border-brass/50"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
