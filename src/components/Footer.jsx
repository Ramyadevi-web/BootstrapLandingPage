import React from 'react'
import { FaRegCopyright,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='row row-cols-1 row-cols-md-2'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex mt-4 pt-5'>
          <a href="#" className='mx-3'>About</a>
          <p>.</p>
          <a href="#" className='mx-3'>Contact</a>
          <p>.</p>
          <a href="#" className='mx-3'>Terms of Use</a>
          <p>.</p>
          <a href="#" className='mx-3'>Privacy Policy</a>
        </div>
      <p className="fw-lighter"><FaRegCopyright/> Your Website 2023. All Rights Reserved.</p>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
      <FaFacebook color='#0d6efd'size={30}  className='mx-3'/>
      <FaTwitter color='#0d6efd'size={30}  className='mx-3'/>
      <FaInstagram color='#0d6efd'size={30}  className='mx-3'/>
      </div>
    </div>
  )
}

export default Footer
