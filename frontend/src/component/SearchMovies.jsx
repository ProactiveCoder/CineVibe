import React from 'react'

function SearchMovies() {
  return (
    <>
    <div className='w-[100%]'>
    <h1>Search Movies</h1>
    <div className='flex justify-center mt-2 w-[100%]'>

        <form className='w-[50%]'>
            <div className='flex justify-between shadow-md border-gray-800 rounded p-1 '>

            <input className=' p-2 rounded-lg  w-full outline-none' type="text" placeholder='Search Movies..' />
            <button className='bg-red-500 p-2 rounded-md w-36 text-white'>Search</button>
            </div>
        </form>
    </div >
    </div>
    </>
  )
}

export default SearchMovies