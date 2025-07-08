import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiPlusSquare, FiList, FiShoppingBag } from 'react-icons/fi'

function Sidebar() {
  return (
    <div className='w-[18%] min-h-screen border-r-1'>
      <div className='flex flex-col gap-4'>
        <NavLink to={'/add'}>
          <p className='flex items-center gap-2 border py-2 px-6 border-r-0 border-t-0'>
            <FiPlusSquare className="text-xl" />
            <span className='hidden md:inline'>Add items</span>
          </p>
        </NavLink>

        <NavLink to={'/list'}>
          <p className='flex items-center gap-2 border py-2 px-6 border-r-0'>
            <FiList className="text-xl" />
            <span className='hidden md:inline'>List Items</span>
          </p>
        </NavLink>

        <NavLink to={'/orders/admin'}>
          <p className='flex items-center gap-2 border py-2 px-6 border-r-0'>
            <FiShoppingBag className="text-xl" />
            <span className='hidden md:inline'>Orders</span>
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
