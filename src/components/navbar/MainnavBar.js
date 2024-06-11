import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';


function MainnavBar() {
    const [openNavSecond, setOpenNavSecond] = useState(false);

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
      <MDBCollapse navbar open={openNavSecond}>
        <MDBNavbarNav>
          <MDBNavbarLink active aria-current='page' href='#'>
            Home
          </MDBNavbarLink>
          <MDBNavbarLink href='addNewCourt'>AddNewCourt</MDBNavbarLink>
          <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
          <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
            Disabled
          </MDBNavbarLink>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>

  )
}

export default MainnavBar