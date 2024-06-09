import { BsGithub } from "react-icons/bs";
// import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const contactsData = [
  {
    link: "https://github.com/muzaffarbhat07",
    icon: <BsGithub />
  },
  {
    link: "https://www.linkedin.com/in/muzaffarbhat",
    icon: <FaLinkedinIn />
  },
  {
    link: "https://www.instagram.com/_muzaffarbhat07",
    icon: <AiFillInstagram />
  },
]

const Contacts = ({ style }) => {
  return (
    <>
      {contactsData.map((contact, i) => <ContactLink contact={contact} style={style}/>)}
    </>
  )
}

const ContactLink = ({ contact, style }) => {
  const { link, icon } = contact;
  return (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={style}
      >
        {icon}
      </a>
  );
}

export default Contacts