import image from "./images/drawing.png"

export default function About() {
  return (
    <main id="about-main">
      <h1>About</h1>
      <h2>Hi, I'm Carrie!</h2>
      <p>I am currently a Humber College student doing a Post-Graduate Certificate in Web Development. I enjoying doing front-end web developement and digital illustration. I am knowledgeable in JavaScript, HTML/CSS, React, SQL, C#, ASP.NET, and PHP.</p>
      {/* <img class="pic" src="{image}" alt="digital illustration of girl" width="300"/> */}
      <div class="pic">
        <img src= {image} alt="digital illustration of girl" width="300"/>
      </div>
    </main>
  );
}