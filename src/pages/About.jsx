import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import lady from "../assets/AboutPage/lady.png"
import lady1 from "../assets/AboutPage/lady-1.png"
import lady2 from "../assets/AboutPage/lady-2.png"  
import flower1 from '../assets/Aboutpage/1234.png' ;
import flower2 from '../assets/Aboutpage/3-up image-1.png' ;
import flower3 from '../assets/Aboutpage/3-up image-2.png' ;
import ib from "../assets/AboutPage/Image breaker.png"
import ib2 from "../assets/AboutPage/Image breaker-1.png"
import ib3 from "../assets/AboutPage/Image breaker-2.png"

function About() {
    return(
      <>
        <div className={styles.about_main}>
          <p className='heading1'>ABOUT</p>
          <div className={styles.about_container}>
            <div className={styles.left_container}>
              <p className="caption1">OUR STORY</p>
            </div>
            <div className={styles.right_container}>
              <div className={styles.author_information}>
                <picture>
                  <source media="(min-width: 1200px)" srcSet={lady} />
                  <source media="(min-width: 800px)" srcSet={lady1} />
                  <img src={lady2} />
                </picture>
                <div className={styles.author_details}>
                  <p className='caption2'>LILY SMITH</p>
                  <p className='paragraph1'>Owner</p>
                </div>
              </div>
              <div className={styles.honor_container}>
                <div className={styles.honor_container_text}>
                  <p className="heading2">Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</p>
                </div>
                <div className={styles.honor_flowers}>
                 
                  <picture>
                    <source media="(min-width: 1520px)" srcSet={flower2} />
                    <source media="(min-width: 800px)" srcSet={flower2} />
                    <img src={flower3} />
                  </picture>
                </div>
              </div>
              <div className={styles.center_text}>
                <div className={styles.about_text_container}>
                  <p className='paragraph2'> Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil. <br /><br/> Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces. </p>
                </div>
              </div>
              <picture>
                <source media="(min-width: 1200px)" srcSet={ib} />
                <source media="(min-width: 800px)" srcSet={ib2} />
                <img className={styles.image_breaker} src={ib3} />
              </picture>
              <div className={styles.center_text}>
                <div className={styles.about_text_container2}>
                  <p className='paragraph2'> From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality. <br /><br/> Discover how we can add a touch of natural beauty to your next event. </p>
                  <button className='button_danger'>· BOOK A CONSULTATION</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  
  export default About;
  
  
  