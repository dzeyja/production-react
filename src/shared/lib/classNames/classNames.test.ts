import { classNames } from "./classNames"

describe('classNames', () => {
    test('first test in this project', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('function with additional classes', () => {
        expect(classNames('someClasses', {}, ['hello1', 'hello2'])).toBe('someClasses hello1 hello2')
    })
    test('function with mode classes', () => {
        expect(classNames('someClasses', {hovered: true}, ['hello1', 'hello2'])).toBe('someClasses hello1 hello2 hovered')
    })
})