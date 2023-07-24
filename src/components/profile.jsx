import React, { useState } from 'react'
import { ResponsiveWrapper } from '../hoc';
import avatar from "../assets/Ellipse 1.png"



function profile({selectFile, setSelectFile}) {


const onClick = () => {
    setSelectFile(!selectFile)
}
  return (
    <div>
      <nav style = {{background: "#2A4454"}}>
      <div className=''></div>
        <h1 className="text-3xl font-bold">
        My Profile
        </h1>
      </nav>
      <body class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="max-w-md bg-white p-8 shadow-md rounded-md">
          <div class="mb-4">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={avatar}
            alt="Profile"
            id="profile-pic"
            onClick={onClick}
          />
            
       {selectFile ? ( <input type="file"accept="image/jpeg, image/png, image/jpg" id="input-file" ></input>) :""}
          </div>
          <div class="mb-4">
            <label class="block text-sm mt-10 font-light mb-1">DISPLAY NAME</label>
            <input type="text" class="w-56 rounded-md bg-gray-400 border border-gray-300 px-3 py-2" value="Brian234" />
            <button class="w-16 ml-10 bg-gray-400 rounded-md border text-white hover:bg-teal-800 border-gray-300 font-medium px-3 py-2">EDIT</button>
          </div>
          <div class="mb-4">
            <label class="block text-sm mt- 8 font-light mb-1">EMAIL</label>
            <input type="email" class="w-56 rounded-md border bg-gray-400 border-gray-300 px-3 py-2" value="Brian234@gmail.com" />
             <button class="w-16 ml-10 rounded-md border text-white hover:bg-teal-800 bg-gray-400 border-gray-300 px-3 font-medium py-2">EDIT</button>
          </div>
          <div class="mb-4">
            <button class="w-full rounded-md mt-10 bg-gray-400 hover:bg-teal-800 text-white border mb-10 border-gray-300 px-3 py-2">CHANGE PASSWORD</button>
          </div>
          <div class="flex justify-between">
            <button class="bg-teal-800 hover:bg-blue-600 mb-auto text-white font-medium py-2 px-4 rounded">Save</button>
            <button class="bg-teal-800 hover:bg-blue-600 mb-auto text-white font-medium py-2 px-4 rounded">Logout</button>
          </div>
        </div>
      </body>
    </div>
    
  )
}

export default ResponsiveWrapper(profile);

