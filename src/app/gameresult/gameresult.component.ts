import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameresult',
  templateUrl: './gameresult.component.html',
  styleUrls: ['./gameresult.component.css']
})
export class GameresultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  replay(): void{
    document.getElementById("modal").style.display = "none";
  }
}
