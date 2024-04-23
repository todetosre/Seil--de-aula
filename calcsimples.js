module.exports = {
    adicao: function(num1, num2) {
        return num1 + num2;
    },
    subtracao: function(num1, num2) {
        return num1 - num2;
    },
    multiplicacao: function(num1, num2) {
        return num1 * num2;
    },
    divisao: function(num1, num2) {
        if (num2 === 0) {
            return "Impossível Dividir por Zero!";
        } else {
            return num1 / num2;
        }
    }
};
