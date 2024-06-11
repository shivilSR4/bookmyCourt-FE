import React from 'react'
import './Addnewcourtbox.css'
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
  }
  from 'mdb-react-ui-kit';
function AddnewCourtbox() {
  return (
    <MDBContainer fluid className='body-box' >

    <MDBRow className='d-flex justify-content-center align-items-center'>
      <MDBCol lg='9' className='my-5'>

        <h1 class="text-white mb-4">Add Your Court Details</h1>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <MDBRow className='align-items-center pt-4 pb-3'>

              <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Court name</h6>
              </MDBCol>

              <MDBCol md='9' className='pe-5'>
                <MDBInput label='Name' size='lg' id='form1' type='text'/>
              </MDBCol>

            </MDBRow>

            <hr className="mx-n3" />

            <MDBRow className='align-items-center pt-4 pb-3'>

              <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Location</h6>
              </MDBCol>

              <MDBCol md='9' className='pe-5'>
                <MDBInput label='example@example.com' size='lg' id='form2' type='email'/>
              </MDBCol>

            </MDBRow>


                 <MDBRow className='align-items-center pt-4 pb-3'>

              <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Number</h6>
              </MDBCol>

              <MDBCol md='9' className='pe-5'>
                <MDBInput label='example@example.com' size='lg' id='form3' type='number'/>
              </MDBCol>

            </MDBRow>

            <hr className="mx-n3" />

            <MDBRow className='align-items-center pt-4 pb-3'>

              <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Address</h6>
              </MDBCol>

              <MDBCol md='9' className='pe-5'>
                <MDBTextArea label='Message' id='textAreaExample' rows={3} />
              </MDBCol>

            </MDBRow>

            <hr className="mx-n3" />
            
            <MDBRow className='align-items-center pt-4 pb-3'>

              <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Description</h6>
              </MDBCol>

              <MDBCol md='9' className='pe-5'>
                <MDBTextArea label='Description' id='textAreaExample1' rows={3} />
              </MDBCol>

            </MDBRow>

            <hr className="mx-n3" />

            <MDBRow className='align-items-center pt-4 pb-3'>

              <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Image</h6>
              </MDBCol>

              <MDBCol md='9' className='pe-5'>
                <MDBFile size='lg' id='customFile' />
                <div className="small text-muted mt-2">Upload your Court Images</div>
              </MDBCol>

            </MDBRow>

            <hr className="mx-n3" />

            <MDBBtn className='my-4' size='lg'>Upload</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
  )
}

export default AddnewCourtbox