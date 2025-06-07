import { Editor, OnChange } from '@monaco-editor/react'

export default function Code({
  langFamily,
  onChange
}: {
  langFamily: string
  onChange: OnChange
}) {
  return (
    <Editor
      className='border w-[100%] h-[100%] flex-1'
      language={langFamily}
      defaultValue=''
      onChange={onChange}
      options={{ automaticLayout: true, minimap: { enabled: false } }}
    />
  )
}
