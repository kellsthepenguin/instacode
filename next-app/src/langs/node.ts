import Language from './language'
import vm from 'node:vm'

export default class Node implements Language {
  name: string
  langFamily: string

  constructor() {
    this.name = 'node'
    this.langFamily = 'javascript'
  }

  async run(code: string) {
    let captured = ''

    const fakeProcess = {
      stdout: {
        write: (chunk) => {
          captured += chunk
        }
      }
    }

    const context = vm.createContext({
      process: fakeProcess,
      console: {
        log: (...args) => fakeProcess.stdout.write(args.join(' ') + '\n')
      }
    })

    const script = new vm.Script(code)
    try {
      await script.runInContext(context)
    } catch (err) {
      captured += err
    }
    return captured
  }
}
