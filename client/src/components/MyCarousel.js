import React from 'react'
import { Carousel } from 'react-bootstrap'
import cache1 from '../images/cache1.jpg'
import cache2 from '../images/cache2.jpg'
import hiking1 from '../images/hiking1.jpg'
import hiking2 from '../images/hiking2.jpg'
import phone1 from '../images/phone1.jpg'

const MyCarousel = () => {
	return(
		          <Carousel>
                <Carousel.Item className="short-image">
                  <img className="img-responsive center-block" alt="900x500" src={hiking1}/>
                  <Carousel.Caption>
                    <h3>Get Outside</h3>
                    <p>Stop programming for once and get some vitamin D!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img className="img-responsive center-block" alt="900x500" src={cache1}/>
                  <Carousel.Caption>
                    <h3>Find Treasure</h3>
                    <p>It's one man's trash!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img width={1600} alt="900x500" src={phone1}/>
                  <Carousel.Caption>
                    <h3>Look at your phone</h3>
                    <p>But do it outside for once!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img width={1600}alt="900x500" src={cache2}/>
                  <Carousel.Caption>
                    <h3>Make your own caches</h3>
                    <p>Then make hippie suckers run around looking for it. Ha!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img alt="900x500" src={hiking2}/>
                  <Carousel.Caption>
                    <h3>Look at the sky</h3>
                    <p>Ponder the meaning of your life!</p>
                  </Carousel.Caption>
                </Carousel.Item>
          </Carousel>
)
}

export default MyCarousel