import { BoldText, PointLink, PointText } from "./BulletPoint";
import ExperienceCard from "./ExperienceCard"

const experiencesData = [
  {
    role: 'Software Engineer',
    org: {
      name: 'Cypherock',
      link: 'https://cypherock.com'
    },
    duration: 'Aug 24 - Present • 4 mos',
    points: [
      <PointText>Developed end-to-end <BoldText>XRP chain support</BoldText>, from <BoldText>Cypherock <PointLink link="https://www.cypherock.com/wallet-backup">X1 firmware</PointLink> development</BoldText> (in C) to <BoldText><PointLink link="https://www.cypherock.com/portfolio-management">Cysync</PointLink> client-server integrations</BoldText> (in Typescript, React, Node.js), progressing the solution from <BoldText>PoC to production</BoldText>, thus enabling crypto exchange for XRP.</PointText>,
      <PointText>Currently working on integrating support for <BoldText>StarkNet</BoldText>, a cutting-edge Layer 2 blockchain solution for enhanced scalability and security.</PointText>
    ]
  },
  {
    role: 'Software Engineer',
    org: {
      name: 'Kalpkriti',
      link: 'https://tweencraft.com'
    },
    duration: 'Apr 23 - May 24 • 1 yr 2 mos',
    points: [
      <PointText>Developed innovative features for <PointLink link="https://tweencraft.com">TweenCraft</PointLink>: Cartoon video maker animation app, leading to a significant increase in user engagement and surpassing <BoldText>8M</BoldText> downloads milestone.</PointText>,

      <PointText>Pioneered the implementation of <BoldText>reel creation using imported or selected audio</BoldText>, resulting in a <BoldText>60%</BoldText> enhancement in user-generated content output through precise lip-syncing.</PointText>,

      <PointText>Engineered <BoldText>cinematic filters</BoldText> to enhance user-generated content, enabling dynamic focus on speaking characters and immersive camera effects.</PointText>,

      <PointText>Spearheaded <BoldText>UI/UX enhancements</BoldText> for streamlined story creation, simplifying the storytelling process for users.</PointText>,

      <PointText>Designed and <BoldText>optimized APIs to enhance app performance</BoldText> and scalability, improving overall user experience.</PointText>,

      <PointText>Developed <BoldText>feed feature</BoldText> allowing users to publish, discover and watch published reels based on generated rating, contributing to a <BoldText>30%</BoldText> increase in user base through enhanced social interaction and content discovery.</PointText>,

      <PointText>Provided <BoldText>leadership</BoldText> as a code and design <BoldText>reviewer</BoldText>, ensuring high-quality standards and <BoldText>mentoring</BoldText> junior team members.</PointText>,

      <PointText>Streamlined development, testing, and release <BoldText>processes</BoldText> to ensure smooth workflow and the delivery of a high-quality product to users.</PointText>,
    ]
  },
  {
    role: 'SDE Intern',
    org: {
      name: 'Juspay',
      link: 'https://juspay.in'
    },
    duration: 'Jan 23 - Apr 23 • 3 mos 18 days',
    points: [
      <PointText>Worked in the <PointLink link="https://juspay.in/products">payment page</PointLink> team - a cross platform, scalable solution that gives merchants access to all and ever-changing payment methods with a single integration.</PointText>,

      <PointText>Designed <BoldText>Database and APIs</BoldText> along with my team members for performance, scalability and availability.</PointText>,
    ]
  },
  {
    role: 'SDE Intern',
    org: {
      name: 'Kalpkriti',
      link: 'https://tweencraft.com'
    },
    duration: 'Nov 21 - Feb 22 • 4 mos',
    points: [
      <PointText>Worked in the front-end team for the mobile application <PointLink link="https://tweencraft.com">TweenCraft</PointLink>.</PointText>,

      <PointText>Built new home screen design of the app where YouTube embedded videos are shown under different categories and much more using <BoldText>C++</BoldText> primarily.</PointText>,
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
      <section className="flex flex-col text-gray-200 z-20 justify-center gap-3 my-2 mx-1 flex-wrap max-w-[1150px] mb-14">
        {experiencesData.map((experience, i) => <ExperienceCard experience={experience} key={i}/>)}
      </section>
    </>
  )
}



export default Experiences