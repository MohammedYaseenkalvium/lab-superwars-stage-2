const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];




// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here

    for(let i=0;i<players.length;i++){
        var hero_villain = i%2==0 ? "hero" : "villain"
        var object = {
            name: players[i],
            strength: getRandomStrength(),
            image: `./images/super-${i+1}.png`,
            type: hero_villain
        }
        detailedPlayers.push(object)
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()

    var Strength = Math.ceil(Math.random()*100)
    return Strength
}

const buildPlayers = (players, type) => { // for seperating heroes and villains
    let fragment = '';
    for(let i=0;i<players.length;i++){
        if(players[i].type == type){
            // console.log(players[i].type)
            fragment += `<div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>
            `
            console.log("fragment: ", fragment);
            
        }
        
    }
    
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (detailedPlayers) => {

    document.getElementById('heroes').innerHTML = buildPlayers(detailedPlayers, 'hero') //object of heroes
    document.getElementById('villains').innerHTML = buildPlayers(detailedPlayers, 'villain') // object of villains

}

window.onload = () => {
    let detailedPlayers = initPlayers(PLAYERS) //passing array of string to convert to object of superheroes and villians
    viewPlayers(detailedPlayers) // list of objects of heroes and players
}