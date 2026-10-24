import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { profile } from "../data/content";

const links = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    icon: <FaLinkedin size={22} />,
    className: "rounded-tr-md",
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.github,
    icon: <FaGithub size={22} />,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: <HiOutlineMail size={22} />,
  },
  {
    id: "resume",
    label: "Resume",
    href: profile.resume,
    icon: <BsFillPersonLinesFill size={22} />,
    className: "rounded-br-md",
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <>
      <div className="fixed left-0 top-[32%] z-40 hidden lg:flex">
        <ul>
          {links.map(({ id, label, href, icon, className, download }) => (
            <li
              key={id}
              className={`group flex h-12 w-40 -translate-x-[7.75rem] items-center bg-social backdrop-blur transition duration-300 hover:translate-x-0 hover:bg-gold ${className || ""}`}
            >
              <a
                href={href}
                download={download ? profile.resumeName : undefined}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noreferrer"}
                className="flex h-full w-full items-center justify-between px-3 text-sm text-fg group-hover:text-ink"
              >
                {label}
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      </>
  );
};

export default SocialLinks;
