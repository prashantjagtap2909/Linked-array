import React from 'react'

const features = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='font-bold text-lg'>Features of this :</h1>
                <ul className='mt-5 border p-4 rounded-lg shadow-xl'>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Create account</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Login</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Logout</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Add Link</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Remove link</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Create Bio</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Update Bio</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Share Link</li>
                </ul>
            </div>
        </>
    )
}

export default features