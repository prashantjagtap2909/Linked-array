import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
const ShareButton = () => {

    const copyLink = ()=>{
        navigator.clipboard.writeText('http://localhost:3000/${router.query.handle}')
        toast('Copied to clipboard')
    }   
  return (
    <>
        <div className='absolute cursor-pointer top-28 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400' onClick={copyLink} >
            <img className='w-4' alt='share' src='/svg/share.svg' />
        </div>
    </>
  )
}

export default ShareButton