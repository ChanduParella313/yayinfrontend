import React from 'react';
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList'; 
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import NewsLetter from '../shared/NewsLetter';
// import Users from '../components/Users';

function Home() {
  return (
    <>
    {/*==========Hero Section Start============*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt='WorldImg'/>
            </div>
            <h1>Travelling opens the Door to creating <span className="highlight">memories</span></h1>
            <p>Travel gives us our greatest stories, our most cherished memories and countless irreplaceable learnings that we can choose to pay forward to others. It teaches us about ourselves and each other, it broadens our horizons and, just like a reset button, it forces us to refocus on what really matters</p>
            </div>
          </Col>
          <Col lg='2'><div className="hero__img-box"><img src={heroImg} alt='HeroImgBox'/></div></Col>
          <Col lg='2'><div className="hero__img-box .hero__video-box mt-4"><video src={heroVideo} alt='HeroVideo' controls/></div></Col>
          <Col lg='2'><div className="hero__img-box mt-5"><img src={heroImg02} alt='HeroImgBox'/></div></Col>
          <SearchBar/>
        </Row>
      </Container>
      </section>
      {/*==========Hero Section Start============*/}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/*==========Feature Tour Section Start============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className="feature__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/*==========Feature Tour Section Ends============*/}

      {/*==========Experience Section Starts============*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With our all experience <br/> We serve you</h2>
                <p>It's pretty much safe to say that enthusiasm is the most important part of your travelling.
                  <br/>
                  Great tour guides will share their knowledge in an engaging, interactive and entertaining way.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
               
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*==========Experience Section Ends============*/}

      
      {/*==========Gallery Section Starts============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className='gallery__title'>Visit our customers tour Gallery</h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*==========Gallery Section Ends============*/}

      {/*==========Testimonial Section Starts============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Tourist Love'}/>
              <h2 className="testimonial__title">What our Tourists say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*==========Testimonial Section Ends============*/}

      <NewsLetter/>
      {/* <Users/> */}
      </>
  )
}

export default Home