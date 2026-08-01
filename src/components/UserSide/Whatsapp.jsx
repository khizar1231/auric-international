import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div><a
  href="https://wa.me/923709085311"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="relative">

    {/* Ping Animation */}
    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>

    {/* Main Button */}
    <div className="relative bg-gradient-to-r from-green-500 to-green-600 hover:scale-110 transition-all duration-500 text-white px-6 py-5 rounded-full shadow-[0_15px_50px_rgba(34,197,94,0.5)] flex items-center gap-3 font-bold backdrop-blur-xl">

      <FaWhatsapp size={26} />

      <span className="hidden sm:block">
        Chat With Us
      </span>
    </div>
  </div>
</a></div>
  )
}

export default Whatsapp