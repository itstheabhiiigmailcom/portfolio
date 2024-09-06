import React from 'react';
import myimage from '../assets/myimage.JPG';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am a full-stack developer with a solid foundation in both front-end and back-end technologies. As a recent computer science 4th year student, I possess hands-on experience in building dynamic web applications through academic projects, internships, and personal initiatives. My technical skills include proficiency in HTML, CSS, JavaScript, React, Node.js, and database management with SQL and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrowAlt size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src={myimage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
