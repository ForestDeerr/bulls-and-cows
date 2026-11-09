import { describe, expect, jest, test } from '@jest/globals';
import { generateSecret } from './generateSecret';

describe('generateSecret', () => {
    test('возвращает строку заданной длины', () => {
        const length = 4;
        const base = 10;

        expect(generateSecret(length, base)).toHaveLength(length);
    });

    test('генерирует уникальные цифры', () => {
        const secret = generateSecret(4, 10);

        expect(new Set(secret).size).toBe(secret.length);
    });

    test('генерирует только допустимые цифры для двоичной системы', () => {
        const secret = generateSecret(2, 2);

        expect([...secret].every((digit) => '01'.includes(digit))).toBe(true);
    });

    test('генерирует только допустимые цифры для восьмеричной системы', () => {
        const secret = generateSecret(4, 8);

        expect([...secret].every((digit) => '01234567'.includes(digit))).toBe(true);
    });

    test('генерирует только допустимые цифры для десятичной системы', () => {
        const secret = generateSecret(4, 10);

        expect([...secret].every((digit) => '0123456789'.includes(digit))).toBe(true);
    });

    test('генерирует только допустимые цифры для шестнадцатеричной системы', () => {
        const secret = generateSecret(4, 16);

        expect([...secret].every((digit) => '0123456789ABCDEF'.includes(digit))).toBe(true);
    });

    test('сохраняет ведущие нули', () => {
        const random = jest
            .fn<() => number>()
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0.1)
            .mockReturnValueOnce(0.2)
            .mockReturnValueOnce(0.3);

        expect(generateSecret(4, 10, random)).toBe('0123');
    });

    test('использует переданный источник случайных чисел', () => {
        const random = jest.fn<() => number>().mockReturnValue(0.5);

        generateSecret(4, 10, random);

        expect(random).toHaveBeenCalled();
    });

    test('возвращает одинаковый результат при одинаковом источнике случайных чисел', () => {
        const random = () => 0.42;

        const firstSecret = generateSecret(4, 10, random);
        const secondSecret = generateSecret(4, 10, random);

        expect(firstSecret).toBe(secondSecret);
    });
});
