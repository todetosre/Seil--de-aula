function ehPalindromo(str) {
    const strFormatada = str.toLowerCase().replace(/\s/g, '');
    return strFormatada === strFormatada.split('').reverse().join('');
}

module.exports = ehPalindromo;