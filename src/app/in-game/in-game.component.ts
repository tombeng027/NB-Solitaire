import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { DeckService } from '../deck.service';
import { CardService } from '../card.service';
import { cards,maneuver,foundation,wastepile } from '../deck';



@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css']
})
export class InGameComponent implements OnInit {
  deck = cards;
  last: number;
  topofdeck: String;
  empty = "../assets/empty.png";
  back = "../assets/back.png";
 
  maneuver = maneuver;
  
  waste = wastepile;

  constructor(
    private deckservice: DeckService, 
    private cardservice: CardService,
  ){}
  
  ngOnInit(){
  }
  
  getImgSrc(cards: Card[],int: number): string{ 
    if(cards.length == 0){
      return this.empty;
    }else{
      if(int == 0){
        return cards[cards.length-1].getImgSrc();
      }else if (int == 1){
        if(cards[cards.length-2] == undefined){
          return this.empty;
        }else
        return cards[cards.length-2].getImgSrc();
      }else{
        if(cards[cards.length-3] == undefined){
          return this.empty;
        }else
        return cards[cards.length-3].getImgSrc();
      }
    }
  }

  getFoundSrc(int: number): string{
        if(foundation[int].length == 0){
          return this.empty;;
        }
        return foundation[int][foundation[int].length-1].imgsrc;
  }

  dragStart_Handler(ev,index:number,card: Card):void{
    var img = <HTMLImageElement> document.getElementById("sub");
    var canvas = <HTMLCanvasElement> document.getElementById("cardstomove");
    var ctx = canvas.getContext("2d");
    let x = 0, y = 0;
    for(let z = index; z<maneuver[index].length;z++){
      img.src = maneuver[index][z].imgsrc;
       ctx.drawImage(img,x,y,300,60);
      y += 25;
    }
    ev.dataTransfer.setDragImage(canvas, 50, 50);
  }
  
}
