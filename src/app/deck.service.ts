import { Injectable } from '@angular/core';
import { Card } from './card';
import { cards,foundation,maneuver } from './deck';
import { wastepile } from './deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  draw:number;
  constructor() { }
  
  createDeck(): Card[] {
    var x;
    for(x=1;x<14;x++){
      cards.push(new Card("D", x))
    }
    for(x=1;x<14;x++){
      cards.push(new Card("H", x))
    }
    for(x=1;x<14;x++){
      cards.push(new Card("S", x))
    }
    for(x=1;x<14;x++){
      cards.push(new Card("C", x))
    }
    this.shuffle();
    return cards;
  }

  shuffle(): Card[] {
    var currentIndex = cards.length;
    var temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;
  }

  distributeCards(): void {
    let z = 0; let x;
    let i;
  
      while (z < 7) { // TODO fixed set field should distribute 1 card per
        // pile not put 7 in one pile then next pile
        i = z;
        x = z + 1;
        while (i < 7) {
           maneuver[i].push(cards.pop());
          i++;
        }
        if (x > 6) {
          break;
        }
        z++;
      }
      for(let v = 0; v < 7; v++){
          maneuver[v][maneuver[v].length-1].Flip();
      }
  }

  drawCard(): void{

    if(cards.length == 0){
      while(!(wastepile.length == 0)){
        wastepile[wastepile.length-1].setFaceDown();
        cards.push(wastepile.pop());
      }
    }else{
      for(let c = 0; c < this.draw; c++){
          if(!(cards.length == 0)){
            cards[cards.length-1].Flip();
            wastepile.push(cards.pop());
          }else{
            break;
          }
      }   
    }
  }

  newGame(int: number): void{
    this.draw = int;
    this.clearTable();
    this.createDeck();
    this.distributeCards();
  }

  clearTable(){
    while(!(cards.length == 0)){
      cards.pop();
    }
    while(!(wastepile.length == 0)){
      wastepile.pop();
    }
    for(let x = 0; x < 7; x++){
      while(!(maneuver[x].length == 0)){
        maneuver[x].pop();
      } 
    }
    for(let x = 0; x < 4; x++){
      while(!(foundation[x].length == 0)){
        foundation[x].pop();
      }
    }
  }
}
