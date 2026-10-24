import React from "react";
import { profile } from "../data/content";

const Contact = () => {
  return (
    <section name="contact" id="contact" className="bg-canvas py-24 text-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-brass">Contact</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Tell me what you are building.
          </h2>
          <p className="mt-4 text-mist">
            The form goes straight to my inbox. If you would rather write directly,
            email or call — both are fine.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a className="text-fg underline decoration-brass/60 underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="text-fg underline decoration-brass/60 underline-offset-4" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </li>
            <li className="text-mist">{profile.location}</li>
            <li className="flex gap-4 pt-2">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-brass hover:text-fg">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-brass hover:text-fg">
                GitHub
              </a>
              <a href={profile.resume} download={profile.resumeName} className="text-brass hover:text-fg">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <form
          action="https://getform.io/f/bxojpvya"
          method="POST"
          className="rounded-3xl border border-line bg-card p-6 sm:p-8"
        >
          <label className="block text-sm text-mist" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-fg outline-none transition focus:border-brass"
          />

          <label className="mt-5 block text-sm text-mist" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-fg outline-none transition focus:border-brass"
          />

          <label className="mt-5 block text-sm text-mist" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            placeholder="What would you like to talk about?"
            className="mt-2 w-full resize-y rounded-xl border border-line bg-canvas px-4 py-3 text-fg outline-none transition focus:border-brass"
          />

          <button
            type="submit"
            className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#f0c48a]"
          >
            Send message
          </button>
        </form>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-line px-5 pt-6 text-sm text-mist">
        <p>Abhishek Kumar · Software Developer · Bengaluru</p>
      </footer>
    </section>
  );
};

export default Contact;
