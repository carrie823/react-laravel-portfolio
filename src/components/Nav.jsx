import {NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/">Home <i class="fa-solid fa-house-chimney"></i></NavLink> 
        </li>
        <li>
          <NavLink to="/about">About Me <i class="fa-regular fa-face-laugh-wink"></i></NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects <i class="fa-solid fa-code"></i></NavLink>
        </li>
        <li>
          <NavLink to="/education">Education <i class="fa-solid fa-graduation-cap"></i></NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact <i class="fa-regular fa-address-card"></i></NavLink>
        </li>
      </ul>
    </nav>
  );
}