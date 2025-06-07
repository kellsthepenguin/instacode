import { ChangeEventHandler } from 'react'

export default function Input({
  onChange
}: {
  onChange?: (value: string) => any
}) {
  return (
    <textarea
      className='w-[100%] h-[100%] font-mono border flex-1 mb-3'
      onChange={(event) => onChange(event.target.value)}
      style={{ resize: 'none' }}
    />
  )
}
