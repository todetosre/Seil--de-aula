const { adicao, subtracao, multiplicacao, divisao } = require('./calcsimples.js');

test('A soma está correta!', () => {
    expect(adicao(1, 2)).toBe(3);
});

test('A subtração está correta!', () => {
    expect(subtracao(5, 3)).toBe(2);
});

test('A multiplicação está correta!', () => {
    expect(multiplicacao(4, 3)).toBe(12);
});

test('A divisão está correta!', () => {
    expect(divisao(10, 2)).toBe(5);
});

test('Divisão por zero retorna mensagem correta!', () => {
    expect(divisao(10, 0)).toBe("Impossível Dividir por Zero!");
});