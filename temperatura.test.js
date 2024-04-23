const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./temperatura.js');

test('Converte de Celsius para Fahrenheit corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212, 2);
});

test('Converte de Fahrenheit para Celsius corretamente', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100, 2);
});