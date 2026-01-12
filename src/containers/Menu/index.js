/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <Button title="services" onClick={() => (window.document.location.hash = "#nos-services")}>
          Nos services
        </Button>        
      </li>
      <li>
        <Button title="realisations" onClick={() => (window.document.location.hash = "#nos-realisations")}>
          Nos réalisations
        </Button>
      </li>
      <li>
        <Button title="equipe" onClick={() => (window.document.location.hash = "#notre-equipe")}>
          Notre équipe
        </Button>
      </li>
    </ul>    
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
