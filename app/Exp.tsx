import React from 'react'

function Exp() {
  return (
    <div className=' font-nohemi text-[#EBEBEB]'>
      <div className='mx-[9%] px-8 py-10 border-2 backdrop-blur-sm rounded-xl mt-20'>
        <div className='flex justify-between'>
          <div className=' text-left pl-5'>
            <p className='text-7xl font-bold'>Work Experience<span className=' text-base-purple'>.</span></p>
            <p className=' font-light'>Explore my diverse range of projects, showcasing my ability to apply theoretical knowledge to practical solutions.</p>
          </div>
          <div className='w-[30em] pl-5 pr-10'>
            <div className='border w-full h-full rounded-full' />
          </div>
        </div>
        <div className=' space-y-4 pt-10 mx-6'>
          <div className='flex gap-4'>
            <div className='text-7xl rounded-xl p-10 w-full bg-[#D9D9D9]/20'>projects & <br />entrepreneurship</div>
            <div className='w-[60%] rounded-xl bg-[#D9D9D9]/20 backdrop-blur-md'></div>
          </div>
          <div className='flex gap-4'>
            <div className='w-[100%] rounded-xl bg-[#D9D9D9]/20'></div>
            <div className='text-7xl text-right rounded-xl p-10 w-full bg-[#D9D9D9]/20'>research &<br />publications</div>
          </div>
          <div className='flex gap-4'>
            <div className='text-7xl rounded-xl p-10 w-full bg-[#D9D9D9]/20'>sports &<br />volunteering</div>
            <div className='w-[90%] rounded-xl bg-[#D9D9D9]/20'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp