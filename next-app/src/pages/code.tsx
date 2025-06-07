import RunButton from '../components/RunButton'
import Code from '../components/Code'
import Result from '../components/Result'

export default function CodePage() {
  return (
    <div className='absolute left-[50%] top-[50%] transform-[translate(-50%,-50%)]'>
      <div className='my-0 mx-auto flex text-left flex-col md:flex-row'>
        <div className='m-3 col-lg-5'>
          <div className='flex flex-row items-center justify-between mb-3'>
            <p className='text-2xl font-bold'>Code</p>
            <RunButton onClick={() => {}} />
          </div>
          <Code />
        </div>
        <div className='m-3 col-lg-5'>
          <p className='text-2xl font-bold mb-3'>Result</p>
          <Result />
        </div>
      </div>
    </div>
  )
}
