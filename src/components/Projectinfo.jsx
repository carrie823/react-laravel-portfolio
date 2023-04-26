import {useState, useEffect} from "react";


export default function Projectinfo() {
  const [projectTitle, setProjectTitle] = useState();
  const [projectLink, setProjectLink] = useState();
  const [projectContent, setProjectContent] = useState();
  const [projectImage, setProjectImage] = useState();

  const [projectTitle2, setProjectTitle2] = useState();
  const [projectLink2, setProjectLink2] = useState();
  const [projectContent2, setProjectContent2] = useState();
  const [projectImage2, setProjectImage2] = useState();
  
  const [projectTitle3, setProjectTitle3] = useState();
  const [projectLink3, setProjectLink3] = useState();
  const [projectContent3, setProjectContent3] = useState();
  const [projectImage3, setProjectImage3] = useState();
  
  const [projectTitle4, setProjectTitle4] = useState();
  const [projectLink4, setProjectLink4] = useState();
  const [projectContent4, setProjectContent4] = useState();
  const [projectImage4, setProjectImage4] = useState();

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
      
      setProjectImage3(data[2].image);
      setProjectTitle3(data[2].title);
      setProjectLink3(data[2].url);
      setProjectContent3(data[2].content);
      
      setProjectImage4(data[3].image);
      setProjectTitle4(data[3].title);
      setProjectLink4(data[3].url);
      setProjectContent4(data[3].content);

    }
    getProject();
  }, []);

  return (
    <main id="project-info">
      <div id="project1">
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
      
       <div id="project2">
        <div class="project-pic">
            <img src= {projectImage3} alt="Art blog webpage screenshoot" width="300"/>
        </div>
        <h2>{projectTitle3}</h2>
        <div>{projectContent3}</div>
        <div><strong>Langages: HTML, CSS</strong></div>
        <div id="project2-link"><a href={projectLink3}>View Project</a></div>
      </div>

       <div id="project2">
        <div class="project-pic">
            <img src= {projectImage4} alt="porfolio webpage screenshoot" width="300"/>
        </div>
        <h2>{projectTitle4}</h2>
        <div>{projectContent4}</div>
        <div><strong>Langages: HTML, CSS, PHP, MySQL</strong></div>
        <div id="project2-link"><a href={projectLink4}>View Project</a></div>
      </div>
      
    </main>
  );
}
