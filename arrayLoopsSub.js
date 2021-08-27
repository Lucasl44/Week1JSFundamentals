//Activity 1
let songs = ["man on the moon", "mr.rager", "gold digger", "coldest winter"];
console.log(songs);
songs.push("runaway");
songs.unshift("pick it up");
console.log(songs);
songs.pop();
console.log(songs);


//Activity 2
let favFilms = ["snowpiercer", "Dheepan", "2046", "District 9", "what happened to monday"];
favFilms.push("irreversible");
favFilms.push("flushed away");

for (i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
}


//Activity 3
let i = 0;
while (i < 6) {
    console.log(Math.floor((Math.random())*50));
    i++
}


//Activity 4
for (let i = 9; i >= 0; i--){
    console.log(i);
}


//Activity 5
let films = ["matrix", "lego movie", "ghostbusters", "shawshank"]
for (let i = 0; i < films.length; i++){
    console.log(films[i])
}
if (films[2] == "ghostbusters"){
    console.log("Yay it’s Ghostbusters.");
} else {
    console.log("Boo! we want Ghostbusters!");
}


//Activity 6
let nums = [];
let i = 0;
while (i < 6){
    nums.push(Math.floor(Math.random()*30));
    i++
}
console.log(nums)
for (let x = 0; x < nums.length; x++){
    if ((nums[x] % 7) == 0){
        console.log(nums[x]);
    }
}


//Activity 7
let followers1 = ["Dylan", "Darcy", "Dan", "Joe"];
let followers2 = ["Lucas", "Dan", "Lily", "Gary"];
for (let i = 0; i < 4; i++){
    for (let x = 0; x < 4; x++){
        if (followers1[i] == followers2[x]){
            console.log(followers1[i])
        }
    }
}
