import styles from "./Creations.module.css"
import { useState, useEffect } from "react"


function Creations({ isMobile }) {
  
  const [ creations, setCreations ] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("./data/data.json");
        const data = await res.json();
        setCreations(data);
      } catch(error) {
        console.error(error);
      }
    }

    loadData();
  }, [])
  
  return(
    <section className={styles.creationsSection}>

      <div className={styles.titleButton}>
        <h2 className={styles.creationTitle}>OUR CREATIONS</h2>

        <button 
          type="submit"
          className={`${styles.seeAllBtn} ${styles.seeAllBtnTop}`}
        >SEE ALL</button>
      </div>

      <div className={styles.creations}>
        {
          creations.map(creation => {
            const { title, imageSRC, key } = creation;
            const { mobile, desktop } = imageSRC;

            return(
              <div
                key={key}
                className={styles.cards}
              >

                <img src={isMobile ? mobile : desktop} alt={title} />
                <p className={`${styles.cardTitle} ${styles[key]}`}> {title} </p>

              </div>
            );
          })
        }
      </div>

      <button 
        type="submit"
        className={styles.seeAllBtn}
      >SEE ALL</button>

    </section>
  );
}

export default Creations