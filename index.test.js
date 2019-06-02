const enWordnet = require('./index')

describe('Test if the package is usable', () => {
    test('Check version number', () => {
        expect(enWordnet.version).toBe("3.0")
    })
})