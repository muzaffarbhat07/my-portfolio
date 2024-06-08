import ExperienceCard from "./ExperienceCard"
import Link from "next/link"

const LineLink = ({ link, children }) => {
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

const BoldText = ({ children }) => {
  return <span className="font-semibold">{children}</span>
}

const LineText = ({ children }) => {
  return <p className="inline ml-2">{children}</p>
}

const experiencesData = [
  {
    role: 'SDE',
    org: {
      name: 'Kalpkriti',
      link: 'https://tweencraft.com'
    },
    duration: 'Apr 2023 - May 2024',
    lines: [
      <LineText>Developed innovative features for <LineLink link="https://tweencraft.com">TweenCraft</LineLink>: Cartoon video maker animation app, leading to a significant increase in user engagement and surpassing <BoldText>8M</BoldText> downloads milestone.</LineText>,
      <LineText>Pioneered the implementation of <BoldText>reel creation using imported or selected audio</BoldText>, resulting in a <BoldText>60%</BoldText> enhancement in user-generated content output through precise lip-syncing.</LineText>,
      <LineText>Engineered <BoldText>cinematic filters</BoldText> to enhance user-generated content, enabling dynamic focus on speaking characters and immersive camera effects.</LineText>,
      <LineText>Spearheaded <BoldText>UI/UX enhancements</BoldText> for streamlined story creation, simplifying the storytelling process for users.</LineText>,
      <LineText>Designed and <BoldText>optimized APIs to enhance app performance</BoldText> and scalability, improving overall user experience.</LineText>,
      <LineText>Developed <BoldText>feed feature</BoldText> allowing users to publish, discover and watch published reels based on generated rating, contributing to a <BoldText>30%</BoldText> increase in user base through enhanced social interaction and content discovery.</LineText>,
      <LineText>Provided <BoldText>leadership</BoldText> as a code and design <BoldText>reviewer</BoldText>, ensuring high-quality standards and <BoldText>mentoring</BoldText> junior team members</LineText>,
      <LineText>Streamlined development, testing, and release <BoldText>processes</BoldText> to ensure smooth workflow and the delivery of a high-quality product to users.</LineText>,
    ]
  },
  {
    role: 'SDE Intern',
    org: {
      name: 'Juspay',
      link: 'https://juspay.in'
    },
    duration: 'Jan 2023 - Apr 2024',
    lines: [
      <LineText>Worked in the <LineLink link="https://juspay.in/products">payment page</LineLink> team - a cross platform, scalable solution that gives merchants access to all and ever-changing payment methods with a single integration.</LineText>,
      <LineText>Designed <BoldText>Database and APIs</BoldText> along with my team members for performance, scalability and availability.</LineText>,
    ]
  },
  {
    role: 'SDE Intern',
    org: {
      name: 'Kalpkriti',
      link: 'https://tweencraft.com'
    },
    duration: 'Nov 2021 - Feb 2022',
    lines: [
      <LineText>Worked in the front-end team for the mobile application <LineLink link="https://tweencraft.com">TweenCraft</LineLink>.</LineText>,
      <LineText>Built new home screen design of the app where YouTube embedded videos are shown under different categories and much more using <BoldText>C++</BoldText> primarily.</LineText>,
    ]
  }
];

const Experiences = () => {
  return (
    <>
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
        My <p className="text-[#ad50eb]">Experiences </p>
      </h1>
      {/* <p className="text-gray-200 text-xs sm:text-lg">
        Here are my professional experiences I've been to.
      </p> */}
      <section className="flex flex-col text-gray-200 z-20 justify-center gap-8 m-2 flex-wrap max-w-[1150px] px-1 sm:px-5">
        {experiencesData.map((experience, i) => <ExperienceCard experience={experience} key={i}/>)}
      </section>
    </>
  )
}



export default Experiences