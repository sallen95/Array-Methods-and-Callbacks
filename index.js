import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const twentyFourteenFinal = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final";
});

console.log(twentyFourteenFinal[0]['Home Team Name']);

console.log(twentyFourteenFinal[0]['Away Team Name']);

console.log(twentyFourteenFinal[0]['Home Team Goals']);

console.log(twentyFourteenFinal[0]['Away Team Goals']);

console.log(twentyFourteenFinal[0]['Win conditions']);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finals = data.filter(function(item){
        return item.Stage === "Final";
    })
    return finals;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinalsCB){
    return getFinalsCB(data).map(function(item){
        return item.Year;
    });
};

console.log(getYears(fifaData, getFinals));

// function getYears(cb){
//     let years = [];
//     cb.forEach(function(item){
//         return years.push(item.Year);
//     });
//     return years;
// }

// console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 


// With For Each

// function getWinners(data, getFinalsCB){
//     let winners = [];
    
//     getFinalsCB(data).forEach(function(item){
//         if(item['Home Team Goals'] > item['Away Team Goals']){
//             winners.push(item['Home Team Name']);
//         } else if(item['Away Team Goals'] > item['Home Team Goals']){
//             winners.push(item['Away Team Name']);
//         } else(item['Home Team Goals'] === item['Away Team Goals']){
//             winners.push(item['Win conditions']);
//         }
//     });
//     return winners;
// }

// console.log(getWinners(fifaData, getFinals));


// With .map

function getWinners(data, getFinalsCB){
    let winners = getFinalsCB(data).map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        } else if(item['Away Team Goals'] > item['Home Team Goals']){
            return item['Away Team Name'];
        } else(item['Home Team Goals'] === item['Away Team Goals']){
            return item['Win conditions'];
        }
    });
    return winners;
}

console.log(getWinners(fifaData, getFinals));


// function getWinners(cbFunc){
//     cbFunc.map(function(item){
//         if (item["Home Team Goals"] > item["Away Team Goals"]){
//             return item["Home Team Name"];
//         }
//         else if (item["Home Team Goals"] < item["Away Team Goals"]){
//             return item["Away Team Name"];
//         }
//     });
// }


// console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersCB, getYearsCB){
    let yearlyWinners = [];

    getWinnersCB.forEach(function(item, index){
        yearlyWinners.push(`in ${getYearsCB[index]}, ${item}won the world cup!`)
    })
    return yearlyWinners;
};

console.log(getWinnersByYear(getWinners, getYears));



// function getWinnersByYear(cbFunc1, cbFunc2) {
//     return `In ${cbFunc1[0]}, ${cbFunc2[0]} won the world cup!`;
// };

// console.log(getWinnersByYear(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData))));




/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


function getAverageGoals(data){
    const averageHomeGoals = data.reduce(function(acc, item){
        return acc + item['Home Team Goals'];
    },0)
    const averageAwayGoals = data.reduce(function(acc, item){
        return acc + item['Away Team Goals'];
    },0)
    return `Home Team Average: ${averageHomeGoals / data.length}, Away Team Average: ${averageAwayGoals / data.length}`;
};

console.log(getAverageGoals(fifaData));


// function getAverageGoals(data) {
//     data.reduce(function(acc, currentValue){
//         return acc + currentValue["Home Team Goals"];
//     }, 0);
// };

// console.log(getAverageGoals(fifaData));

// getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins() {

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
