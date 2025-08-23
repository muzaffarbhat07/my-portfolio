import { AiFillHtml5 } from "react-icons/ai";
import { 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs,
  FaDocker
} from "react-icons/fa";
import {
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiCplusplus,
  SiC,
  SiMongoose,
  SiPostgresql,
  SiWeb3Dotjs
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTypescript, TbFileTypeSql } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
const skillsData = [
  {
    icon: <SiCplusplus />,
    name: 'C++',
  },
  {
    icon: <SiC />,
    name: 'C',
  },
  {
    icon: <RiJavascriptLine />,
    name: 'Javascript',
  },
  {
    icon: <TbBrandTypescript />,
    name: 'Typescript',
  },
  {
    icon: <FaNodeJs />,
    name: 'Node.js',
  },
  {
    icon: <SiExpress />,
    name: 'Express.js',
  },
  {
    icon: <SiPrisma />,
    name: 'Prisma',
  },
  {
    icon: <TbFileTypeSql />,
    name: 'SQL',
  },
  {
    icon: <SiPostgresql />,
    name: 'PostgreSQL',
  },
  {
    icon: <SiMongoose />,
    name: 'Mongoose',
  },
  {
    icon: <SiMongodb />,
    name: 'MongoDB',
  },
  {
    icon: <TbBrandNextjs />,
    name: 'Next.js',
  },
  {
    icon: <FaReact />,
    name: 'React.js',
  },
  {
    icon: <SiRedux />,
    name: 'Redux',
  },
  {
    icon: <SiTailwindcss />,
    name: 'Tailwind CSS',
  },
  {
    icon: <FaDocker />,
    name: 'Docker',
  },
  {
    icon: <BsGit />,
    name: 'Git',
  },
  {
    icon: <AiFillHtml5 />,
    name: 'HTML5',
  },
  {
    icon: <FaCss3Alt />,
    name: 'CSS3',
  },
  {
    icon: <SiFirebase />,
    name: 'Firebase',
  },
  {
    icon: <SiWeb3Dotjs />,
    name: 'Web3',
  },
  // {
  //   icon: <SiPwa />,
  //   name: 'PWA',
  // },
];

const Techstack = () => {
  return (
    <div className="relative w-11/12 lg:w-10/12 m-auto flex items-center justify-center gap-3 flex-wrap my-5 lg:my-10">
      <img
        src="/assets/images/star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      {skillsData.map((item, i) => (
        <div
          className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-56 h-20 sm:h-24 lg:h-28 xl:h-32 flex flex-col items-center justify-center gap-1 m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300 text-white"
          key={i}
        >
          <p className="text-[40px] sm:text-[55px] lg:text-[70px]">{item.icon}</p>
          <p className="text-xs text-gray-200 italic justify-self-end">{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Techstack