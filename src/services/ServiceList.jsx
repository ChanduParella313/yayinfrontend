import React from 'react';
import ServiceCard from './ServiceCard';
import{Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';


const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Weather could be extremely cold or extremely hot",
    },
    {
        imgUrl:guideImg,
        title:"Best tour guide",
        desc:"Tour gives you a good adventure and some memories",
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"You can customize your tour with the places",
    }
]

const ServiceList=()=> {
  return (
    <>
        {
            servicesData.map((item, index)=><Col lg='3' md='6' sm='12' className='mb-4' key={index}><ServiceCard item={item}/></Col>)
        }
    </>
  )
}

export default ServiceList