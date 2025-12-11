import styles from "./Header.module.css";

import logo from "/src/assets/images/icons/logo.svg";
import menuIcon from "/src/assets/images/icons/icon-hamburger.svg";
import headerBGMobile from "/src/assets/images/mobile/image-hero.jpg"
import headerBGDesktop from "/src/assets/images/desktop/image-hero.jpg"
import closeIcon from "/src/assets/images/icons/icon-close.svg"

function Header({ isMobile, setOpenMenu, openMenu }) {

  const handleOpenMenu = () => {
    setOpenMenu("block");
    document.body.classList.add("fixedBody");
  }

  const handleCloseMenu = () => {
    setOpenMenu("none");
    document.body.classList.remove("fixedBody");
  }

  
  return(
    <header 
      className={styles.heroSection}
    > 

      <section 
        className={styles.menuOverlay}
        style={{ display: isMobile ? openMenu : "none" }}
      >
  
        <div className={styles.logoClose}>
          <img 
            className={styles.logoOverlay}
            src={logo} 
            alt="loopstudios' logo" 
          />

          <img 
            className={styles.closeMenu}
            src={closeIcon} 
            alt="close' icon" 
            onClick={handleCloseMenu}
          />
        </div>

        <nav className={`${styles.menuNav} ${styles.menuNavOverlay}`}>
          <ul>
            <li>ABOUT</li>
            <li>CAREERS</li>
            <li>EVENTS</li>
            <li>PRODUCTS</li>
            <li>SUPPORT</li>
          </ul>
        </nav>

      </section>

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
            onClick={handleOpenMenu}
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