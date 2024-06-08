import Link from "next/link"
import { FaHandPointRight } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import { PiPaperPlaneRightFill } from "react-icons/pi";


const ExperienceCard = ({ experience }) => {
  const { role, org, duration, lines } = experience;
  return (
    <article className="flex flex-col body-font rounded-lg">
          <h1 className="text-2xl lg:text-4xl gap-2 font-bold text-white">{role}</h1>
          <div className="flex flex-row justify-between items-center text-base font-semibold lg:text-lg">
            <Link 
              href={org.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-purple-500 cursor-pointer hover:text-purple-600 transition-all duration-100 hover:-translate-y-[0.5px]"
              >
                {org.name}
              </Link>
            <p className="font-medium text-xs sm:text-sm">{duration}</p>
          </div>
          <div className="flex flex-col gap-1 lg:text-xl font-thin">
            {lines.map((line, i) => <Line line={line} key={i}/>)}
          </div>
        </article>
  )
}

const Line = ({line}) => {
  return (
    <div className="">
      <PiPaperPlaneRightFill className="inline"/>
      {line}
    </div>
  );
}

export default ExperienceCard