import { Editor } from '@monaco-editor/react'

export default function Code() {
  return (
    <div className='border w-[50vw] h-[30vh] md:w-[30vw] md:h-[70vh]'>
      <Editor
        defaultLanguage='javascript'
        defaultValue='// some comment'
        options={{ minimap: { enabled: false } }}
      />
    </div>
  )
}
