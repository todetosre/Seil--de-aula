function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    const todosDigitosIguais = [...cpf].every(digito => digito === cpf[0]);
    if (todosDigitosIguais) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito > 9) {
        primeiroDigito = 0;
    }

    if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito > 9) {
        segundoDigito = 0;
    }

    if (parseInt(cpf.charAt(10)) !== segundoDigito) {
        return false;
    }

    return true;
}

module.exports = validarCPF;
