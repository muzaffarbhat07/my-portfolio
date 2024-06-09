import { BsGithub } from "react-icons/bs";
// import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Contacts from "./Contacts";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col gap-1 my-10 text-gray-200">
      <h1 className="text-5xl font-medium">FIND ME ON</h1>
      <p className="text-lg">
        Feel free to <span className="text-[#ad50eb] font-medium">connect </span>with me
      </p>
      <span className="flex items-center justify-center gap-10 m-2 mt-5 text-[#9b45d4]">
        <Contacts style={"bg-gray-200 p-3 rounded-full"}/>
      </span>
    </div>
  )
}

export default Contact