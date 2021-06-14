import { renameKeys } from '../object.utils'

const sampleMap = { oldKeyOne: 'newKeyOne', oldKeyTwo: 'newKeyTwo' }
describe('Object utils', () => {
  describe('renameKeys', () => {
    test('Changes keys based on map', () => {
      const oldKeyOne = 'someValue1'
      const oldKeyTwo = 'someValue2'
      const oldMap: any = { oldKeyOne, oldKeyTwo }

      renameKeys(sampleMap, oldMap)

      expect(oldMap.newKeyOne).toEqual(oldKeyOne)
      expect(oldMap.newKeyTwo).toEqual(oldKeyTwo)
    })

    test('Keys missing in rename map remain untouched', () => {
      const unmatchedKeyValue = 'someValue3'
      const oldMap = { oldKeyOne: 'someValue', oldKeyTwo: 'someValue2', oldKeyThree: unmatchedKeyValue }
      renameKeys(sampleMap, oldMap)

      expect(oldMap.oldKeyThree).toBeDefined()
      expect(oldMap.oldKeyThree).toEqual(unmatchedKeyValue)
    })

    test('Original key names are deleted', () => {
      const oldMap = { oldKeyOne: 'someValue', oldKeyTwo: 'someValue2' }
      renameKeys(sampleMap, oldMap)

      expect(oldMap.oldKeyOne).toBeUndefined()
      expect(oldMap.oldKeyTwo).toBeUndefined()
    })
  })
})
