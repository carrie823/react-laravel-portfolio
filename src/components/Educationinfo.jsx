import {useState, useEffect} from "react";

export default function Educationinfo() {
  const [educationInstitution, setEducationInstitution] = useState("");
  const [educationCert, setEducationCert] = useState("");
  const [educationDesc, setEducationDesc] = useState("");
  const [educationYear, setEducationYear] = useState("");

  const [educationInstitution2, setEducationInstitution2] = useState("");
  const [educationCert2, setEducationCert2] = useState("");
  const [educationDesc2, setEducationDesc2] = useState("");
  const [educationYear2, setEducationYear2] = useState("");
  //const [projectSource, setProjectSource] = useState();

  useEffect(() => {
    const getEducation = async () => {
      let response = await fetch(
        "https://laravel.carrieng.ca/api/education"
      );
      let data = await response.json();
      console.log(data);
      setEducationInstitution(data[0].institution);
      setEducationCert(data[0].certification);
      setEducationDesc(data[0].description);
      setEducationYear(data[0].year);

      setEducationInstitution2(data[1].institution);
      setEducationCert2(data[1].certification);
      setEducationDesc2(data[1].description);
      setEducationYear2(data[1].year);
      // setsetProjectSource(data[0].);
      // setProjectSource(data.source_url);
    }
    getEducation();
  }, []);

  return (
    <main id="education-info">
      <div id="education1">
        <h2><strong>{educationInstitution}</strong></h2>
        <div class="education-text">
          <div>{educationCert}</div>
          <div>{educationDesc}</div>
          <div>{educationYear}</div>
        </div>
      </div>
      <div id="education2">
        <h2><strong>{educationInstitution2}</strong></h2>
        <div class="education-text">
          <div>{educationCert2}</div>
          <div>{educationDesc2}</div>
          <div>{educationYear2}</div>
        </div>
      </div>

    </main>
  );
}