import image from "./images/drawing.png"

export default function Home() {
  return(
    <main id="main">
      <h2 id="subsite-name">
        Frontend Web Developer & Digital Illustrator
      </h2>
      <div id="home-about">
        <h2 id="main-heading">Hi there! I'm Carrie!</h2>
        <p>Welcome to my portfolio! I'm a front-end developer and a digital illustrator. Take a look around, I might be the web dev you've been looking for to make your website a reality!</p>
      </div>
      <div class="pic">
        <img src= {image} alt="digital illustration of girl" width="300"/>
      </div>
      
     
    </main>
  );
}
