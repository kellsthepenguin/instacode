export default interface Language {
  name: string
  run: (code: string) => Promise<string> // result
}
