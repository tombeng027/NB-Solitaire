import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private deckservice: DeckService, private cardservice: CardService) { }

  ngOnInit() {
  }
  clearTable(): void{
    this.deckservice.clearTable();
    this.cardservice.total = 0;
  }
}
