import Hero from './Hero'
import Footer from './Footer'
import c from '../assets/carousel_images/Image.png'
import c1 from '../assets/carousel_images/Image-1.png'
import c2 from '../assets/carousel_images/Image-2.png'
import c3 from '../assets/carousel_images/Image-3.png'
import c4 from '../assets/carousel_images/Image-4.png'

import midsec from '../assets/midsec1/Image.png'
import midsec1 from '../assets/midsec1/Image-1.png'
import midsec2 from '../assets/midsec1/Image-2.png'
import WorkWithUs from './WorkWithUs'
import Services from './Services'


function Home() {
  return (
    <>
        <Hero />
      


<div>
  <div className="who_we_are_container">
    <p className="caption1"> WHO WE ARE</p>
    <p className="Heading2"> We're Our Blooms® and we're here to help you find your floral story.  </p>
    <button className="button_danger"> ABOUT US</button>
  </div>


  <div className="carousel">
    <img src={c} alt="carousel image" />
    <img src={c1} alt="carousel image" />
    <img src={c2} alt="carousel image" />
    <img src={c3} alt="carousel image" />
    <img src={c4} alt="carousel image" />
  </div>

  <Services />


<picture>
<source media="(min-width: 1200px)" srcSet={midsec} />
<source media="(min-width: 800px)" srcSet={midsec1} />
<img src={midsec2} alt="Ourblooms Midsection Image" />
</picture>

<WorkWithUs />
</div>

<Footer />
    </>


  );
}
export default Home;


