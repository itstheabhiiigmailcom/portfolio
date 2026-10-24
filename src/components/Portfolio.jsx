import React, { useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/content";

const Portfolio = () => {
  return (
    <section name="work" id="work" className="bg-raised py-24 text-fg">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm uppercase tracking-[0.22em] text-brass">Work</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Selected projects</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Check out some of my work here. These are the projects I would walk a
          hiring team through: a shipped product, a developer tool, a full-stack chat app, and a browser arcade.
        </p>

        <div className="mt-10 space-y-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const onMove = (event) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      className="project-card rounded-3xl border border-line p-6 transition duration-300 hover:border-brass/40 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-brass">
            0{index + 1} · {project.kicker} · {project.year}
          </p>
          <h3 className="mt-2 font-serif text-4xl">{project.title}</h3>
        </div>
        <div className="flex gap-2">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-canvas transition hover:bg-gold hover:text-ink"
            >
              Live
              <FiArrowUpRight />
            </a>
          ) : null}
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-fg transition hover:border-brass/70 hover:text-brass"
          >
            Code
            <FiGithub />
          </a>
        </div>
      </div>

      <p className="mt-4 max-w-3xl text-mist">{project.summary}</p>
      <ul className="mt-4 space-y-2">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-soft">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wide text-mist"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Portfolio;
