import React from 'react'
import banner from '../assets/images/banner.jpg'
export default function Banner() {
  return (
    <div>
        <div className="text-center">
                <h1 className="text-4xl text-white lg:text-5xl font-bold mb-4">
                    Upgrade Your Tech Accessorize with Gadget  <br />Heaven Accessories
                </h1>
                <p className=" text-lg text-[#FFFFFF] mb-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest <br /> accessories, we have it all!
                </p>
                <button className="btn w-48 bg-white text-[#9538E2] font-bold rounded-full hover:bg-gray-100">
                    Shop Now
                </button>
            </div>
            <div className='flex mb-20 justify-center'>
                <div className="mt-10 h-[611px] w-[900px] rounded-xl flex border-4 border-[#FFFFFF] justify-center">
                    <img
                        src={banner}
                        alt="VR Headset"
                        className=" object-cover  rounded-xl shadow-lg "
                    />
                </div>
            </div>
    </div>
  )
}
