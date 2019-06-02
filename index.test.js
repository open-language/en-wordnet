const enWordnet = require('./index')

describe('Test if the package is usable', () => {
    test('Check path for both version exists', () => {
        expect(enWordnet["3.0"]).toContain("en-wordnet/database/3.0")
        expect(enWordnet["3.1"]).toContain("en-wordnet/database/3.1")
    })
})