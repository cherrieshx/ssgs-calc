function control(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('ERROR:Invalid input! Please enter valid numbers.');
    }
}

function add(a, b) {
    control(a,b);
    return a + b;
}

function sub(a, b) {
    control(a,b);
    return a - b;
}

function mul(a, b) {
    control(a,b);
    return a * b;
}

function div(a, b) {
    control(a,b);
    if (b === 0) {
        throw new Error("ERROR: Division by zero is not allowed!");
    }
    return a / b;
}

function pow(a, b) {
    control(a,b);
    return Math.pow(a, b);
}

module.exports = {
    control,add,sub,mul,div,pow
};