import { capitalize, reverseString, calculator, caesar, analyze } from './sum.js'



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

test('ciser cypher test 2', () => {
    expect(caesar('Hello!', 2)).toBe('Jgnnq!')   //+2
})

test('ciser cypher test 3', () => {
    expect(caesar('Cat is 10 meters long!!', 53)).toBe('Dbu jt 10 nfufst mpoh!!')   //+53
})

test('analyze array test 1', () => {
    expect(analyze([1, 2, 3])).toMatchObject({ length: 3 })
})

test('analyze array test 2', () => {
    expect(analyze([1, 2, 3])).toMatchObject({ max: 3 })
})
test('analyze array test 3', () => {
    expect(analyze([1, 2, 3])).toMatchObject({ min: 1 })
})
test('analyze array test 4', () => {
    expect(analyze([1, 2, 3])).toMatchObject({ average: 2 })
})
test('analyze array test 4', () => {
    expect(analyze([1, 2, 3])).toStrictEqual({ average: 2, min: 1, max: 3, length: 3 })
})
