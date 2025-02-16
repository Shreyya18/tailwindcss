import React from 'react'

const App = () => {
  return (
    <>
    <div className='bg-deepblue container'>
      <h1 className="text-5xl font-bold text-white text-center ">This is tailwindccs v4.0</h1>
      <button className='bg-amber text-albaster text-3xl font-bold mt-12 rounded px-6 py-4 border-4 animate-pulse '>Click here</button>

    <input type="text" placeholder='Enter your name'className='bg-white text-lg text-amber border-2 p-4 rounded ml-4 outline-0 '/>
    </div>
    <div className="@container border p-4 ">
      <div className='flex gap-4'>
        <div className='bg-blue-400 h-40 w-64 ' ></div>
        <div className='bg-green-500 h-40 w-64 @min-md:@max-xl:hidden '></div>
        <div className='bg-red-500 h-40 w-64 '></div>
      </div>
    </div>
    </>
  )
}

export default App