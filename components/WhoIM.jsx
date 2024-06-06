import { FaHandPointRight } from "react-icons/fa";

const WhoIM = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-30 absolute bottom-0 z-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 z-20">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 font-bold">
          Know Who <p className="text-[#ad50eb]">I'M</p>
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg lg:mr-20">
            <p className="text-center mt-3">
              Hi Everyone, I am <span className="text-[#ad50eb]"> Muzaffar</span>{" "}
              from <span className="text-[#ad50eb]">J&K, India.</span>
            </p>
            <p className="lg:text-xl font-thin">
              I am a Software Engineer with 1+ years of experience, and a CS graduate from NIT Srinagar. I am always looking for new challenges. I believe that I can use my skills and experience to
              contribute to any team and help you achieve your goals. I am
              looking for an opportunity where I can use my skills in
              contributing to the success of the company and also to improve my
              personal skills.
            </p>
            <p className="flex text-gray-200 text-base lg:text-lg gap-2 font-semibold">
              Apart from coding, some other activities that I love to do!
            </p>
            <span className="flex items-center justify-center gap-3 font-sans text-gray-200">
              <FaHandPointRight /> Playing and Watching Cricket
            </span>
            <span className="flex items-center justify-center gap-3 font-sans text-gray-200">
              <FaHandPointRight /> Travelling
            </span>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center z-20">
        <img
          src="/assets/images/about.png"
          alt=""
          className="lg:p-10 object-cover lg:w-3/4 w-full"
        />
      </div>
    </div>
  )
}

export default WhoIM