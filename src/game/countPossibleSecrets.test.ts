import { describe, expect, test } from '@jest/globals';
import { countPossibleSecrets } from './countPossibleSecrets';

describe('countPossibleSecrets', () => {
    test('возвращает количество вариантов для двоичной системы', () => {
        expect(countPossibleSecrets(2, 2)).toBe(2);
    });

    test('возвращает количество вариантов для восьмеричной системы', () => {
        expect(countPossibleSecrets(3, 8)).toBe(336);
    });

    test('возвращает количество вариантов для десятичной системы', () => {
        expect(countPossibleSecrets(4, 10)).toBe(5040);
    });

    test('возвращает количество вариантов для шестнадцатеричной системы', () => {
        expect(countPossibleSecrets(4, 16)).toBe(43680);
    });

    test('учитывает длину секрета 1', () => {
        expect(countPossibleSecrets(1, 10)).toBe(10);
    });

    test('возвращает 1 для длины секрета 0', () => {
        expect(countPossibleSecrets(0, 10)).toBe(1);
    });

    test('возвращает 0, если длина секрета больше основания системы счисления', () => {
        expect(countPossibleSecrets(3, 2)).toBe(0);
    });

    test('возвращает количество вариантов без повторения цифр', () => {
        expect(countPossibleSecrets(3, 3)).toBe(6);
    });
});
