const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error("ERROR: Division by zero is not allowed!");
    }
    return a / b;
}

function pow(a, b) {
    return Math.pow(a, b);
}

async function calc() {
    console.log("Welcome to SSGS Calculator!");
    const rl = readline.createInterface({ input, output });

    while (true) {
        console.log("Please choose an operation with the given numbers or enter 0 to exit:");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Power (Exponentiation)");

        try {
            let operation = parseFloat(await rl.question("Enter your choice: "));

            if (
                isNaN(operation) ||
                !Number.isInteger(operation) ||
                operation < 0 ||
                operation > 5
            ) {
                console.log("Invalid option! Please enter a valid option.");
                continue;
            }

            if (operation === 0) {
                console.log("Exiting the calculator. Goodbye!");
                rl.close();
                process.exit(0);
            }

            const n1 = parseFloat(await rl.question("Enter the first number: "));
            const n2 = parseFloat(await rl.question("Enter the second number: "));

            if (isNaN(n1) || isNaN(n2)) {
                console.log("Invalid input! Please enter valid numbers.");
                continue;
            }

            let result;

            switch (operation) {
                case 1:
                    result = add(n1, n2);
                    console.log(`The sum of ${n1} and ${n2} is ${result}`);
                    break;
                case 2:
                    result = sub(n1, n2);
                    console.log(`The difference of ${n1} and ${n2} is ${result}`);
                    break;
                case 3:
                    result = mul(n1, n2);
                    console.log(`The product of ${n1} and ${n2} is ${result}`);
                    break;
                case 4:
                    try {
                        result = div(n1, n2);
                        console.log(`The quotient of ${n1} and ${n2} is ${result}`);
                    } catch (error) {
                        console.log(error.message);
                    }
                    break;
                case 5:
                    result = pow(n1, n2);
                    console.log(`The result of ${n1} raised to the power of ${n2} is ${result}`);
                    break;
            }

        
        } catch (error) {
            console.error("Unexpected error:", error);
            rl.close();
            process.exit(1);
        }
    }
}

calc();


module.exports = {
    add
};