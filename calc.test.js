const add =  require('./pages/calc').add;

test ('adds 2+2 to equal 4', () => {
    expect (add (2, 2)).toBe (4);
});

test ('adds 3+5 to equal 7(fail)', () => {
    expect (add (5, 3)).toBe (7);
});
