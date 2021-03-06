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
    this.player1Score = 0;
    this.player2Score = 0;
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
          return;
        default:
          selection = 0;
      }
      selection = this.showMainMenu();
    }
    alert(`Thank you for visiting this virtual War-Card Game simulator!
    
    If you would like to play again simply refresh this page.`);
  }

  showMainMenu() {
    return prompt(`
  ---Welcome to this Virtual War-Card Game Simulator---
            -Current Players:  P1:${this.player1Picked.name} | P2: ${this.player2Picked.name}
    0) Exit
    1) Add Players for a new Game
    2) Deal Cards and Start the War Simulator!
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
  }
  startWar() {
    if (
      this.player1Picked instanceof Player &&
      this.player2Picked instanceof Player
    ) {
      alert(`Make sure you open your browser's console to see the Game!
    
    Refresh this page if you want to simulate another game.`);
      //Makes a new deck of cards and shuffles them
      let startWarDeck1 = new Deck();
      startWarDeck1.makeAdeck();
      startWarDeck1.shuffle(startWarDeck1.newDeck);
      // For loop for dealing out the card to each player's hand
      for (let i = 0; i < startWarDeck1.newDeck.length; i++) {
        if (i % 2 == 0) {
          this.player1Picked.hand.push(startWarDeck1.newDeck[i]);
        } else {
          this.player2Picked.hand.push(startWarDeck1.newDeck[i]);
        }
      }
      //For loop for the comparison between card values. 2 lowest 14 highest
      for (let i = 0; i < this.player1Picked.hand.length; i++) {
        if (
          this.player1Picked.hand[i].value > this.player2Picked.hand[i].value
        ) {
          this.player1Score += 1;
          console.log(
            `${this.player1Picked.name} played ${this.player1Picked.hand[i].rank} of ${this.player1Picked.hand[i].suit} beating out ${this.player2Picked.hand[i].rank} of ${this.player2Picked.hand[i].suit} played by ${this.player2Picked.name}!`
          );
        } else if (
          this.player1Picked.hand[i].value < this.player2Picked.hand[i].value
        ) {
          this.player2Score += 1;
          console.log(
            `${this.player2Picked.name} played ${this.player2Picked.hand[i].rank} of ${this.player2Picked.hand[i].suit} beating out ${this.player1Picked.hand[i].rank} of ${this.player1Picked.hand[i].suit} played by ${this.player1Picked.name}!`
          );
        } else if (
          this.player1Picked.hand[i].value == this.player2Picked.hand[i].value
        ) {
          console.log(`This battle of war was a tie! No player got a point!`);
        }
      }
      console.log(`
    --------------
    The Score:
    --------------
    ${this.player1Picked.name}:${this.player1Score}
    ${this.player2Picked.name}:${this.player2Score}
    `);
      if (this.player1Score > this.player2Score) {
        console.log(
          `Congratulations!! ${this.player1Picked.name}, you are the winner of this War Card Game simuilated game!!`
        );
      }
      if (this.player2Score > this.player1Score) {
        console.log(
          `Congratulations!! ${this.player2Picked.name} you are the winner of this War Card Game simuilated game!!`
        );
      } else if (this.player1Score === this.player2Score) {
        console.log(
          `As luck would have it this game was a tie and no one is the winner!`
        );
      }
    } else {
      throw new Error(`You must first add players with option 1`);
    }
  }
}

let startThis = new Menu();
startThis.startApp();
