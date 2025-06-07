import Language from './language'
import Node from './node'

const langs = new Map<string, Language>()

langs.set('node', new Node())

export default langs
