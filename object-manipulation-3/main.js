console.log('Lodash is loaded:', typeof _ !== 'undefined');

function objectManipulation3 (players, numCards){



var playersObject = [ { name: '', hand: [], score:0}, { name: '', hand: [], score:0}, { name: '', hand: [], score:0}, { name: '', hand: [], score:0} ];


var cards = [
  { rank: 'Ace', suit: 'Clubs' },
  { rank: '2', suit: 'Clubs' },
  { rank: '3', suit: 'Clubs' },
  { rank: '4', suit: 'Clubs' },
  { rank: '5', suit: 'Clubs' },
  { rank: '6', suit: 'Clubs' },
  { rank: '7', suit: 'Clubs' },
  { rank: '8', suit: 'Clubs' },
  { rank: '9', suit: 'Clubs' },
  { rank: '10', suit: 'Clubs' },
  { rank: 'Jack', suit: 'Clubs' },
  { rank: 'Queen', suit: 'Clubs' },
  { rank: 'King', suit: 'Clubs' },
  { rank: 'Ace', suit: 'Diamonds' },
  { rank: '2', suit: 'Diamonds' },
  { rank: '3', suit: 'Diamonds' },
  { rank: '4', suit: 'Diamonds' },
  { rank: '5', suit: 'Diamonds' },
  { rank: '6', suit: 'Diamonds' },
  { rank: '7', suit: 'Diamonds' },
  { rank: '8', suit: 'Diamonds' },
  { rank: '9', suit: 'Diamonds' },
  { rank: '10', suit: 'Diamonds' },
  { rank: 'Jack', suit: 'Diamonds' },
  { rank: 'Queen', suit: 'Diamonds' },
  { rank: 'King', suit: 'Diamonds' },
  { rank: 'Ace', suit: 'Hearts' },
  { rank: '2', suit: 'Hearts' },
  { rank: '3', suit: 'Hearts' },
  { rank: '4', suit: 'Hearts' },
  { rank: '5', suit: 'Hearts' },
  { rank: '6', suit: 'Hearts' },
  { rank: '7', suit: 'Hearts' },
  { rank: '8', suit: 'Hearts' },
  { rank: '9', suit: 'Hearts' },
  { rank: '10', suit: 'Hearts' },
  { rank: 'Jack', suit: 'Hearts' },
  { rank: 'Queen', suit: 'Hearts' },
  { rank: 'King', suit: 'Hearts' },
  { rank: 'Ace', suit: 'Spades' },
  { rank: '2', suit: 'Spades' },
  { rank: '3', suit: 'Spades' },
  { rank: '4', suit: 'Spades' },
  { rank: '5', suit: 'Spades' },
  { rank: '6', suit: 'Spades' },
  { rank: '7', suit: 'Spades' },
  { rank: '8', suit: 'Spades' },
  { rank: '9', suit: 'Spades' },
  { rank: '10', suit: 'Spades' },
  { rank: 'Jack', suit: 'Spades' },
  { rank: 'Queen', suit: 'Spades' },
  { rank: 'King', suit: 'Spades' }
];

  var cards = _.sampleSize(cards, numCards * 4);
  var z = 0;


for (var i =0; i < players.length; i++){
  playersObject[i]['name'] = players[i];

  for (var y = 0; y < numCards; y++) {
    playersObject[i]['hand'][y] = cards[z];
    z = z + 1;
  }
}

var score = 0;
var points = 0;
var arrayScore = [];
var winnerNumber = 0;

for (var i = 0; i < players.length; i++) {
  for (var j = 0; j < playersObject[i]['hand'].length; j++){
    if (playersObject[i]['hand'][j]['rank'] === 'Ace') {
      points = 11;
    } else if ((playersObject[i]['hand'][j]['rank'] === 'Jack') || (playersObject[i]['hand'][j]['rank'] === 'Queen') || (playersObject[i]['hand'][j]['rank']==='King')){
      points = 10;
    }  else {
      points = parseInt(playersObject[i]['hand'][j]['rank']);
    }
    score = score + points;
  }
  playersObject[i]['score'] = score;
  arrayScore.push(score);
  score = 0;
  console.log('Player ' + (i+1) + ' ' + playersObject[i]['name']);
  console.log('Cards: ', playersObject[i]['hand']);
}

winnerNumber = Math.max(...arrayScore);

  for (var i = 0; i < players.length; i++) {
    if (playersObject[i]['score'] === winnerNumber) {
      console.log('Winner: ', playersObject[i]['name']);
    }
  }

}
