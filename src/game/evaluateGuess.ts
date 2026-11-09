export const evaluateGuess = (secret: string, guess: string): { bulls: number; cows: number } => {
    const normalizedSecret = secret.toUpperCase();
    const normalizedGuess = guess.toUpperCase();

    const bulls = [...normalizedSecret].filter((digit, index) => digit === normalizedGuess[index]).length;

    const matchingDigits = [...normalizedGuess].filter((digit) => normalizedSecret.includes(digit)).length;

    const cows = matchingDigits - bulls;

    return { bulls, cows };
};
