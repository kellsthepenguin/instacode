import RunButton from '../components/RunButton'
import Code from '../components/Code'
import Result from '../components/Result'
import { useState } from 'react'
import useSWR from 'swr'
import LangSelection from '../components/LangSelection'
import Input from '../components/Input'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CodePage() {
  const [code, setCode] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [langFamily, setLangFamily] = useState<string>('javascript')
  const langsSwr = useSWR('/api/langs', fetcher)

  return (
    <div className='absolute left-[50%] top-[50%] transform-[translate(-50%,-50%)]'>
      <div className='my-0 mx-auto flex text-left flex-col md:flex-row'>
        <div className='m-3 col-lg-5 w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh] flex flex-col'>
          <div className='flex flex-row items-center justify-between mb-3'>
            <div>
              <span className='text-2xl font-bold'>Code</span>
              <LangSelection
                className='ml-4'
                swr={langsSwr}
                onChange={(value) => setLangFamily(value)}
              />
            </div>
            <RunButton
              onClick={() => {
                fetch('/api/run', {
                  method: 'POST',
                  body: JSON.stringify({ langName: 'node', code }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                  .then((res) => res.json())
                  .then((result) => {
                    setResult(() => result.result)
                  })
              }}
            />
          </div>
          <Code langFamily={langFamily} onChange={(value) => setCode(value)} />
        </div>
        <div className='m-3 col-lg-5 w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh] flex flex-col'>
          <p className='text-2xl font-bold mb-4.5'>Input</p>
          <Input onChange={(value) => setInput(value)} />
          <p className='text-2xl font-bold mb-4.5'>Result</p>
          <Result>{result}</Result>
        </div>
      </div>
    </div>
  )
}
