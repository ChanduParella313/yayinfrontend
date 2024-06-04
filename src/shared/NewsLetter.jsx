import React from 'react';
import './newsletter.css';
import { Container,Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information</h2>
                        <div className="newsletter__input">
                            <input type="text" placeholder='Enter Your email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Traveling fosters a medium to build human connections with one another by learning about culture, food, new sites, music, and the way people live their day to day lives in different parts of the world. It's the best on-site learning a person can get. The internet can only explain so much about a place.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter