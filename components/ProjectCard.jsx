"use client";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Tilt from "react-parallax-tilt";
import BulletPoint from "./BulletPoint";

const ProjectCard = ({ project }) => {
  const { name, image, demo, code, techStack, points } = project;
  return (
    <section className="text-gray-200 body-font rounded-md bg-black/30 z-20 md:hover:scale-[1.01] transition-all duration-300">
      <div className="mx-auto flex px-2 md:px-5 py-10 md:py-5 md:flex-row flex-col items-center">
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> */}
        <div className="md:max-w-sm lg:max-w-lg lg:w-full mb-10 md:mb-0 md:order-2">
          <Tilt>
            <img
              className="object-cover object-center rounded"
              alt="project"
              src={image}
            />
          </Tilt>
        </div>
        {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"> */}
        <div className="lg:flex-grow flex flex-col md:items-start pb-5">
          <h1 className="title-font sm:text-4xl text-3xl font-bold">
            {name}
          </h1>
          <p className="leading-relaxed italic mb-1 font-thin text-sm">Tech Stack: <span className="text-[#ad50eb] font-medium">{techStack}</span></p>
          <div className="mb-8 leading-relaxed sm:pr-4 font-thin lg:text-lg">
            {points.map((point, i) => <BulletPoint point={point} key={i}/>)}
          </div>
          <div className="flex justify-start">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer">
                <button className="inline-flex text-white bg-purple-700 border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-purple-500  rounded text-lg">
                  Demo <BiLinkExternal />
                </button>
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noreferrer">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-gray-200 rounded text-lg">
                  Code <BsGithub />
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;