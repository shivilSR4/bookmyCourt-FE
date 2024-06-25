import React, { useEffect, useState } from 'react'
import MainnavBar from '../../components/navbar/MainnavBar'
import CourtCards from '../../components/courtCards/CourtCards'
import axios from 'axios'
import axiosinstance from '../../config/AxiosInstance'

function Home() {
  useEffect(()=>{

   getCourtData()

  },[])

  const[CourtData,setCourtData] = useState([])
  const getCourtData= ()=>{
    // axios.get(`${process.env.REACT_APP_BE_URL}/users/getcourtdata`)
    axiosinstance.get('/users/getcourtdata')
    .then((res)=>{
      
      setCourtData(res.data)
     
    }).catch((err=>{
      console.log(err);
    }))
  }

  return (
    <div>
      <MainnavBar />
      <div className='container  '>
        <div className='row m-2 p-2'>
          {CourtData.map((court)=><CourtCards court={court} />)}
        
      
        </div>
        </div>
    
    </div>
  )
}

export default Home