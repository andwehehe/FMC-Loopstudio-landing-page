import styles from "./Introduction.module.css"
import introImg from "/src/assets/images/mobile/image-interactive.jpg"

function Introduction() {

  return(
    <article className={styles.introductionComponent}>
      <img 
      className={styles.introImg}
        src={introImg} 
        alt="a dude in VR" 
      />

      <div className={styles.introInfo}>
        <h2 className={styles.introTitle}> 
          THE LEADER IN <br className={styles.moleBr}/> INTERACTIVE VR
        </h2>

        <p className={styles.introDescription}>
          Founded in 2011, Loopstudios has been producing world-class
          virtual reality projects for some of the best companies around
          the globe. Our award-winning creations have transformed businesses
          through digital experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
}

export default Introduction