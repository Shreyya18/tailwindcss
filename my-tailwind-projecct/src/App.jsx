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
        <div className='bg-red-500 h-40 w-64 ' ></div>
        <div className='bg-green-500 h-40 w-64 @min-md:@max-xl:hidden '></div>
        <div className='bg-blue-500 h-40 w-64 '></div>
        <div className='bg-yellow-500 h-40 w-64 '></div>
      </div>
    </div>

    <div className='min-h-screen flex items-center justify-center bg-gray-100 perspective-1000'>
      <div className=' bg-blue-500 h-96 w-96 flex items-center justify-center text-white text-4xl font-bold   transform-style-3d transform hover:scale-120 hover:transalte-z-20 transition-transform duration-4000 '>3D Rotate</div>
    </div>
    <div className=' flex items-center justify-center bg-gray-100'>
    <div className="bg-linear-45 from-blue-500 to-green-500  p-8 font-bold text-white text-3xl  rounded ">Angled Gradient </div>
    <div className='size-64 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-500'></div>
    <div className='bg-radial from-yellow-500 to-red-500 size-64 rounded-full'></div>
    </div>

    <div className=' grid gap-4 place-items-center bg-deepblue'>
      <input type="text" placeholder='enter your name' className='inset-shadow-sm inset-shadow-amber-500 border-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none ' />

      <input type="text" placeholder='enter your name' className='inset-shadow-sm inset-shadow-amber-500 ring-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none ' />

      <input type="text" placeholder='enter your name' className='inset-ring-4 inset-shadow-amber-500 ring-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none ' />
      </div>


      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <ul className='space-y-4 text-center '>
            <li className='bg-gray-200 p-4 rounded text-lg not-active:bg-red-500 '>Item 1(active)</li>
            <li className='active bg-gray-200 p-4 rounded text-lg  '>Item 2</li>
            <li className='bg-gray-200 p-4 rounded text-lg not-active:bg-red-500 '>Item 3</li>
          </ul>
      </div>


    </>
  )
}

export default App