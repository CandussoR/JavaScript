const team = {
  _players: [ {
    firstName: 'Chris',
    lastName: 'Sale',
    age: 32
  },
  {
    firstName: 'Mooky',
    lastName: 'Betts',
    age: 29
  },
  {
    firstName: 'Jackie',
    lastName: 'Bradley Jr',
    age: 31
  }],
  _games: [
    {
      opponent: 'New York Yankees',
      teamPoints: 8,
      opponentPoints: 4,
    },
    {
      opponent: 'L.A. Dodgers',
      teamPoints: 6,
      opponentPoints: 5,
    },
    {
      opponent: 'Tampa Bays',
      teamPoints: 11,
      opponentPoints: 3,
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push({
      firstname: firstName,
      lastName: lastName,
      age: age
    });
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    });
  }
};

console.log(team.games);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Houston Astros', 4, 3);
team.addGame('Seattle Mariners', 7, 6);
team.addGame('Miami Marlins', 3, 7);
console.log(team.games);
