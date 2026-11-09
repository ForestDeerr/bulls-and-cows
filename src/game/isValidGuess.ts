export const isValidGuess = (guess: string, length: number, base: number): boolean => {
    const digits = '0123456789ABCDEF'.slice(0, base);
    const normalizedGuess = guess.toUpperCase();

    return (
        normalizedGuess.length === length &&
        [...normalizedGuess].every((digit) => digits.includes(digit)) &&
        new Set(normalizedGuess).size === length
    );
};
