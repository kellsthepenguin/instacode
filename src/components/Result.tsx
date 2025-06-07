export default function Result({ children }: React.PropsWithChildren) {
  return (
    <textarea
      className='w-[100%] h-[100%] font-mono border flex-1'
      style={{ resize: 'none' }}
      value={children as string}
      readOnly
    />
  )
}
