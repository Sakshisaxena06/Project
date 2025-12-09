import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/HotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
   <Navbar/>
 <div className="flex h-full overflow-hidden">
    <Sidebar/>
<div className='flex-1 p-4 pt-10 md:px-10 h-full overflow-y-auto flex flex-col'>


        <Outlet/>
    </div>
   </div>

    </div>
  )
}

export default Layout