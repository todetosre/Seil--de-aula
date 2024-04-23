const ordenarNumeros = require('./lista.js');

test('Ordena números em ordem crescente corretamente', () => {
    expect(ordenarNumeros([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

test('Ordena números em ordem decrescente corretamente', () => {
    expect(ordenarNumeros([3, 1, 4, 1, 5, 9, 2, 6, 5], 'decrescente')).toEqual([9, 6, 5, 5, 4, 3, 2, 1, 1]);
});

test('Lança um erro ao fornecer uma ordem inválida', () => {
    expect(() => ordenarNumeros([3, 1, 4, 1, 5, 9, 2, 6, 5], 'invalida')).toThrow('A ordem deve ser "crescente" ou "decrescente".');
});