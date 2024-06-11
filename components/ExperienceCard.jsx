import Link from "next/link"
import BulletPoint from "./BulletPoint";

const ExperienceCard = ({ experience }) => {
  const { role, org, duration, points } = experience;
  return (
    <article className="flex flex-col body-font rounded-md bg-black/30 z-20 md:hover:scale-[1.01] transition-all duration-300 px-2 sm:px-5 py-5">
          <h1 className="text-3xl sm:text-4xl gap-2 font-bold">{role}</h1>
          <div className="flex flex-row justify-between items-center text-base font-semibold lg:text-lg">
            <Link 
              href={org.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-purple-500 cursor-pointer hover:text-purple-600 transition-all duration-100 hover:-translate-y-[0.5px]"
            >
              {org.name}
            </Link>
            <p className="font-thin italic text-xs sm:text-sm text-gray-100">{duration}</p>
          </div>
          <div className="flex flex-col gap-1 md:text-lg xl:text-xl font-thin text-gray-200">
            {points.map((point, i) => <BulletPoint point={point} key={i}/>)}
          </div>
        </article>
  )
}

export default ExperienceCard