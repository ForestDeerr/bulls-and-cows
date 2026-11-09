import { describe, expect, test } from '@jest/globals';
import { createDigitValidator } from './createDigitValidator';

describe('createDigitValidator', () => {
    test('возвращает функцию проверки цифр', () => {
        expect(typeof createDigitValidator(10)).toBe('function');
    });

    test('принимает допустимые цифры десятичной системы', () => {
        const validate = createDigitValidator(10);

        expect(validate('0')).toBe(true);
        expect(validate('5')).toBe(true);
        expect(validate('9')).toBe(true);
    });

    test('отклоняет цифры за пределами десятичной системы', () => {
        const validate = createDigitValidator(10);

        expect(validate('A')).toBe(false);
    });

    test('принимает только 0 и 1 в двоичной системе', () => {
        const validate = createDigitValidator(2);

        expect(validate('0')).toBe(true);
        expect(validate('1')).toBe(true);
        expect(validate('2')).toBe(false);
    });

    test('корректно проверяет цифры восьмеричной системы', () => {
        const validate = createDigitValidator(8);

        expect(validate('7')).toBe(true);
        expect(validate('8')).toBe(false);
    });

    test('принимает шестнадцатеричные цифры в верхнем регистре', () => {
        const validate = createDigitValidator(16);

        expect(validate('A')).toBe(true);
        expect(validate('F')).toBe(true);
    });

    test('принимает шестнадцатеричные цифры в нижнем регистре', () => {
        const validate = createDigitValidator(16);

        expect(validate('a')).toBe(true);
        expect(validate('f')).toBe(true);
    });

    test('отклоняет недопустимые символы', () => {
        const validate = createDigitValidator(16);

        expect(validate('G')).toBe(false);
        expect(validate('!')).toBe(false);
    });

    test('отклоняет пустую строку', () => {
        const validate = createDigitValidator(10);

        expect(validate('')).toBe(false);
    });
});
