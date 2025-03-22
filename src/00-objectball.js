
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = "";

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                playerWithLargestShoe = player;
            }
        }
    }
    return gameObject().home.players[playerWithLargestShoe]?.rebounds || gameObject().away.players[playerWithLargestShoe]?.rebounds;
}

const mostPointsScored = () => {
    const game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                bestPlayer = player;
            }
        }
    }
    return bestPlayer;
};

const winningTeam = () => {
    const game = gameObject();
    let topTeam = "";
    let highestScore = 0;

    for (const team in game) {
        const teamPoints = Object.values(game[team].players).reduce((sum, player) => sum + player.points, 0);

        if (teamPoints > highestScore) {
            highestScore = teamPoints;
            topTeam = game[team].teamName;
        }
    }
    return topTeam;
};

const playerWithLongestName = () => {
    const game = gameObject();
    let longestName = "";

    for (const team in game) {
        for (const player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
};

const doesLongNameStealATon = () => {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let bestDefender = "";

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].steals > mostSteals) {
                mostSteals = game[team].players[player].steals;
                bestDefender = player;
            }
        }
    }
    return longestName === bestDefender;
};

console.log(`Points scored by Ben Gordon: ${numPointsScored("Ben Gordon")}`);
console.log(`Shoe size of Brook Lopez: ${shoeSize("Brook Lopez")}`);
console.log(`Colors of Charlotte Hornets:`, teamColors("Charlotte Hornets"));
console.log(`All team names:`, teamNames());
console.log(`Jersey numbers of Brooklyn Nets:`, playerNumbers("Brooklyn Nets"));
console.log(`Stats of Alan Anderson:`, playerStats("Alan Anderson"));
console.log(`Rebounds by player with the biggest shoe size: ${bigShoeRebounds()}`);

console.log(` Player with most points: ${mostPointsScored()}`);
console.log(` Winning team: ${winningTeam()}`);
console.log(` Player with the longest name: ${playerWithLongestName()}`);
console.log(` Does the longest name player have the most steals? ${doesLongNameStealATon() ? "Yes" : "No"}`);
