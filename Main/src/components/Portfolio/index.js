import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "autoremind",
      description: "MERN Stack",
      link: "https://autoremind.herokuapp.com",
      repo: "https://github.com",
    },
    {
      name: "book-search",
      description: "MERN Stack",
      link: "https://unit21-mern.herokuapp.com/",
      repo: "https://github.com/mukul2016/unit21-MERN",
    },
    {
      name: "run-buddy",
      description: "HTML/CSS",
      link: "https://github.com/mukul2016/run-buddy",
      repo: "https://github.com/mukul2016/run-buddy",
    },
    {
      name: "budget-tracker",
      description: "Node/PWA",
      link: "https://unit22-pwa.herokuapp.com/",
      repo: "https://github.com/mukul2016/unit19-PWA",
    },
    {
      name: "note-taker",
      description: "React/JavaScript/CSS",
      link: "https://ms-note-taker.herokuapp.com",
      repo: "https://github.com/mukul2016/note-taker",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {" "}
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default Portfolio;
