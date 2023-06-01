import { capitalize, reverseString } from './sum.js'



test('cat to beome Cat', () => {
    expect(capitalize('cat')).toBe('Cat')
})

test('cat to beome tac', () => {
    expect(reverseString('cat')).toBe('tac')
})