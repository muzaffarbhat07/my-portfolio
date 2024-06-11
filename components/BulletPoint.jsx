import Link from "next/link";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const BulletPoint = ({point}) => {
  return (
    <div className="">
      <PiPaperPlaneRightFill className="inline"/>
      {point}
    </div>
  );
}

export const PointLink = ({ link, children }) => {
  return (
    <Link 
      href={link}
      target="_blank" 
      rel="noreferrer" 
      className="text-purple-500 cursor-pointer hover:text-purple-600 transition-all duration-100 hover:-translate-y-[0.5px] font-semibold"
    >
      {children}
    </Link>
  );
}

export const BoldText = ({ children }) => {
  return <span className="font-medium">{children}</span>
}

export const PointText = ({ children }) => {
  return <p className="inline ml-2">{children}</p>
}

export default BulletPoint;