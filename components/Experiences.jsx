import ExperienceCard from "./ExperienceCard"
import Link from "next/link"

const experiencesData = [
  {
    role: 'Software Development Engineer',
    org: {
      name: 'Kalpkriti',
      link: 'https://tweencraft.com'
    },
    duration: 'Apr 2023 - May 2024',
    lines: [
      <p className="inline ml-2">Developed innovative features for <Link href={"https://tweencraft.com"} target="_blank" rel="noreferrer" className="text-purple-500 cursor-pointer hover:text-purple-600 transition-all duration-100 hover:-translate-y-[0.5px] font-semibold">TweenCraft</Link>: Cartoon video maker animation app, leading to a significant increase in user engagement and surpassing <span className="font-semibold">8M</span> downloads milestone.</p>,
      <p className="inline ml-2">Pioneered the implementation of <span className="font-semibold">reel creation using imported or selected audio</span>, resulting in a  <span className="font-semibold">60%</span> enhancement in user-generated content output through precise lip-syncing.</p>,
      <p className="inline ml-2">Engineered <span className="font-semibold">cinematic filters</span> to enhance user-generated content, enabling dynamic focus on speaking characters and immersive camera effects.</p>,
      <p className="inline ml-2">Spearheaded <span className="font-semibold">UI/UX enhancements</span> for streamlined story creation, simplifying the storytelling process for users.</p>,
      <p className="inline ml-2">Designed and <span className="font-semibold">optimized APIs to enhance app performance</span> and scalability, improving overall user experience.</p>,
      <p className="inline ml-2">Developed <span className="font-semibold">feed feature</span> allowing users to publish, discover and watch published reels based on generated rating, contributing to a <span className="font-semibold">30%</span> increase in user base through enhanced social interaction and content discovery.</p>,
      <p className="inline ml-2">Provided <span className="font-semibold">leadership</span> as a code and design <span className="font-semibold">reviewer</span>, ensuring high-quality standards and <span className="font-semibold">mentoring</span> junior team members</p>,
      <p className="inline ml-2">Streamlined development, testing, and release <span className="font-semibold">processes</span> to ensure smooth workflow and the delivery of a high-quality product to users.</p>,
    ]
  },
  {
    role: 'Software Development Engineer Intern',
    org: {
      name: 'Juspay',
      link: 'https://juspay.in'
    },
    duration: 'Jan 2023 - Apr 2024',
    lines: [
      <p className="inline ml-2">Worked in the <Link href={"https://www.juspay.in/products"} target="_blank" rel="noreferrer" className="text-purple-500 cursor-pointer hover:text-purple-600 transition-all duration-100 hover:-translate-y-[0.5px] font-semibold">payment page</Link> team - a cross platform, scalable solution that gives merchants access to all and ever-changing payment methods with a single integration.</p>,
      <p className="inline ml-2">Designed <span className="font-semibold">Database and APIs</span> along with my team members for performance, scalability and availability.</p>,
    ]
  },
  {
    role: 'Software Development Engineer Intern',
    org: {
      name: 'Kalpkriti',
      link: 'https://tweencraft.com'
    },
    duration: 'Nov 2021 - Feb 2022',
    lines: [
      <p className="inline ml-2">Worked in the front-end team for the mobile application <Link href={"https://tweencraft.com"} target="_blank" rel="noreferrer" className="text-purple-500 cursor-pointer hover:text-purple-600 transition-all duration-100 hover:-translate-y-[0.5px] font-semibold">TweenCraft</Link>.</p>,
      <p className="inline ml-2">Built new home screen design of the app where YouTube embedded videos are shown under different categories and much more using <span className="font-semibold">C++</span> primarily.</p>,
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
      <section className="flex flex-col text-gray-200 z-20 justify-center gap-3 m-2 flex-wrap max-w-[1150px]">
        {experiencesData.map((experience, i) => <ExperienceCard experience={experience} key={i}/>)}
      </section>
    </>
  )
}

export default Experiences