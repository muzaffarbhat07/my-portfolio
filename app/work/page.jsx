import Experiences from "@/components/Experiences"
import Projects from "@/components/Projects"

const Work = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <Experiences />
      <Projects />
    </div>
  )
}

export default Work