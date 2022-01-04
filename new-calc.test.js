const calc = require('./new-calc');
test('Soma 1 e 3 espera 4', () => {
    expect(calc.soma(1, 3)).toBe(4);
});
test('Soma 2 e 3 espera 5', () => {
    expect(calc.soma(2, 3)).toBe(5);
});

test('Soma -1 e -3 espera -4', () => {
    expect(calc.soma(-1, -3)).toBe(-4);
});

test('Soma -1 e 3 espera 2', () => {
    expect(calc.soma(-1, 3)).toBe(2);
});

test('Soma 4 e 0 espera 4', () => {
    expect(calc.soma(4, 0)).toBe(4);

});
// Caracter

test('Soma 1 e A espera 1+A', () => {
    expect(calc.soma(1, 'A')).toBe(1+'A');

});

// Subtração

test('Subtração 1 e 2 espera -1', () => {
    expect(calc.sub(1, 2)).toBe(-1);
});


test('Subtração -1 e -2 espera 1', () => {
    expect(calc.sub(-1, -2)).toBe(1);
});

test('Subtração 2 e -2 espera 4', () => {
    expect(calc.sub(2, -2)).toBe(4);
});

test('Subtração 1 e 0 espera 1', () => {
    expect(calc.sub(1, 0)).toBe(1);
});

// Multiplicação

const mult = require('./new-calc');
test('Multiplicação 1 e 2 espera 2', () => {
    expect(calc.mult(1, 2)).toBe(2);
});

test('Multiplicação -1 e -2 espera 2', () => {
    expect(calc.mult(-1, -2)).toBe(2);
});

test('Multiplicação -1 e 2 espera -2', () => {
    expect(calc.mult(-1, 2)).toBe(-2);
});

test('Multiplicação 1 e 0 espera 0', () => {
    expect(calc.mult(1, 0)).toBe(0);
});

// Divisão

test('Divisão 2 e 2 espera 1', () => {
    expect(calc.div(2, 2)).toBe(1);
});

test('Divisão -2 e -2 espera 0', () => {
    expect(calc.div(-2, -2)).toBe(1);
});

test('Divisão -2 e 2 espera -1', () => {
    expect(calc.div(-2, 2)).toBe(-1);
});

test('Divisão 0 e 2 espera 0', () => {
    expect(calc.div(0, 2)).toBe(0);
});

test('Divide 3 e 0 espera Infinity', () => {
    expect(calc.div(3, 0)).toBe(Infinity);
});