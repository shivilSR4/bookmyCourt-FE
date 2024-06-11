import React, {  useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

function Login({togglebox}) {

  const [logData,SetlogData] = useState({email:" ",password:""})
  const navigate = useNavigate()

  const handleChange = (e)=>{
      SetlogData({...logData, [e.target.name]: e.target.value})
  }

  const doLogin = () => {
    axios.post(`${process.env.REACT_APP_BE_URL}/auth/login`, logData)
    .then((res) => {
    
      if(res.data.message == "login success"){
    localStorage.setItem('token',res.data.token)
    navigate('/home')
      }
    }).catch((res) => {
      if(res.response.data.message=="Invalid credentials"){
        alert(res.response.data.message)
      }
      else{
        alert("something went wrong")
      }
    });
  }
  
  
  

  return (
    <MDBContainer fluid>
    
    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='50' lg='7' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</h3>

            

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' type='email' name='email' value={logData.email} onChange={handleChange}  />
            </div>

            

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' name='password' value={logData.password} onChange={handleChange} />
            </div>

          

           

            <MDBBtn className='mb-4' size='lg' onClick={doLogin} >Register</MDBBtn>
            
            <p>Click Me for...<i class="text-primary" onClick ={()=>{togglebox('signup')}}>SiGN UP</i></p>

          </MDBCol>

          <MDBCol md='50' lg='5' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF14Foh-KDFOiP4Zetg8eQaiUKuAAJIy-tD2TdJuyFtp2tt54Pd5cvxoHd9Rd5EtFArFw&usqp=CAU' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
);
}
  


export default Login