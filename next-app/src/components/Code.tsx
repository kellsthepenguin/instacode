import { Editor, OnChange } from '@monaco-editor/react'

export default function Code({ onChange }: { onChange: OnChange }) {
  return (
    <div className='border w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh]'>
      <Editor
        defaultLanguage='javascript'
        defaultValue='// some comment'
        onChange={onChange}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  )
}
