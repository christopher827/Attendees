import React from 'react'
import Qr2 from "../assets/Images/Qr2.jpeg"

 function QRCodes() {
  return (
    <div className="flex flex-col md:flex-row pt-10 justify-center items-center">
    <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4">
      <p className="text-4xl lg:text-5xl font-bold pt-10 md:pt-0">Scan <a   href="https://www.google.com">QR</a> Code</p>
  <p className="lg:text-lg 2xl:text-xl py-6 text-center">    Scan the QR code to be recognised as present   </p>
  <img src={Qr2} alt="" className="rounded-sm w-6/12 sm:w-4/12 md:w-5/12 lg:w-6/12" />
 </div>
 </div>
 )
}
export default QRCodes
