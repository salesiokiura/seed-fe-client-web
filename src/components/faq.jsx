import React from 'react'
import { ResponsiveWrapper } from "../hoc";

function FAQ() {
  return (
    <>
    <h1 className="text-3xl font-bold">
      FAQs
    </h1>
    <p>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
    </p>
    </>
  )
}

export default ResponsiveWrapper(FAQ);
