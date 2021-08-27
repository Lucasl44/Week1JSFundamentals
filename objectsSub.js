//Activity 1
const person = {
    name: "Lucas",
    age: 22,
    favSongs: [
        "mr rager - Kid Cudi",
        "22 - Taylor Swift",
        "Things change - Bryson Tiller"],
    sayHi(){
        return `Hello my name is ${this.name}`;
    } 
}
console.log(person.sayHi());


//Activity 2
let isEating = true;
let isDrinking = false;
const pet = {
    name: "Leo",
    typeOfPet: "Cat",
    age: 10,
    colour: "grey",
    eating(){
        if (isEating){
            return `${this.name} is eating.`;
        } else {
            return `${this.name} is not eating.`
        }
    },
    drinking(){
        if (isDrinking){
        return `${this.name} is drinking.`;
        } else {
            return `${this.name} is not drinking.`;
        }
    } 
}
console.log(pet.eating())
console.log(pet.drinking())


//Activity 3
let foodOrder = "hotdog";
let drinkOrder = "Latte";
let drinkOrder2 = "Cappuccino";
let drinkOrder3 = ""

const coffeeShop = {
    branch: "wolf at the door",
    drinks: {Cappuccino: 2.95,
    Latte: 3.49,
    "Filter coffee": 2,
    Tea: 2.49,
    "Hot Chocolate": 2.99
    },
    food: {
        sandwich: 5.99,
        pizza: 8.99,
        burger: 9.99,
        hotdog: 7.99
    },
    drinksOrdered(){
        let dTotal = this.drinks[drinkOrder];
        return `Your drinks total is £${dTotal}`;
    },
    foodOrdered(){
        let fTotal = this.food[foodOrder];
        return `Your food total is £${fTotal}`;
    },
    totalOrder(){
        let fTotal = this.food[foodOrder];
        let dTotal = this.drinks[drinkOrder];
        let tTotal = this.food[foodOrder] + this.drinks[drinkOrder];
        return `Your order is ${drinkOrder} for £${dTotal}, ${foodOrder} for £${fTotal}. Your order comes to £${tTotal} in total.`;
    }

}
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());
console.log(coffeeShop.totalOrder());