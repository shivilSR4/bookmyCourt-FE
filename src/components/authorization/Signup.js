import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup({ togglebox }) {
const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCpassword = (e) => {
    setCpassword(e.target.value);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const signUp = () => {
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain both letters and numbers.');
      return;
    }

    if (password !== cpassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    setPasswordError('');
    setConfirmPasswordError('');

    axios.post('http://localhost:5000/auth/signup', { name, email, number, password })
      .then((res) => {

        console.log(res.data);
        navigate('/login')

        setName('');
        setEmail('');
        setNumber('');
        setPassword('');
        setCpassword('');
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h3>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='Your Name' id='form1' type='text' name='name' value={name} onChange={handleName} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='form2' type='email' name='email' value={email} onChange={handleEmail} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="mobile-alt me-3" size='lg' />
                <MDBInput label='Your Number' id='form2' type='number' name='number' value={number} onChange={handleNumber} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='form3' type='password' name='password' value={password} onChange={handlePassword} />
              </div>
              {passwordError && <p className='text-danger'>{passwordError}</p>}

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput label='Repeat your password' id='form4' type='password' name='cpassword' value={cpassword} onChange={handleCpassword} />
              </div>
              {confirmPasswordError && <p className='text-danger'>{confirmPasswordError}</p>}

              <MDBBtn className='mb-4' size='lg' onClick={signUp}>Register</MDBBtn>

              <p>Already Registered User <i className='text-primary' onClick={() => { togglebox('login') }}>Login here</i></p>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://media.istockphoto.com/id/1333167234/vector/soccer-stadium-players-football-match-athletes-fighting-kicking-ball-dynamic-poses-of-people.jpg?s=2048x2048&w=is&k=20&c=96ohbo01R_jS_hfD95dKjUMNzF23YrpEBqawQd2aeKg=' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
