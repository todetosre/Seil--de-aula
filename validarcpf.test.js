const validarCPF = require('./validarcpf.js');

test('Valida CPF corretamente', () => {
    expect(validarCPF('529.982.247-25')).toBe(true);
    expect(validarCPF('123.456.789-10')).toBe(true);
    expect(validarCPF('111.111.111-11')).toBe(false);
    expect(validarCPF('52998224725')).toBe(true);
    expect(validarCPF('12345678910')).toBe(true);
    expect(validarCPF('11111111111')).toBe(false);
});