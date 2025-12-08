import styles from "./Footer.module.css"
import logo from "/src/assets/images/icons/logo.svg"
import facebook from "/src/assets/images/icons/icon-facebook.svg"
import twitter from "/src/assets/images/icons/icon-twitter.svg"
import pinterest from "/src/assets/images/icons/icon-pinterest.svg"
import instagram from "/src/assets/images/icons/icon-instagram.svg"

function Footer() {

  return(
    <footer className={styles.footer}>
      <img 
        src={logo} 
        alt="logo"
        className={styles.logo}
      />

      <nav className={styles.navBar}>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>

      <section className={styles.socials}>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
        <img src={instagram} alt="instagram" />
      </section>

      <p className={styles.credits}>© 202 | Loopstudios. All rights reserved.</p>
    </footer>
  );
}

export default Footer