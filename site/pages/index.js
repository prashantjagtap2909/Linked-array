import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to the Linked -Array"
        
      />

      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className='text-center'> Welcome to <br/><span className='text-indigo-600 font-semibold'>Linked Array</span></h1>
        <Link title='Notice the page loader' className='bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white' href="/apply">Link to a page</Link>
      </main>
    </>
  )
}
