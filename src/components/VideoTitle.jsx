import React from 'react'


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-400 text-black px-12 py-5 p-9 text-lg bg-opacity-90 rounded-lg hover:bg-white'>
        ▶️Play</button>
        <button className='mx-2 bg-white text-black px-12 py-5 p-9 text-lg bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle