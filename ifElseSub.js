//Activity 1
let age = "18";
let country = "UK";

if (age >= 21) {
    console.log("Yes I can serve you.");
} else if (age >= 18 && country == "USA"){
    console.log("You aren't old enough in your country.");
} else if (age >= 18){
    console.log("Yes I can serve you.");
} else {
    console.log("You aren't old enough.");
}


//Activity 2
let topping = "eggs";

switch(topping){
    case "ham":
    case "cheese":
    case "pineapple":
    case "tomato sauce":
        console.log(`${topping} is an important ingredient for my pizza.`);
        break;
    case "pepperoni":
    case "chicken":
    case "sweetcorn":
        console.log(`I don’t mind having ${topping} on my pizza`);
        break;
    case "anchovies":
    case "capers":
        console.log(`${topping} should not be on a pizza.`);
        break;
    default:
        console.log(`I don't think ${topping} goes on pizza.`);

}


//Activity 3
const password = "Hellllllllllo";
let len = password.length;
//if (password.length < 8) can also be done like this
if (len < 8) {
    console.log("Password too short.");
} else {
    console.log(password);
}


//Activity 4
let num = 8;
if ((num % 3 == 0) && (num % 5 == 0)){
    console.log("fizz buzz");
} else if (num % 5 == 0) {
    console.log("buzz");
} else if (num % 3 == 0) {
    console.log("fizz");
} else {
    console.log(num);
}

//Activity 5
let num = 123321;
let b = num;
let a, temp = 0;
while (num > 0) {
    a = num % 10;
    num = parseInt(num / 10);
    temp = temp * 10 + a;
}
if (temp == b) {
    console.log(`Yes, ${b} is a palindrome.`);
} else {
    console.log(`No, ${b} is not a palindrome.`);
}


//Activity 6
const placeOfWork = "City center";
const townOfHome = "Manchester";
let time = 25;

if (time == 8 || time == 18){
    console.log("I am commuting.")
} else if (time > 24 || time < 0){
    console.log(`${time} is not a recognised time.`);
} else if (time > 8 && time < 18){
    console.log("I am at work.")
} else {
    console.log("I am at home.")
}


//Activity 7
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let spl = str.split("");
let leng = spl.length;
let temp = 0;
for (let i = 0; i < leng; i++){
    switch(spl[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            temp = i;
    }
}
console.log(temp)


//Activity 8
let word = "loo";
let len = word.length;
let spl = word.split("");
console.log(spl[0], spl[len-1])
if (spl[0] == spl[len-1]){
    console.log("True");
} else {
    console.log("False");
}


//Activity 9
let num1 = 10;
let num2 = 9;
if ((num1 + num2) % 2 == 0){
    console.log(`${num1+num2} is even.`)
} else {
    console.log(`${num1 * num2} is the product of your numbers.`);
}