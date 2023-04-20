import {useState, useEffect} from "react";

export default function Contactinfo() {
  const [contactTitle, setContactTitle] = useState("");
  const [contactURL, setContactURL] = useState("");

  const [contactTitle2, setContactTitle2] = useState("");
  const [contactURL2, setContactURL2] = useState("");
  //const [projectSource, setProjectSource] = useState();

  useEffect(() => {
    const getContact= async () => {
      let response = await fetch(
        "https://laravel.carrieng.ca/api/contacts"
      );
      let data = await response.json();
      console.log(data);
      setContactTitle(data[0].title);
      setContactURL(data[0].url);
      setContactTitle2(data[1].title);
      setContactURL2(data[1].url);
      // setsetProjectSource(data[0].);
      // setProjectSource(data.source_url);
    }
    getContact();
  }, []);

  return (
    <main id="contact-info">
      <div class="contact-text">
        <h2>{contactTitle} <i class="fa-brands fa-github"></i></h2>
        <div><a href={contactURL}>Contact Me</a></div>
      </div>
      <div class="contact-text">
        <h2>{contactTitle2} <i class="fa-brands fa-linkedin"></i></h2>
        <div><a href={contactURL2}>Contact Me</a></div>
      </div>

    </main>
  );
}