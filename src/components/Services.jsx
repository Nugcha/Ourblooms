import sec1 from '../assets/section1/sec1.png'
import sec2 from '../assets/section1/sec2.png'
import sec3 from '../assets/section1/sec3.png'


function Services(){
    return(
            <>
            <div className="what_we_do">
  <p className=" heading1"> WHAT WE DO</p>
  <p className="paragraph1">We bring a touch of that simple magic into your world. </p>
</div>
<hr/>
<div className="section1">
<p  className="heading1">1 </p>
<img src={sec1} alt="section image"/>
<p className="heading1"> FLORAL INSTALLATIONS</p>
<p className="paragraph1">Living art for homes, businesses, and events. </p>
</div>
<hr/>
<div className="section1">
<p  className="heading1">2 </p>
<img src={sec2} alt="section image"/>
<p className="heading1">NATIVE PLANT ARRANGEMENTS</p>
<p className="paragraph1">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations. </p>
</div>
<hr/>
<div className="section1">
<p  className="heading1">3 </p>
<img src={sec3} alt="section image"/>
<p className="heading1"> CUSTOM FLORAL CONCEPTS</p>
<p className="paragraph1">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations. </p>
</div>
<hr/>
            </>
    )
}

export default Services;