import {useState, useEffect} from "react";
// import calculator from "./IMG/calculator.jpg"
// import current from "./IMG/humbercurrent.png"

export default function Projectinfo() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectLink, setProjectLink] = useState();
  const [projectContent, setProjectContent] = useState();
  const [projectImage, setProjectImage] = useState();

  const [projectTitle2, setProjectTitle2] = useState("");
  const [projectLink2, setProjectLink2] = useState();
  const [projectContent2, setProjectContent2] = useState();
  const [projectImage2, setProjectImage2] = useState();

  useEffect(() => {
    const getProject = async () => {
      let response = await fetch(
        "https://laravel.carrieng.ca/api/projects"
      );
      let data = await response.json();
      console.log(data);
      setProjectTitle(data[0].title);
      setProjectLink(data[0].url);
      setProjectContent(data[0].content);
      setProjectImage(data[0].image);

      setProjectImage2(data[1].image);
      setProjectTitle2(data[1].title);
      setProjectLink2(data[1].url);
      setProjectContent2(data[1].content);

    }
    getProject();
  }, []);

  return (
    <main id="project-info">
    <div id="project1">
      {/* <div class="project-pic">
          <img src= {current} alt="humber current webpage screenshoot" width="300"/>
      </div> */}
      <div class="project-pic">
          <img src= {projectImage} alt="humber current webpage screenshoot" width="300"/>
      </div>

      <h2>{projectTitle}</h2> 
      <div>{projectContent}</div>
      <div><strong>Langages: HTML, CSS</strong></div>
      <div id="project1-link"><a href={projectLink}>View Project</a></div>
    </div>
    <div id="project2">
      <div class="project-pic">
          <img src= {projectImage2} alt="Price calculator webpage screenshoot" width="300"/>
      </div>
      <h2>{projectTitle2}</h2>
      <div>{projectContent2}</div>
      <div><strong>Langages: HTML, CSS, JavaScript</strong></div>
      <div id="project2-link"><a href={projectLink2}>View Project</a></div>
    </div>
    </main>
  );
}
