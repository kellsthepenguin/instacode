import { SWRResponse } from 'swr'

export default function LangSelection({
  className,
  swr,
  onChange
}: {
  className?: string
  swr: SWRResponse<any, any, any>
  onChange?: (value: string) => any
}) {
  return (
    <select
      className={'border ' + className}
      onChange={(event) => onChange(event.currentTarget.value[1])}
    >
      {swr.error || swr.isLoading
        ? null
        : swr.data.map((lang) => (
            <option key={lang.name} value={[lang.name, lang.langFamily]}>
              {lang.name}
            </option>
          ))}
    </select>
  )
}
