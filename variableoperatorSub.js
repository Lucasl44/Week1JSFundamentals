//Actvity 1
let name = "Lucas";
let age = "22";
let favColour = "green";
console.log(`The characters name is ${name}, they are ${age} years old, and their favourite colour is ${favColour}.`)
name = "Darcy";
age = "23";
favColour = "yellow";
console.log(`The characters name is ${name}, they are ${age} years old, and their favourite colour is ${favColour}.`)

//Activity 2
let breakfast = "Full english";
let lunch = "bagel sandwich";
let dinner = "pizza";

console.log(`Today for breakfast I will eat ${breakfast}, for lunch I will have ${lunch}, and for dinner ${dinner}.`)

breakfast = "cereal";
lunch = "eggs";
dinner = "steak and roasties";
console.log(`For tomorrow's breakfast I will have ${breakfast}, for lunch ${lunch}, and finally dinner ${dinner}.`)

//Activity 3
let dOB = new Date(2022, 6, 13);
//console.log(dOB);
dOB = dOB.getTime();
//console.log(dOB);
let currentTime = new Date().getTime();
//console.log(currentTime);
diff = dOB - currentTime;
//console.log(diff);
diffDays = diff / 86400000;
console.log(`There is ${Math.round(diffDays)} days until your next birthday.`)

//Activity 4
let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "
console.log("   |   |    ");
console.log(` ${space1} | ${space2} | ${space3}`);
console.log("   |   |    ");
console.log("-----------");
console.log("   |   |    ");
console.log(` ${space4} | ${space5} | ${space6}  `);
console.log("   |   |    ");
console.log("-----------");
console.log("   |   |    ");
console.log(` ${space7} | ${space8} | ${space9}   `);
console.log("   |   |    ");