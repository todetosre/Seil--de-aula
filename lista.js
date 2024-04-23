function ordenarNumeros(lista, ordem = 'crescente') {
    if (ordem === 'crescente') {
        return lista.sort((a, b) => a - b);
    } else if (ordem === 'decrescente') {
        return lista.sort((a, b) => b - a);
    } else {
        throw new Error('A ordem deve ser "crescente" ou "decrescente".');
    }
}

module.exports = ordenarNumeros;