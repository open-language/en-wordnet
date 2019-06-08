import * as path from 'path'

const enWordnet = new Map()
enWordnet.set('3.0', path.join(__dirname, '..', 'database', '3.0'))
enWordnet.set('3.1', path.join(__dirname, '..', 'database', '3.1'))

export default enWordnet