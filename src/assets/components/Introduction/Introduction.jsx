import styles from "./Introduction.module.css"
import introImg from "/src/assets/images/mobile/image-interactive.jpg"

function Introduction() {

  return(
    <article className={styles.introductionComponent}>
      <img 
        src={introImg} 
        alt="a dude in VR" 
      />

      <h2 className={styles.introTitle}> 
        THE LEADER IN INTERACTIVE VR
      </h2>

      <p className={styles.introDescription}>
        Founded in 2011, Loopstudios has been producing world-class
        virtual reality projects for some of the best companies around
        the globe. Our award-winning creations have transformed businesses
        through digital experiences that bind to their brand.
      </p>
    </article>
  );
}

export default Introduction