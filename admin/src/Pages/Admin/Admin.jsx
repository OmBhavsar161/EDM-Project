import React from 'react'
import Sidebar from '../../Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct'
import ListProduct from '../../Components/ListProduct'
import SupportData from '../../Components/SupportData'

const Admin = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
          <Route path='/supportdata' element={<SupportData />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
