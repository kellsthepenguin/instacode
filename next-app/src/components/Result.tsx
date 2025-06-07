export default function Result({ children }: React.PropsWithChildren) {
  return (
    <textarea
      className='w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh] font-mono border'
      style={{ resize: 'none' }}
      value={children as string}
      readOnly
    ></textarea>
  )
}
