export const createDigitValidator = (base: number): ((char: string) => boolean) => {
    const digits = '0123456789ABCDEF'.slice(0, base);

    return (char: string): boolean => char.length === 1 && digits.includes(char.toUpperCase());
};
