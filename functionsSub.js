//Activity 1
const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(10));


//Activity 2
let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
    console.log(`Order count: ${orderCount}`);
    return orderCount;
    
}

takeOrder("pineapple", "ham");
takeOrder("tomato", "cheese");


//Activity 3
const checkBal = (toCheck) => {
    let bal = 50;
    if (toCheck > bal){
        console.log("You have insufficient funds.");
        return;
    } else {
        console.log("Withdrawal accepted.");
    }
}
const checkPin = (userPin, amount) => {
    let pin = 1234;
    if (userPin !== pin){
        console.log("Pin is incorrect.");
        return;
    } else {
        checkBal(amount)
    }
}
checkPin(1234, 50);


//Activity 4
let str = "fine"

const somethingCon = (con) => {
    return "Something " + con; 
}
console.log(somethingCon(str))


//Activity 5
const perim = (length, width) => {
    perimeter = length * 2 + width * 2;
    console.log(`The perimeter of your Rectangle is ${perimeter}cm`);
}

perim(5,10)
perim(6,7)


//Activity 6
const compare = (num1, num2) => {
    if (num1 > num2){
        console.log(`${num1} is larger than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is larger than ${num1}`);
    } else {
        console.log("This is the same number.")
    }
}

compare(3,6)
compare(2,1)
compare(3,3)
compare(-1,2)
