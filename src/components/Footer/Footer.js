import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <div>    
    <MDBFooter style={{ backgroundColor: '#343434' , color:'gainsboro'}} className='text-center text-lg-start'>
      <MDBContainer className='text-md-start mt-5 pt-5'>
        <MDBRow className='mt-6'>
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4'>
              About Us
            </h6>
            <p>
              <a href='#!' className='text-reset'>
                Login
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                My account
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Cart
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Checkout
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4'>
              Help
            </h6>
            <p>
              <a href='#!' className='text-reset'>
                Payment
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Shipping
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Cancellation & Return
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                FAQ
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4'>Information</h6>
            <p>
              <a href='#!' className='text-reset'>
                Privacy Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                your account
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Setting
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Information
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Helps
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
            <h6 className='fw-bold mb-4'>Contact us</h6>
            <p>
              <a href='#!' className='text-reset'>
                Shipping Option
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Call:12345 6789
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
               12345 6789
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
            <h6 className='fw-bold mb-4'>Logo</h6>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lore
            </p>
            <p>
              <a href='#!' className='text-reset'>
               12345 6789
              </a>
            </p>
            <hr style={{}}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    <div className='text-center p-4' style={{ backgroundColor: '#232624' , color:'gainsboro'}}>
      © Copyright AJShoes_ All Rights Reserved
    </div>
  </MDBFooter>
  </div>
  )
}

export default Footer;