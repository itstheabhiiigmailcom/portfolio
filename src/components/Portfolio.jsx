import React from 'react';
import weather from '../assets/portfolio/weather.jpg';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpeg';
import textEditor from '../assets/portfolio/text-editor.jpg';
import installNode from '../assets/portfolio/installNode.png';
import todo from '../assets/portfolio/todo.png';
import scrumbleWord from '../assets/portfolio/scrumble_word.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: 'https://abhiiii-portfolio.netlify.app/',
      code: 'https://github.com/itstheabhiiigmailcom/portfolio',
    },
    {
      id: 2,
      src: textEditor,
      demo: 'https://textsmanipulator.netlify.app/',
      code: 'https://github.com/itstheabhiiigmailcom/Text-manipulator',
    },
    {
      id: 3,
      src: scrumbleWord,
      demo: 'https://scrumblewords.netlify.app/',
      code: 'https://github.com/itstheabhiiigmailcom/scrumble-word',
    },
    {
      id: 4,
      src: todo,
      demo: 'https://cool-valkyrie-6883df.netlify.app/',
      code: 'https://github.com/itstheabhiiigmailcom/Password-Generator/tree/main/05passwordGenerator',
    },
    {
      id: 5,
      src: installNode,
      demo: 'https://your-demo-link-5.com',
      code: 'https://github.com/yourusername/repo5',
    },
    {
      id: 6,
      src: weather,
      demo: 'https://your-demo-link-6.com',
      code: 'https://github.com/yourusername/repo6',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
