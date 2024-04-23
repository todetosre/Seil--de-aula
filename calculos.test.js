//Exemplo Aula
const somar = require('./soma.js')

test('A soma está correta!', ()=>{
    expect(somar(1,2)).toBe(3)
})


//Exercicio 1
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


//Exercicio 2
const ehPalindromo = require('./palindromo.js');

test('Verifica se uma string é um palíndromo', () => {
    expect(ehPalindromo("arara")).toBe(true);

    expect(ehPalindromo("Ame a ema")).toBe(true);

    expect(ehPalindromo("hello")).toBe(false);
});


//Exercicio 3
const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./temperatura.js');

test('Converte de Celsius para Fahrenheit corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212, 2);
});

test('Converte de Fahrenheit para Celsius corretamente', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100, 2);
});


//Exercicio 4
const validarCPF = require('./validarcpf.js');

test('Valida CPF corretamente', () => {
    expect(validarCPF('529.982.247-25')).toBe(true);
    expect(validarCPF('123.456.789-10')).toBe(true);
    expect(validarCPF('111.111.111-11')).toBe(false);
    expect(validarCPF('52998224725')).toBe(true);
    expect(validarCPF('12345678910')).toBe(true);
    expect(validarCPF('11111111111')).toBe(false);
});


//Exercicio 5
const isPrime = require('./numerosprimos.js');

test('Identifica números primos corretamente', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
});

test('Identifica números não primos corretamente', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
});


//Exercicio 6
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