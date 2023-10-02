import "./Foter.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="foter">
      <div className="home-sci">
        <a
          href="https://www.facebook.com/bruno.oliveirapaesdelima/"
          target="_blank"
        >
          <Icon icon="ri:facebook-fill" />
        </a>
        <a href="https://www.instagram.com/brunoop_lima/" target="_blank">
          <Icon icon="ri:instagram-fill" />
        </a>
        <a href="https://www.linkedin.com/in/brunoplima/" target="_blank">
          <Icon icon="ri:linkedin-fill" />
        </a>
        <a href="https://github.com/Brunooplima" target="_blank">
          <Icon icon="teenyicons:github-solid" />
        </a>
      </div>
      <div className="espaco-copy">
        <p>Bruno Lima &copy; 2023</p>
      </div>
    </div>
  );
}

export default Footer;
