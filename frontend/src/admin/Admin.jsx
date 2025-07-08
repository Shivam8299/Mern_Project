import React from 'react'
import Title from '../components/Title'
import Sidebar from './Sidebar'

function Admin() {
  return (
    <div>
        <div className='text-xl border-b px-6 py-1'>
          <Title text1={'Admin'} text2={'pannel'}/>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Admin