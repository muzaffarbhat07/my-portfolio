import ProjectCard from "@/components/ProjectCard"

const projectsData = [
  {
    name: "Online Code Editor",
    image: "/assets/images/projects/editor.jpg",
    about: "It's an Online Code-Editor for HTML, CSS, JS code snippets with the functionality similar to that of codepen.io. To save a user's work, localStorage is used.",
    demo: "https://muzaffarbhat07.github.io/online-code-editor/",
    code: "https://github.com/muzaffarbhat07/online-code-editor",
  },
  {
    name: "Muzaffar's Blog",
    image: "/assets/images/projects/blog.jpg",
    about: "It's my personal blog app where I share blogs about tech. Users can read, comment and like the blogs.",
    demo: "https://muzaffars-blog.onrender.com/",
    code: "https://github.com/muzaffarbhat07/muzaffars-blog",
  },
  {
    name: "Promptopia",
    image: "/assets/images/projects/promptopia.jpg",
    about: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
    demo: "https://promptopia-muzaffar.vercel.app/",
    // code: "https://github.com/muzaffarbhat07/promptopia",
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
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
        My Recent <p className="text-[#ad50eb]">Works </p>
      </h1>
      <p className="text-gray-200 text-xs sm:text-lg">
        Here are a few personal projects I've worked on recently.
      </p>
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        {projectsData.map((project, i) => <ProjectCard project={project} key={i} />)}
      </div>
    </>
  )
}

export default Projects;