import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing 
data by console.log-ing the following pieces of data 



(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


/// First we want to isolate 2014 games 

function get2014games (dataArray) {
    return dataArray.filter(function(item){
    return item['Year'] === 2014;
    });
}

console.log (get2014games(fifaData));

// Second we need to isolate FINAL game 

function getFinal (dataArray) {
    return dataArray.filter(function(item){
    return item['Stage'] === "Final";
     });
}

console.log (getFinal(get2014games(fifaData)));

const finalGame = getFinal(get2014games(fifaData));

let winner = ''
if (finalGame[0]["Home Team Goals"] > finalGame[0]["Away Team Goals"]){winner = finalGame[0]["Home Team Name"]} 
else {winner = finalGame[0]["Away Team Name"]};


console.log (finalGame[0]["Home Team Name"])
console.log (finalGame[0]["Away Team Name"])
console.log (finalGame[0]["Home Team Goals"])
console.log (finalGame[0]["Away Team Goals"])
console.log (winner)


/* Task 2: Create a function called  getFinals that takes `data` 
as an argument and returns an array of objects with only finals data */

function getFinals(dataArray) {

return dataArray.filter(function(item){
    return item.Stage === 'Final';
    })
};
console.log("this is task 2")
console.log(getFinals(fifaData))


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */


function getYears(dataArray) {

    return dataArray.map(function(item){
        return item.Year;
        })
};

console.log ("this is task 3")
console.log(getYears(getFinals(fifaData)));


console.log ("there is no task 4")



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const finals = getFinals(fifaData)

    return getFinals(fifaData).map(function(item){
        if (item['Home Team Goals'] > item['Away Team Goals']){

        return item['Home Team Name'];}
        else {
            return item['Away Team Name'];
        }
        })
};

console.log (getWinners(getFinals)); 
console.log ("^^^^this is task 5 ^^^^")



/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
return winners.map (function(country,index){
return (`In ${years[index]}, ${country} won the world cup! `)
})
};

console.log(getWinnersByYear(getWinners(fifaData),getYears(fifaData)));

console.log (" ^^^^this is task 6 ^^^^^")


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

//1. write function called getAverageGoals that accepts one parameter "data"
//2. Return average number of Home Team Goals && Away Goals 
//.3 hint use .reduce and do it in 2 steps ... 
    // .reduce ()
    // first parameter is 'accumulator' / required
    // second parameter is "item" (initial value)
    // third will be the initial value (usually 0) - not parameter 
    // returns single value / no array
    // does not manupulate original array
    // usually used for sums and products (numerical values)

function totalHomeGoals(data) {
const totalGoals = data.reduce(function(accumulator,item){
return accumulator + item['Home Team Goals'];
},0);
return totalGoals;
}

console.log (totalHomeGoals(fifaData))

    function totalAwayGoals(data) {
    const totalGoals = data.reduce(function(accumulator,item){
    return accumulator + item['Away Team Goals'];
    },0);
    return totalGoals;
    }
console.log (totalAwayGoals(fifaData))
  

function getAverageGoals (num1,num2){
    return (num1 + num2) / 851;
}

console.log (getAverageGoals(totalHomeGoals(fifaData),totalAwayGoals(fifaData)))


console.log (" ^^^^this is task 7 ^^^^^")







/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
