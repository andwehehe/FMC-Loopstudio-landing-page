import styles from "./Header.module.css";

import logo from "/src/assets/images/icons/logo.svg";
import menuIcon from "/src/assets/images/icons/icon-hamburger.svg";
import headerBGMobile from "/src/assets/images/mobile/image-hero.jpg"
import headerBGDesktop from "/src/assets/images/desktop/image-hero.jpg"

function Header({ isMobile }) {
  
  return(
    <header 
      className={styles.heroSection}
    >

      <img 
        src={isMobile ? headerBGMobile : headerBGDesktop}
        alt="a dude in VR" 
        className={styles.backgroundImage}
      />

      <div className={styles.logoMenu}>
        <img 
          src={logo} 
          alt="logo"
          className={styles.logo}
        />

        <div className={styles.menuDisplay}>
          <img 
            src={menuIcon} 
            alt="menu" 
            className={styles.menuIcon}
            style={{ display: isMobile ? "block" : "none" }}
          />

          <nav className={styles.menuNav} style={{ display: isMobile ? "none" : "block" }}>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </nav>
        </div>
      </div>

      <h1 className={styles.title}>
        IMMERSIVE <br /> EXPERIENCES <br /> THAT  <br className={styles.moleBr} /> DELIVER
      </h1>

    </header>
  );
}

export default Header