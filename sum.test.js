import { capitalize, reverseString, calculator, caesar } from './sum.js'



test('cat to beome Cat', () => {
    expect(capitalize('cat')).toBe('Cat')
})

test('cat to beome tac', () => {
    expect(reverseString('cat')).toBe('tac')
})

test('calculator add', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('calculator subtract', () => {
    expect(calculator.subtract(5, 2)).toBe(3)
})
test('calculator divide', () => {
    expect(calculator.divide(6, 2)).toBe(3)
})
test('calculator multiply', () => {
    expect(calculator.multiply(2, 2)).toBe(4)
})

test('ciser cypher test 1', () => {
    expect(caesar('hello', 2)).toBe('jgnnq')   //+2
})

test('ciser cypher test 1', () => {
    expect(caesar('Hello!', 2)).toBe('Jgnnq!')   //+2
})

test('ciser cypher test 1', () => {
    expect(caesar('Cat is 10 meters long!!', 53)).toBe('Dbu jt 10 nfufst mpoh!!')   //+53
})