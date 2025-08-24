import { AiFillGithub } from "react-icons/ai";
import { BsWindows } from "react-icons/bs";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiPostman,
  SiVercel,
  SiLinux
} from "react-icons/si";

const toolsData = [
  {
    icon: <SiVisualstudiocode />,
    name: 'VS Code'
  },
  {
    icon: <SiPostman />,
    name: 'Postman'
  },
  {
    icon: <AiFillGithub />,
    name: 'Github'
  },
  {
    icon: <SiVercel />,
    name: 'Vercel'
  },
  {
    icon: <SiLinux />,
    name: 'Linux'
  },
  {
    icon: <BsWindows />,
    name: 'Windows'
  },
  {
    icon: <SiVisualstudio />,
    name: 'Visual Studio'
  }
];

const Toolstack = () => {
  return (
    <div className="relative w-11/12 lg:w-10/12 mx-auto flex items-center justify-center gap-3 flex-wrap my-5">
      <img
        src="/assets/images/star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      {toolsData.map((item, i) => (
        <div
          className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-56 h-20 sm:h-24 lg:h-28 xl:h-32 flex flex-col items-center justify-center gap-1  m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300 text-white"
          key={i}
        >
          <p className="text-[40px] sm:text-[55px] lg:text-[70px]">{item.icon}</p>
          <p className="text-xs text-gray-200 italic justify-self-end">{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Toolstack