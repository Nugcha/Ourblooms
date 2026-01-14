import  footerr from '../assets/footer/footerr.png'
import  Footer1 from '../assets/footer/Footer-1.png'
import  Footer2 from '../assets/footer/Footer2.png'


function Footer(){
    return(
<picture>
            <source media="(min-width: 1200px)" srcSet={footerr} />
            <source media="(min-width: 800px)" srcSet={Footer1} />
            <img src={Footer2} alt="Footer" />
        </picture>
    )
}
export default Footer;


