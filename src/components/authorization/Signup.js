import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';




function Signup()
{
  const [name,SetName] = useState();
const [email,SetEmail] = useState();
const [number,SetNumber] = useState();
const [password,SetPassword] = useState();
const [cpassword,SetCpassword] = useState();

const handleName = (e)=>{
  SetName(e.target.value)
 
}

const handleEmail = (e)=>{
  SetEmail(e.target.value)
 
}

const handleNumber = (e)=>{
  SetNumber(e.target.value)
 
}

const handlePassword = (e)=>{
  SetPassword(e.target.value)
 
}

const handleCpassword = (e)=>{
  SetCpassword(e.target.value)
}

const signUp = ()=>{
  axios.post('http://localhost:5000/auth/signup',{name,email,number,password}).then((res)=>{
     res.json().then((res)=>{
      console.log(res)
     })
  }).catch((err =>{
    console.log(err)
  }))
}

// useEffect(()=>{
//   console.log(name,email)
// },[name,email,number,Password])
    return (
        <MDBContainer fluid>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h3>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Name' id='form1' type='text' name='name' value={name} onChange={handleName}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email' name='email' value={email} onChange={handleEmail}/>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="mobile-alt me-3" size='lg'/>
                    <MDBInput label='Your Number' id='form2' type='number' name='number' value={number} onChange={handleNumber}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password' name='password' value={password} onChange={handlePassword}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput label='Repeat your password' id='form4' type='password' name='cpassword' value={cpassword} onChange={handleCpassword}/>
                  </div>
    
                  <div className='mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div>
    
                  <MDBBtn className='mb-4' size='lg' onClick={signUp}>Register</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://media.istockphoto.com/id/1333167234/vector/soccer-stadium-players-football-match-athletes-fighting-kicking-ball-dynamic-poses-of-people.jpg?s=2048x2048&w=is&k=20&c=96ohbo01R_jS_hfD95dKjUMNzF23YrpEBqawQd2aeKg=' fluid/>
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
    
}

export default Signup