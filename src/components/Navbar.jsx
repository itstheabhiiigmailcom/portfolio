import React, { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { profile } from "../data/content";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const applyTheme = (light) => {
  document.documentElement.classList.toggle("light", light);
  try {
    localStorage.setItem("theme", light ? "light" : "dark");
  } catch (e) {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", light ? "#f6f3ee" : "#08090d");
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("light");
    applyTheme(next);
    setLight(next);
  };

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      setScrolled(window.scrollY > 8);

      const marker = window.scrollY + 120;
      let current = links[0].id;
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-nav backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="h-0.5 origin-left bg-brass" style={{ width: `${progress}%` }} />
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-serif text-4xl leading-none text-fg sm:text-5xl">
          Abhishek
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative text-sm transition-colors hover:text-fg ${
                active === id ? "text-fg" : "text-mist"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-full bg-brass transition-transform duration-300 ${
                  active === id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition hover:border-brass/60 hover:text-brass"
          >
            {light ? <FaMoon size={14} /> : <FaSun size={14} />}
          </button>
          <a
            href={profile.resume}
            download={profile.resumeName}
            className="hidden rounded-full border border-line px-4 py-1.5 text-sm text-fg transition hover:border-brass/60 hover:text-brass md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-fg md:hidden"
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>
    </header>

      {open && (
        <nav className="fixed inset-0 z-[60] flex flex-col bg-canvas px-6 pt-8 md:hidden">
          <div className="flex items-center justify-between">
            <p className="font-serif text-4xl text-fg">Abhishek</p>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="text-fg">
              <FaTimes size={22} />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-5">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block text-3xl text-fg">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download={profile.resumeName} className="text-brass">
                Download resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
