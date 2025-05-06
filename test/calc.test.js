const { add, sub, mul, div, pow} =  require('./pages/calc');

test('if one or both input are not numbers, throw error', () => {
    expect(() => add('a', 2)).toThrow('ERROR:Invalid input! Please enter valid numbers.');
    expect(() => sub(2, 'a')).toThrow('ERROR:Invalid input! Please enter valid numbers.');
    expect(() => mul('a', 'b')).toThrow('ERROR:Invalid input! Please enter valid numbers.');
    expect(() => div(2, 'a')).toThrow('ERROR:Invalid input! Please enter valid numbers.');
    expect(() => pow('a', 2)).toThrow('ERROR:Invalid input! Please enter valid numbers.');
});

test ('adds 2+2 to equal 4', () => {
    expect (add (2, 2)).toBe (4);
});


test ('subtracts 5-3 to equal 2', () => {
    expect (sub (5, 3)).toBe (2);
});

test ('multiplies 3*3 to equal 9', () => {
    expect (mul (4, 3)).toBe (12);
});

test ('divides 6/3 to equal 2', () => {
    expect (div (6, 3)).toBe (2);
});

test ('divides 6/0 to throw error', () => {
    expect ( () => { div (6, 0) } ).toThrow ("ERROR: Division by zero is not allowed!");
});

test ('3 power 3 to equal 27', () => {
    expect (pow (3, 3)).toBe (27);
});



