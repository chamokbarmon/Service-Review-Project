import React from 'react';
import {FaFacebook,FaGoogle,FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
  <div class="card-body  bg-slate-900 text-white text-center mt-5 ">
    <h6 class="card-title p-10">@@@@Copyright Sports Shop@@@@ </h6>
    <div className='d-flex text-center align-middle justify-center text-3xl text-blue-300'>
    <FaFacebook className='ms-2'></FaFacebook>
     <FaGoogle></FaGoogle>
     <FaYoutube></FaYoutube>
    </div>
  </div>
    );
};

export default Footer;