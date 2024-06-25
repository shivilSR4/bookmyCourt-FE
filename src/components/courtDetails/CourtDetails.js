import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosinstance from '../../config/AxiosInstance';
import Modal from '../common/Modal';
import './CourtDetails.css';
import Mainnavbar from '../navbar/MainnavBar';
import { TIMINGS } from '../../constant';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function CourtDetails() {
  const { id } = useParams();
  const [open, Setopen] = useState(false);
  const [court, setCourt] = useState({});
  const[slectedslot,Setselectedslot] = useState([])
  const[filteredSlots,setFilteredSlots] = useState(TIMINGS)
  const [slotData, setslotData] = useState({});
  

  useEffect(() => {
    getCourtDatabyId();
  }, []);

  const getCourtDatabyId = () => {
    axiosinstance.get('/users/getDatabyId', { params: { id } })
      .then((res) => {
        setCourt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    Setopen(true);
  };

  const selectSlot = (e) => {
    
    const slot = TIMINGS.find((element) =>
      element.id === parseInt(e.target.value)
    );
    Setselectedslot([...slectedslot, slot]);
    

    const filteredData = filteredSlots.filter((element)=>element.id!==parseInt(e.target.value))
    setFilteredSlots(filteredData)
  };

  const createslotdata = ()=>{
   axiosinstance.post('admin/addtimeSlotdata',{...slotData,slots:slectedslot,courtID:id}).then((res)=>{
    Setopen(false)
    alert(res.data)
   }).catch((err)=>{
    console.log(err);
   })
  }

  const handleSlotdata = (e)=>{
    setslotData({...slotData,[e.target.name]:[e.target.value]})
    console.log(slotData);
  }

  return (
    <div>
      <Mainnavbar />
      <MDBCard className='body-tab'>
        <MDBCardImage src={`${process.env.REACT_APP_BE_URL}/images/${court.courtImage}`} position='top' alt='Court Image' className='card-image' />
        <MDBCardBody className='card-body'>
          <MDBCardTitle>{court.courtName}</MDBCardTitle>
          <MDBCardText>{court.description}</MDBCardText>
          <MDBBtn onClick={openModal}>Button</MDBBtn>

          {open && (
            <Modal open={open} Setopen={Setopen} buttonname={"CreateSlot"} heading={"CreateSlots"} handleSubmit={createslotdata}>
              <div className='modal-content'>
                <h3 className='font-weight-bold'>{court.courtName}</h3>
                <h4 className='font-weight-bold'>{court.location}</h4>
                <div className='form-group'>
                  <label htmlFor='startDate'>Starting Date</label>
                  <input type='date' id='startDate' name='startDate' value={slotData.startDate} onChange={handleSlotdata} />
                </div>
                <div className='form-group'>
                  <label htmlFor='endDate'>Ending Date</label>
                  <input type='date' id='endDate' name='endDate' value={slotData.endDate} onChange={handleSlotdata}/>
                </div>
                <div className='form-group'>
                  <label htmlFor='cost'>Cost</label>
                  <input type='number' id='cost' name='cost' value={slotData.cost} onChange={handleSlotdata}/>
                </div>
                <div className='form-group'>
                  <label htmlFor='slot'>Select Slot</label>
                  <select name='' id='' onChange={selectSlot}>
                    {filteredSlots.map((slot,index)=>
                      <option value={slot.id} key={index} >{slot.name}</option>
                    )}
                    
                  </select>
                  <div >
                    {slectedslot.map((slot)=><label className='border border-1  rounded-2 p-2 mt-2 '>{slot.name}</label>)}
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default CourtDetails;
