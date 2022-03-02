import "./header.css"
import { useState } from "react";
import { faBars } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section class="header">
        <div class="nav-links">
          <ul>
            <li><a href="/">Adachi to Shimamura</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Return Policy</a></li>
            <li><a href="/">Terms and Conditions</a></li>
          </ul>
        </div>
            <div class="menu">
                <div class="menu-btn" onClick={(e) => setIsActive(!isActive)}>
                  <FontAwesomeIcon icon={faBars} />
                  Menu
                </div>
                {isActive && (
                    <div class="dropdown-menu">
                      <ul>
                        <li><a href="/">Adachi to Shimamura</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Return Policy</a></li>
                        <li><a href="/">Terms and Conditions</a></li>
                      </ul>
                    </div>
                )}
            </div>
    </section>
  );
}

export default Header;