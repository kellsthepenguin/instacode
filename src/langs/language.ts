export default interface Language {
  name: string
  langFamily: string
  run: (code: string, input: string) => Promise<string> // result
}
