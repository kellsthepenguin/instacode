import { useState } from 'react'

export default function Index() {
  const [pw, setPw] = useState<string>('')

  return (
    <div className='absolute left-[50%] top-[50%] transform-[translate(-50%,-50%)]'>
      <div className='border w-128 h-40 lg:w-256 rounded-md'>
        <div className='p-5 h-full flex flex-col justify-between'>
          <p className='font-bold text-3xl'>Instacode</p>
          <div className='flex'>
            <input
              className='border p-4 w-full rounded-md'
              type='password'
              placeholder='Password'
              onChange={(e) => setPw(e.target.value)}
            />
            <button
              className='p-5 ml-3 border rounded-md cursor-pointer'
              onClick={() => {
                document.cookie = 'pw=' + btoa(pw)
                location.href = '/code'
              }}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
