/*console.log("   |   |");
console.log("   |   |");
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log("   |   |");
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log("   |   |");
console.log("   |   |");
*/
let vert = "   |   |";
let hori = "-----------"
for (let i=1;i<12;i++){
    if (i%4 !== 0){
        console.log(vert);
    }else{
        console.log(hori);
    }
}