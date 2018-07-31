import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InGameComponent } from './in-game/in-game.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { GameresultComponent } from './gameresult/gameresult.component';


@NgModule({
  declarations: [
    AppComponent,
    InGameComponent,
    WelcomeComponent,
    MainmenuComponent,
    GameresultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
