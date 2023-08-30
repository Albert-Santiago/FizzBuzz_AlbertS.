// -----------------------------------------------------------------//
//                                                                  //
//                                                                  //
//               FizzBuzz:  set already                             //
//                                                                  //
//                                                                  //
// ---------------------------------------------------------------- //
let answer = parseInt(
    prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// -----------------------------------------------------------------//
//                                                                  //
//                                                                  //
//               FizzBuzz: set a number for fizz and buzz           //
//                                                                  //
//                                                                  //
// ---------------------------------------------------------------- //

// let choiceOne = parseInt(prompt("Put a number to set for FIZZ"));
// let choiceTwo = parseInt(prompt("Put a number to set for BUZZ"));
// let answer = parseInt(prompt("Choose a Number you want to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//     if (i % choiceOne === 0 && i % choiceTwo === 0) {
//         console.log("FizzBuzz");
//     } else if (i % choiceOne === 0) {
//         console.log("Fizz");
//     } else if (i % choiceTwo === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// -----------------------------------------------------------------//
//                                                                  //
//                                                                  //
//               FizzBuzz: IF ELSE W/O LOOP                         //
//                                                                  //
//                                                                  //
// ---------------------------------------------------------------- //

// IF else fizz buzz
// let choiceOne = parseInt(prompt("Please enter the you want to set for fiz "));
// let choiceTwo = parseInt(prompt("Please enter the you want to set fo buzz "));

// let answer = parseInt(
//     prompt("Please enter the number you would like to FizzBuzz up to: ")
// );

// if (answer % choiceOne === 0 && answer % choiceTwo === 0) {
//     console.log("FizzBuzz");
// } else if (answer % choiceOne === 0) {
//     console.log("Fizz");
// } else if (answer % choiceTwo === 0) {
//     console.log("Buzz");
// } else {
//     console.log(
//         `ERROR!, You choose ${answer} and it is not correspond to the number should be, Choose between common denaminator of yout set for fizz and buzz`
//     );
// }
