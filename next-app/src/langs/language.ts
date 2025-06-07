export default interface Language {
  name: string
  langFamily: string
  run: (code: string) => Promise<string> // result
}
