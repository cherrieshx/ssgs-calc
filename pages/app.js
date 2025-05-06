const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const { add, sub, mul, div, pow } = require('./src/calc');
const { Console } = require('node:console');


async function calc() {
    console.log("Welcome to SSGS Calculator!");
    const rl = readline.createInterface({ input, output });

    while (true) {
        console.log("Please choose an operation with the given numbers or enter 0 to exit:");
        console.log("0. Exit");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Power ");

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

