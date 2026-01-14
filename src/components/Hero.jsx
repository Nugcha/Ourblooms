import logo1 from '../assets/Logos/Logo-1.png'
import logo2 from '../assets/Logos/Logo-2.png'
import logo from '../assets/Logos/Logo.png'


import image from '../assets/Hero/Hero.png'
import image1 from '../assets/Hero/Hero1.png'
import image2 from '../assets/Hero/Hero2.png'


function Hero(){
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={logo} />
            <source media="(min-width: 800px)" srcSet={logo1} />
            <img src={logo2} alt="Ourblooms Logo" />
        </picture>


        <picture>
            <source media="(min-width: 1200px)" srcSet={image} />
            <source media="(min-width: 800px)" srcSet={image1} />
            <img src={image2} alt="Ourblooms Logo" />
        </picture>

        </>
    )
}
export default Hero;