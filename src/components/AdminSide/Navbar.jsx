import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'
const Navbar = () => {
  const {logout} = useContext(ShopContext)
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button className='bg-gray-600 tex-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'
        onClick={logout}
        >Logout</button>
    </div>
  )
}

export default Navbar