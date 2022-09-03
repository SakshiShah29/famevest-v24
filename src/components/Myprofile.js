import React from 'react'
import "../App.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Myprofile = () => {
  return (
    <>
    <Navbar />
    <div class="flex flex-row">
      <Sidebar />
      {/* <div class="w-full container items-center"> */}
  <div class="text-gray-700 mt-30 flex flex-col  w-3/4 ml-4 mr-3">
        <div class="w-full  mt-20">
          <div class="flex flex-row">
          <label className="w-3/6 text-3xl font-semibold" for="f3">wallet address</label>
      <input class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="f1"/>
      <svg width="27" className="w-1/5" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4499 4.57145H22.4657C22.4244 4.57145 22.3876 4.58565 22.3492 4.59495V2.5114C22.3492 1.1265 21.1969 0 19.7802 0H2.56895C1.1523 0 0 1.1265 0 2.5114V25.9331C0 27.3179 1.1523 28.4445 2.56895 28.4445H5.5873V29.5784C5.5873 30.9137 6.69545 32 8.05805 32H24.4499C25.8125 32 26.9206 30.9137 26.9206 29.5784V6.99305C26.9206 5.65775 25.8125 4.57145 24.4499 4.57145ZM1.01585 25.9331V2.5114C1.01585 1.687 1.7128 1.0159 2.56895 1.0159H19.7802C20.6364 1.0159 21.3333 1.687 21.3333 2.5114V25.9331C21.3333 26.7575 20.6364 27.4286 19.7802 27.4286H2.56895C1.7128 27.4286 1.01585 26.7575 1.01585 25.9331ZM25.9047 29.5784C25.9047 30.3537 25.252 30.9841 24.4499 30.9841H8.05805C7.25595 30.9841 6.60315 30.3537 6.60315 29.5784V28.4445H19.7802C21.1969 28.4445 22.3492 27.3179 22.3492 25.9331V5.5638C22.3876 5.5731 22.4244 5.5873 22.4657 5.5873H24.4499C25.252 5.5873 25.9047 6.21775 25.9047 6.99305V29.5784V29.5784Z" fill="black"/>
<path d="M16.7619 6.60303H5.5873C5.30655 6.60303 5.07935 6.83018 5.07935 7.11093C5.07935 7.39173 5.30655 7.61888 5.5873 7.61888H16.7619C17.0426 7.61888 17.2698 7.39173 17.2698 7.11093C17.2698 6.83018 17.0426 6.60303 16.7619 6.60303Z" fill="black"/>
<path d="M16.7619 10.6665H5.5873C5.30655 10.6665 5.07935 10.8937 5.07935 11.1744C5.07935 11.4552 5.30655 11.6824 5.5873 11.6824H16.7619C17.0426 11.6824 17.2698 11.4552 17.2698 11.1744C17.2698 10.8937 17.0426 10.6665 16.7619 10.6665Z" fill="black"/>
<path d="M16.7619 14.73H5.5873C5.30655 14.73 5.07935 14.9572 5.07935 15.2379C5.07935 15.5187 5.30655 15.7459 5.5873 15.7459H16.7619C17.0426 15.7459 17.2698 15.5187 17.2698 15.2379C17.2698 14.9572 17.0426 14.73 16.7619 14.73Z" fill="black"/>
<path d="M11.6825 18.7935H5.5873C5.30655 18.7935 5.07935 19.0207 5.07935 19.3014C5.07935 19.5822 5.30655 19.8094 5.5873 19.8094H11.6825C11.9633 19.8094 12.1904 19.5822 12.1904 19.3014C12.1904 19.0207 11.9633 18.7935 11.6825 18.7935Z" fill="black"/>
</svg>
      </div>
    </div>
        <div class="w-full  mt-20">
          <div class="flex flex-row">
          <label className="w-3/6 text-3xl font-semibold" for="f3">Email</label>
      <input class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="f1"/>
      <button className=" ml-5 w-1/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</button>
      </div>
    </div>
    <div class="w-full  mt-20">
          <div class="flex flex-row">
          <label className="w-3/6 text-3xl font-semibold" for="f3">Phone Number</label>
      <input class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="f1"/>
      <button className=" ml-5 w-1/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</button>
      </div>
    </div>
        <div class="w-full  mt-20">
          <div class="flex flex-row">
          <label className="w-3/6 text-3xl font-semibold" for="f3">Password</label>
      <input class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="f1"/>
      <button className=" ml-5 w-1/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</button>
      </div>
    </div>

    <button className=" ml-3 mt-10 items-center w-3/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Export ptivate key</button>



    
    
     
        </div>
      </div>
  </>
  )
}

export default Myprofile