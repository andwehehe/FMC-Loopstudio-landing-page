import styles from "./Header.module.css";

import logo from "/src/assets/images/icons/logo.svg";
import menuIcon from "/src/assets/images/icons/icon-hamburger.svg";

function Header() {
  
  return(
    <header className={styles.heroSection}>

      <div className={styles.logoMenu}>
        <img 
          src={logo} 
          alt="logo"
          className={styles.logo}
        />

        <img 
          src={menuIcon} 
          alt="menu" 
          className={styles.menuIcon}
        />
      </div>

      <h1 className={styles.title}>
        IMMERSIVE <br /> EXPERIENCES <br /> THAT  <br /> DELIVER
      </h1>

    </header>
  );
}

export default Header