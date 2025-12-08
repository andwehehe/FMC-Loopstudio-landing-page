import styles from "./Creations.module.css"
import { useState, useEffect } from "react"


function Creations() {
  
  const [ creations, setCreations ] = useState([]);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  

  return(
    <section className={styles.creationsSection}>

      <h2 className={styles.creationTitle}>OUR CREATIONS</h2>

      <div className={styles.creations}>
        {
          creations.map(creation => {
            const { title, imageSRC, key } = creation;
            const { mobile, desktop } = imageSRC;
            let correctImage;

            if(isMobile) {
              correctImage = mobile;
            } else {
              correctImage = desktop;
            }

            

            return(
              <div
                key={key}
                className={styles.cards}
              >

                <img src={correctImage} alt={title} />
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