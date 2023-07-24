import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login_landing_page from './components/login_landing_page'
import About_us from './components/about_us'
import Charging_transactions from './components/charging_transactions'
import Contact_us from './components/contact_us'
import FAQ from './components/faq'
import Forgot_password from './components/forgot_password'
import Home from './components/home'
import Inbox from './components/inbox'
import Location from './components/location'
import Login from './components/login'
import Profile from './components/profile'
import Recent_payments from './components/recent_payments'
import Services from './components/services'
import Sign_up from './components/sign_up'
import { useState } from 'react'

const App = () => {
  const [selectFile, setSelectFile] = useState(false);
  return (
    <Routes>
      <Route path='login_landing_page' element={<Login_landing_page/>} />
      <Route path='about_us' element={<About_us/>} />
      <Route path='charging_transactions' element={<Charging_transactions />} />
      <Route path='contact_us' element={<Contact_us/>} />
      <Route path='FAQ' element={<FAQ/>} />
      <Route path='forgot_password' element={<Forgot_password/>} />
      <Route path='home' element={<Home/>} />
      <Route path='inbox' element={<Inbox />} />
      <Route path='location' element={<Location/>} />
      <Route path='login' element={<Login/>} />
      <Route path='profile' element={<Profile selectFile = {selectFile} setSelectFile = {setSelectFile}/>} />
      <Route path='recent_payments' element={<Recent_payments/>} />
      <Route path='services' element={<Services/>} />
      <Route path='sign_up' element={<Sign_up/>} />
    </Routes>
  )
}

export default App
