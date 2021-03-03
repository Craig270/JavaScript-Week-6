"use strict";
/*
let ranks = [
  ["Two", 2], //0
  ["Three", 3], //1
  ["Four", 4], //2
  ["Five", 5], //3
  ["Six", 6], //4
  ["Seven", 7], //5
  ["Eight", 8], //6
  ["Nine", 9], //7
  ["Ten", 10], //8
  ["Jack", 11], //9
  ["Queen", 12], //10
  ["King", 13], //11
  ["Ace", 14], //12
];
//Fisher–Yates shuffle (found this from doing research)
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

console.log(shuffle(ranks));
let arrowShuffle = (array) => shuffle(array);
console.log(arrowShuffle(ranks));
class Card {
  constructor(value) {
    this.value = value;
  }
  describe() {
    console.log(`This card is a number ${this.number}.`);
  }
}

class Deck {
  constructor() {
    this.sealedDeck = [
      ["Two", 2], //0
      ["Three", 3], //1
      ["Four", 4], //2
      ["Five", 5], //3
      ["Six", 6], //4
      ["Seven", 7], //5
      ["Eight", 8], //6
      ["Nine", 9], //7
      ["Ten", 10], //8
      ["Jack", 11], //9
      ["Queen", 12], //10
      ["King", 13], //11
      ["Ace", 14], //12
    ];
    this.playDeck = [];
    this.arrowShuffle = arrowShuffle = (array) => shuffle(array);
  }

  shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return (this.playDeck = array);
  }

  deal() {
    //deal the cards to players
  }
}

class Player extends Deck {
  constructor(name) {
    this.name = name;
    this.hand = []; //empty array for players current held cards
    //properties of player
  }
}
*/

//my first map(noun) data structure
let vegasDeck = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};
////Deck of Cards
class Deck {
  constructor() {
    this.suits = [`Hearts`, `Diamonds`, `Spades`, `Clubs`];
    this.ranks = [
      `2 of `,
      `3 of `,
      `4 of `,
      `5 of `,
      `6 of `,
      `7 of `,
      `8 of `,
      `9 of `,
      `10 of `,
      `Jack of `,
      `Queen of `,
      `King of `,
      `Ace of `,
    ];
    this.newDeck = [];
    this.arrowShuffle = arrowShuffle = (array) => shuffle(array);
  }
  makeAdeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.newDeck.push(this.ranks[j] + this.suits[i]);
      }
    }
  }
}

//Player Class
class Player {
  constructor(name) {
    this.name = name;
    this.hand = []; //eq1mpty array for players current held cards
    //properties of player
  }
}

class Menu {
  constructor() {
    //Menu Constructor
    this.player1Picked = " ";
    this.player2Picked = " ";
  }

  startApp() {
    let selection = this.showMainMenu();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createPlayers();
          break;
        case "2":
          this.startWar();
          break;
        case "3":
          this.alertPlayers();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenu();
    }
    alert(`Thank you for visiting this virtual War-Card Game simulator`);
  }

  showMainMenu() {
    return prompt(`
  ---Welcome to this Virtual War-Card Game Simulator---
    0) Exit
    1) Add Players for a new Game
    2) Start War-Card Game
    3) Alert Player1 and Player2 Names. 
    `);
  }

  alertPlayers() {
    if (this.player1Picked == " " && this.player2Picked == " ") {
      alert(`You must first add players names with menu option 1!`);
    } else
      alert(`
  Player1: ${this.player1Picked.name} 
  & 
  Player2: ${this.player2Picked.name} `);
  }

  createPlayers() {
    let player1 = prompt(`Enter the name for Player1: `);
    let player2 = prompt(`Enter the name for Player2: `);
    this.player1Picked = new Player(player1);
    this.player2Picked = new Player(player2);
    return this.startWar();
  }
  startWar() {
    alert(`The start war function has been called`);
  }
}

let startThis = new Menu();
startThis.startApp();
