import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function CourtCards({court}) {
    const navigate = useNavigate()
    const openCourtDetails = ()=>{
      navigate(`/courtDetails/${court._id}`)
    }
  return (
   
    <MDBCard className='col-12 col-lg-3 col-md-6 p-2 m-3 'onClick={openCourtDetails}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={`${process.env.REACT_APP_BE_URL}/images/${court.courtImage}`} fluid alt='...' />

        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{court.courtName}</MDBCardTitle>
        <MDBCardText>
        {court.address}
        </MDBCardText>
        <MDBBtn href='#'></MDBBtn>
      </MDBCardBody>
    </MDBCard>
  
  );
}