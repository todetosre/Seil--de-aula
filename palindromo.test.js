const ehPalindromo = require('./palindromo.js');

test('Verifica se uma string é um palíndromo', () => {
    expect(ehPalindromo("arara")).toBe(true);

    expect(ehPalindromo("Ame a ema")).toBe(true);

    expect(ehPalindromo("hello")).toBe(false);
});