import React, { useState } from 'react';
import './Addnewcourtbox.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

function AddnewCourtbox() {
  const [selectedImages, setSelectedImages] = useState();
  const [courtPic, setCourtPic] = useState();
  const [courtData, setCourtData] = useState({
    name: '',
    location: '',
    number: '',
    address: '',
    description: ''
  });

  const handleChange = (e) => {
    setCourtData({ ...courtData, [e.target.name]: e.target.value });
    console.log(courtData);
  };

  const imageChange = (e) => {
    setCourtPic(e.target.files[0]);
    e.target.files[0]
      ? setSelectedImages(URL.createObjectURL(e.target.files[0]))
      : setSelectedImages(null);
  };

  const uploadData = () => {
    let fileData = new FormData();
    fileData.append('image', courtPic);
  
    axios
      .post(
        `${process.env.REACT_APP_BE_URL}/admin/createcourt`,
        fileData,
        {
          params: courtData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )
      .then((res) => {
        
        console.log(res.data);
      })
      .catch((err) => {
       
        console.log(err);
      });
  };
  

  return (
    <MDBContainer fluid className='body-box'>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>
          <h1 className='text-white mb-4'>Add Your Court Details</h1>
          <MDBCard>
            <MDBCardBody className='px-4'>
              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className='mb-0'>Court name</h6>
                </MDBCol>
                <MDBCol md='9' className='pe-5'>
                  <MDBInput
                    label='Name'
                    size='lg'
                    id='form1'
                    type='text'
                    name='name'
                    value={courtData.name}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <hr className='mx-n3' />
              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className='mb-0'>Location</h6>
                </MDBCol>
                <MDBCol md='9' className='pe-5'>
                  <MDBInput
                    label='Location'
                    size='lg'
                    id='form2'
                    type='text'
                    name='location'
                    value={courtData.location}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className='mb-0'>Number</h6>
                </MDBCol>
                <MDBCol md='9' className='pe-5'>
                  <MDBInput
                    label='Number'
                    size='lg'
                    id='form3'
                    type='number'
                    name='number'
                    value={courtData.number}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <hr className='mx-n3' />
              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className='mb-0'>Address</h6>
                </MDBCol>
                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea
                    label='Address'
                    id='textAreaExample'
                    rows={3}
                    name='address'
                    value={courtData.address}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <hr className='mx-n3' />
              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className='mb-0'>Description</h6>
                </MDBCol>
                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea
                    label='Description'
                    id='textAreaExample1'
                    rows={3}
                    name='description'
                    value={courtData.description}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <hr className='mx-n3' />
              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className='mb-0'>Image</h6>
                </MDBCol>
                <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' onChange={imageChange} />
                  <div className='small text-muted mt-2'>Upload your Court Images</div>
                </MDBCol>
              </MDBRow>
              <hr className='mx-n3' />
              <MDBBtn className='my-4' size='lg' onClick={uploadData}>
                Upload
              </MDBBtn>
              {selectedImages && (
                <div className='image-preview'>
                  <img src={selectedImages} alt='Selected' height={80} width={80} />
                </div>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AddnewCourtbox;
