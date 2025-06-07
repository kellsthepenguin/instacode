import Language from './language'
import vm from 'node:vm'

export default class Node implements Language {
  name: string

  constructor() {
    this.name = 'node'
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

    // VM용 컨텍스트 생성
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
