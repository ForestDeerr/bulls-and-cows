export const generateSecret = (length: number, base: number, random: () => number = Math.random): string => {
    const digits = '0123456789ABCDEF'.slice(0, base).split('');

    return digits
        .map((digit) => ({ digit, sort: random() }))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, length)
        .map(({ digit }) => digit)
        .join('');
};
