"use strict";

class Card {
  constructor(suit, rank, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
  describe() {
    console.log(`${this.rank} of ${this.suit}`);
  }
}

////Deck of Cards
class Deck extends Card {
  constructor() {
    super();
    this.suits = [`Hearts`, `Diamonds`, `Spades`, `Clubs`];
    this.ranks = [
      `2`,
      `3`,
      `4`,
      `5`,
      `6`,
      `7`,
      `8`,
      `9`,
      `10`,
      `Jack`,
      `Queen`,
      `King`,
      `Ace`,
    ];
    this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.newDeck = [];
    this.playDeck;
  }
  makeAdeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.newDeck.push(
          new Card(this.suits[i], this.ranks[j], this.value[j])
        );
      }
    }
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
}

//Player Class
class Player extends Deck {
  constructor(name) {
    super();
    this.name = name;
    this.hand = []; //eq1mpty array for players current held cards
    //properties of player
  }
}

class Menu extends Player {
  constructor() {
    //Menu Constructor
    super();
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
    alert(`Thank you for visiting this virtual War-Card Game simulator
    
    If you would like to play again simply refresh this page.`);
  }

  showMainMenu() {
    return prompt(`
  ---Welcome to this Virtual War-Card Game Simulator---
            -Current Players:  P1:${this.player1Picked.name} | P2: ${this.player2Picked.name}
    0) Exit
    1) Add Players for a new Game
    2) Deal Cards and Start the War Simulator!
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
    return this.showMainMenu();
  }
  startWar() {
    console.log(`The start war function has been called`);
  }
}

let startThis = new Menu();
startThis.startApp();
