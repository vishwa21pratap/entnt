import React from 'react'
import { Carousel } from 'react-bootstrap'; 

const Home = () => {
  const mystyle ={
    height : '100vh'

  }
  return (
    <div style={mystyle}>
      <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-full h-2/5" 
          src='https://img.freepik.com/free-photo/this-is-same-shoes_329181-1769.jpg?size=626&ext=jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <p>I always say shopping is cheaper than a psychiatrist</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-2/5" 
          src='https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>See Nature in Light of Sun</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-2/5" 
          src='https://w.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg'
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Nature is the source of all true knowledge</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  )
}

export default Home