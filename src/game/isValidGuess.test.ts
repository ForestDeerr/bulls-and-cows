import { describe, expect, test } from '@jest/globals';
import { isValidGuess } from './isValidGuess';

describe('isValidGuess', () => {
    test('возвращает true для корректной догадки', () => {
        expect(isValidGuess('1234', 4, 10)).toBe(true);
    });

    test('возвращает false, если длина догадки не совпадает с заданной', () => {
        expect(isValidGuess('123', 4, 10)).toBe(false);
    });

    test('возвращает false, если цифры повторяются', () => {
        expect(isValidGuess('1123', 4, 10)).toBe(false);
    });

    test('возвращает false, если цифра выходит за пределы системы счисления', () => {
        expect(isValidGuess('1294', 4, 8)).toBe(false);
    });

    test('возвращает false для недопустимых символов', () => {
        expect(isValidGuess('12G4', 4, 16)).toBe(false);
    });

    test('возвращает true для двоичной системы', () => {
        expect(isValidGuess('01', 2, 2)).toBe(true);
    });

    test('возвращает false для повторяющихся нулей', () => {
        expect(isValidGuess('0012', 4, 10)).toBe(false);
    });

    test('считает шестнадцатеричные символы без учёта регистра', () => {
        expect(isValidGuess('a3F1', 4, 16)).toBe(true);
    });

    test('возвращает false для пустой строки', () => {
        expect(isValidGuess('', 4, 10)).toBe(false);
    });
});
