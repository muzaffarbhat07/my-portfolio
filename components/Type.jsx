"use client";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <div>
      <Typewriter
        words={["Software Engineer", "Fullstack Developer"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  )
}

export default Type