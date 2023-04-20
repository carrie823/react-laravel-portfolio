import {Link} from "react-router-dom";
import Nav from "./Nav";
import NavFooter from "./NavFooter";

export default function Footer() {
  return (
    <footer id="footer">
      <NavFooter />
      <p id="footer">
       © Copyright Carrie Ng, 2023
      </p>
      
    </footer>
  )
}