import { Editor, OnChange } from '@monaco-editor/react'

export default function Code({
  langFamily,
  onChange
}: {
  langFamily: string
  onChange: OnChange
}) {
  return (
    <div className='border w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh]'>
      <Editor
        language={langFamily}
        defaultValue=''
        onChange={onChange}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  )
}
