import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
function MainnavBar() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const {user} = useSelector((store) => store.user);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={openNavSecond}>
          <MDBNavbarNav className='d-flex flrex-direction-column'>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='addNewCourt'>AddNewCourt</MDBNavbarLink>
            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            <MDBNavbarLink  href='#' >Help
            </MDBNavbarLink>    
            <MDBNavbarLink  href='#'  className='align-self-end'>{user.name}
            </MDBNavbarLink>         
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default MainnavBar;
