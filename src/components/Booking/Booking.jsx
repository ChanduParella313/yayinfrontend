import React,{useContext, useState} from 'react';
import './booking.css';
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import { BASE_URL } from "../../utils/config.js";


const Booking = ({tour,avgRating}) => {
  const {price,reviews,title}=tour;

  const navigate=useNavigate()


  const {user}=useContext(AuthContext);


    const [booking,setBooking]=useState({
      userId:user && user._id,
      userEmail:user && user.email,
      tourName:title,
      fullname:"",
      phone:'',
      guestSize:1,
      bookAt:''
    });

    const handleChange=e=>{ 
      setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    };


    const serviceFee=10;
    const totalAmount=Number(price)*Number(booking.guestSize)+Number(serviceFee);
   

    const handleClick=async(e)=>{
      e.preventDefault();
      

      try {
        if(!user||user===undefined||user===null){
          return alert('Please Login');
        }

        const res=await fetch(`${BASE_URL}/booking`,{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
          credentials:'include',
          body:JSON.stringify(booking),
        });

        const result = await res.json();
        if(!res.ok){
          return alert(result.message);
        }
        console.log(booking);
        navigate('/thank-you');

      } catch (err) {
        alert(err.message);
      }
      
      
    }

  return (
    <div className='booking'>
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/per person</span></h3>
            <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>
                    {avgRating===0?null:avgRating}({reviews?.length})
                </span>
        </div>
        {/* =======Booking Form======== */}

        <div className="booking_form">
          <h5>Information</h5>
          <Form className='booking_info-form' onSubmit={handleClick}>
            <FormGroup>
              <input type="text" placeholder='Full Name' id='fullname' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
              <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
              <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange}/>
            </FormGroup>
          </Form>
        </div>

        {/* =======Booking End======== */}

        {/* =======Booking Bottom======== */}

        <div className="booking_bottom">
          <ListGroup>
            <ListGroupItem className='border-0 px-0'>
              <h5 className='d-flex align-items-center gap-3'>${price}<i class="ri-close-line"></i> {booking.guestSize} persons</h5>
              <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
              <h5>Service Charge</h5>
              <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>

        {/* =======Booking End======== */}
    </div>
  )
}

export default Booking