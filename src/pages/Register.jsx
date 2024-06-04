import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup } from "reactstrap";
import {AuthContext} from '../context/AuthContext.js';
import { BASE_URL } from "../utils/config";
import { Link,useNavigate } from "react-router-dom";
import "../styles/login.css";
import registerImg from '../assets/images/register.png';
import userIcon from "../assets/images/user.png";

function Register() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    phone:undefined,
    email: undefined,
    password: undefined,
  });

  

  const {dispatch}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async(e) => {
    e.preventDefault();

    try {
      const res=await fetch(`${BASE_URL}/auth/register`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })
      const result=await res.json()

      if(!res.ok)alert(result.message);

      dispatch({type:'REGISTER_SUCCESS'});
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }

  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="register" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User" />
                </div>
                <h2>SignUp</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="User Name"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      placeholder="Phone"
                      id="phone"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    SignUp
                  </Button>
                </Form>
                <p>
                  Already have an Account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
