/*eslint-env browser*/

//STEP 1
/*function halfNumber(num) {
    "use strict";
    var half = num / 2;
    console.log("half of " + num + " is " + half);
    return half;
}
halfNumber(5);*/

//STEP 2
/*function squareNumber(num) {
    "use strict";
    var squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}
squareNumber(3);*/

//STEP 3
/*function percentOf(num1, num2) {
    "use strict";
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(2, 4);*/

//STEP 4
function findModulus(num1, num2) {
    "use strict";
    return (num2/num1) + " is the modulus of " + num1 + " and " + num2;
}
console.log(findModulus(4, 10));