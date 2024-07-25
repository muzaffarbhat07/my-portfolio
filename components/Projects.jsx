import ProjectCard from "@/components/ProjectCard"
import { BoldText, PointText } from "./BulletPoint";

const projectsData = [
  {
    name: "Identity Reconciliation Service",
    image: "/assets/images/projects/id_recon.jpg",
    demo: "https://identity-reconcillation.vercel.app/",
    code: "https://github.com/muzaffarbhat07/identity-reconciliation/",
    techStack: 'Node.js, TypeScript, PostgreSQL, Prisma',
    points: [
      <PointText>The Identity Reconciliation API Service is designed to <BoldText>identify</BoldText> and keep track of a user's identity <BoldText>across multiple requests</BoldText> with <BoldText>different contact information</BoldText>.</PointText>,
      <PointText>This service ensures <BoldText>linking different requests</BoldText> made <BoldText>with different contact information</BoldText> to the <BoldText>same person</BoldText>.</PointText>,
    ]
  },
  {
    name: "Online Code Editor",
    image: "/assets/images/projects/editor.jpg",
    demo: "https://muzaffarbhat07.github.io/online-code-editor/",
    code: "https://github.com/muzaffarbhat07/online-code-editor",
    techStack: 'React.js',
    points: [
      <PointText>It's an Online Code Editor for <BoldText>HTML, CSS, JS code snippets</BoldText> with the functionality similar to that of codepen.io.</PointText>,
      <PointText>Users can seamlessly <BoldText>write</BoldText> code and witness the <BoldText>live output</BoldText> of it, all within a <BoldText>unified interface</BoldText>. For convenience, localStorage is employed to preserve users' work.</PointText>,
    ]
  },
  {
    name: "Muzaffar's Blog",
    image: "/assets/images/projects/blog.jpg",
    demo: "https://muzaffars-blog.onrender.com/",
    code: "https://github.com/muzaffarbhat07/muzaffars-blog",
    techStack: 'React.js, Redux, Node.js, Express.js, MongoDb',
    points: [
      <PointText>It's my personal blog app, dedicated to sharing insightful tech blogs. Users can <BoldText>read, comment, and like posts</BoldText>. They can easily find content by <BoldText>searching</BoldText> titles or keywords, and organize results with <BoldText>filters</BoldText> and <BoldText>sorting</BoldText> options.</PointText>,
      <PointText>It includes <BoldText>admin dashboard</BoldText> to ensure smooth management, allowing oversight of blogs, user activity, and comments. It's a comprehensive tool to maintain the platform's integrity and quality.</PointText>,
    ]
  },
  {
    name: "Promptopia",
    image: "/assets/images/projects/promptopia.jpg",
    demo: "https://promptopia-muzaffar.vercel.app/",
    // code: "https://github.com/muzaffarbhat07/promptopia",
    techStack: 'Next.js, TailwindCSS, NextAuth',
    points: [
      <PointText>Promptopia is an open-source <BoldText>AI prompting tool</BoldText> for modern world to <BoldText>discover, create and share</BoldText> creative prompts.</PointText>,
      <PointText>It's entirely crafted using <BoldText>Next.js</BoldText>, encompassing both client and server sides, and integrates seamlessly with <BoldText>NextAuth</BoldText> for enhanced user authentication.</PointText>,
    ]
  },
]

const Projects = () => {
  return (
    <>
      <img
        src="/assets/images/star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl mt-3 mb-2">
        My Recent <p className="text-[#ad50eb]">Works </p>
      </h1>
      <p className="text-gray-200 text-xs sm:text-lg">
        Here are a few personal projects I've worked on recently.
      </p>
      <div className="z-20 flex flex-col justify-center gap-3 my-2 mx-1 flex-wrap max-w-[1150px] text-gray-200 mt-5">
        {projectsData.map((project, i) => <ProjectCard project={project} key={i} />)}
      </div>
    </>
  )
}

export default Projects;