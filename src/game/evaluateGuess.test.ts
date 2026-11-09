import { describe, expect, test } from '@jest/globals';
import { evaluateGuess } from './evaluateGuess';

describe('evaluateGuess', () => {
    test('возвращает 4 быка, если все цифры совпадают по позиции', () => {
        const secret = '1234';
        const guess = '1234';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 4,
            cows: 0,
        });
    });

    test('возвращает 4 коровы, если все цифры совпадают, но позиции разные', () => {
        const secret = '1234';
        const guess = '4321';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 0,
            cows: 4,
        });
    });

    test('правильно считает быков и коров одновременно', () => {
        const secret = '1234';
        const guess = '1325';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 1,
            cows: 2,
        });
    });

    test('возвращает 0 быков и 0 коров, если нет совпадений', () => {
        const secret = '1234';
        const guess = '5678';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 0,
            cows: 0,
        });
    });

    test('возвращает только быков, если совпадают цифры на своих позициях', () => {
        const secret = '1234';
        const guess = '1256';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 2,
            cows: 0,
        });
    });

    test('возвращает только коров, если совпадают цифры на других позициях', () => {
        const secret = '1234';
        const guess = '3412';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 0,
            cows: 4,
        });
    });

    test('корректно обрабатывает ведущие нули', () => {
        const secret = '0123';
        const guess = '1023';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 2,
            cows: 2,
        });
    });

    test('не учитывает регистр шестнадцатеричных цифр', () => {
        const secret = 'A3F1';
        const guess = 'a3f1';

        expect(evaluateGuess(secret, guess)).toEqual({
            bulls: 4,
            cows: 0,
        });
    });
});
