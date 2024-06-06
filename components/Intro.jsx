"use client";
import Tilt from "react-parallax-tilt";

const Intro = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="/assets/images/star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRODUCE</p> MYSELF
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
              I fell in love with coding and I have at least learnt something, I
              think… 🤷‍♂️
            </p>

            <p>
              I am fluent in classics like{" "}
              <span className="text-[#ad50eb]">React JS and Node JS.</span>
            </p>

            <p>
              My field of Interest's are building scalable and efficient{" "}
              <span className="text-[#ad50eb]">Web Apps</span> And{" "}
              <span className="text-[#ad50eb]">Servers.</span>
            </p>

            <p>
              Whenever possible, I apply my passion for developing products
              with{" "}
              <span className="text-[#ad50eb]">Modern Javascript Libraries</span>{" "}
              and <span className="text-[#ad50eb]">Frameworks </span>
              like
              <span className="text-[#ad50eb]"> React.js, Next.js</span> And{" "}
              <span className="text-[#ad50eb]"> Express.js.</span>
            </p>
            <p>
              And I am happy to join any team working on creating amazing products.{" "}
              {/* <span className="text-[#ad50eb]">web app </span> and{" "}
              <span className="text-[#ad50eb]"> server</span> with
              <span className="text-[#ad50eb]"> Nextjs</span> ,{" "}
              <span className="text-[#ad50eb]"> Nodejs</span> and{" "}
              <span className="text-[#ad50eb]">Typescript</span>. */}
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="/assets/images/man.png" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Intro