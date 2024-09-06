import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          To secure a challenging position in the IT industry that allows me to
          utilize my technical skills, problem-solving abilities, and passion
          for software development. I aim to contribute to innovative projects
          and collaborate with talented professionals to drive the growth of the
          organization. Eager to learn and adapt in a dynamic environment, I am
          committed to enhancing my skills in software development, web
          technologies, and emerging IT trends. I am enthusiastic about applying
          my academic knowledge and hands-on experience to develop efficient,
          scalable solutions that make a meaningful impact.
        </p>

        <br />

        <p className="text-xl">
          I am a 3rd-year computer science student and a detail-oriented
          software developer eager to expand my knowledge and skills in the
          field. Knowledge in C, C++, Python & JavaScript, with hands-on
          experience in web application development through academic projects.
          Understanding of data structure and algorithms, with the ability to
          solve problems efficiently. Seeking an entry-level position to
          leverage my technical skills and contribute to innovative software
          solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
