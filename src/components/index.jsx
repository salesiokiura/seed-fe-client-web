import React, { useState } from 'react'
import { ResponsiveWrapper } from '../hoc';


function profile() {

  return (
    <div>
      <nav>
        <h1 className="text-3xl font-bold">
        My Profile
        </h1>
      </nav>

      <img src= "../images/img_avatar2-png-9.png" alt="Profile" className="w-32 h-32 rounded-full my-4" />
      <div className="w-32 h-32 bg-gray-300 rounded-full my-4"></div>
      <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file"></input>
       <label class="block text-sm font-medium mb-1">DISPLAY NAME</label>
       <input type="text" class="w-30 bg-gray-200 rounded-md border border-gray-300 px-3 py-2" value="Brian234" />
      <input type="text" class="w-16 ml-32 bg-gray-200 rounded-md border border-gray-300 px-3 py-2 font-medium" value="EDIT" />
       <label class="block text-sm mt-4 font-medium mb-1">EMAIL</label>
      <input type="email" class="w-30  bg-gray-200 rounded-md border border-gray-300 px-3 py-2" value="Brian234@gmail.com" />
      <input type="text" class="w-16 ml-32 hover:bg-teal-800 bg-gray-200 rounded-md border border-gray-300 px-3 py-2 font-medium" value="EDIT" />
      <label class="block text-sm mt-4 font-medium mb-1"></label>
      <input type="text" class="w-70 mt-12 m-auto bg-gray-200 rounded-md border border-gray-300 px-3 py-2" value="CHANGE PASSWORD" />
      <label class="block text-sm mt-4 font-medium mb-1"></label>
      <button class="bg-teal-800 hover:bg-red-500 text-white font-medium py-2 px-4 rounded">Logout</button>
      <button class="bg-teal-800 ml-32 hover:bg-red-500 text-white font-medium py-2 px-4 rounded">Save</button>

      



    </div>
    
  )
}

export default ResponsiveWrapper(profile);

