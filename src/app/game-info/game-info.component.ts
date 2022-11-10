import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Ass', description: 'Wenn du diese Karte ziehst, musst du einen Schluck aus deinem Becher trinken und die anderen Spieler im Uhrzeigersinn nacheinander ebenfalls.' },
    { title: 'Zwei', description: 'Du darfst bestimmen, welcher Spieler etwas trinken bzw. seinen Becher leer trinken muss.' },
    { title: 'Drei', description: 'Du musst selbst trinken.' },
    { title: 'Vier', description: 'Alle weiblichen Mitspieler müssen trinken.' },
    { title: 'Fünf', description: 'Du wirst zum Thumbmaster und musst deinen Daumen auf den Tisch bzw. die Spielfläche legen. Auch alle anderen Spieler müssen dies tun und wer zuletzt reagiert, muss trinken.' },
    { title: 'Sechs', description: 'Alle männlichen Mitspieler müssen trinken.' },
    { title: 'Sieben', description: 'Du musst dich wie in der Schule melden. Auch deine Mitspieler müssen das und wer als letztes reagiert, muss trinken.' },
    { title: 'Acht', description: 'Du musst einen weiblichen Mitspieler aussuchen, der immer gemeinsam mit dir trinken muss. Bist du weiblich, musst du einen männlichen Mitspieler aussuchen.' },
    { title: 'Neun', description: 'Du sagst ein alltägliches Wort und im Uhrzeigersinn muss jeder Mitspieler ein sich darauf reimendes Wort sagen. Wer zu lange braucht oder keins findet, muss trinken.' },
    { title: 'Zehn', description: 'Falls du diese Karte ziehst, nennst du eine Marke (z.B. Automarke: BMW) und der Reihenfolge nach muss jeder Mitspieler ebenfalls eine Marke aus der gleichen Kategorie (z.B. Audi) nennen. Wer zu lange braucht oder das nicht schafft, muss trinken.' },
    { title: 'Bube', description: 'Hast du diese Karte gezogen, darfst du dir eine neue Regel ausdenken, wann, ob, wie oder wie viel getrunken werden muss. Wer die Regel nicht befolgt – muss trinken. Diese kommt dann zu den bereits vorhandenen Ringe of Fire Regeln hinzu.' },
    { title: 'Dame', description: 'Mit dir darf niemand reden, bis jemand anderes eine Königin gezogen hat. Wer doch mit dir redet, muss trinken.' },
    { title: 'König', description: 'Wenn du diese Karte gezogen hast, schüttest du deinen Becherinhalt in das Glas in der Mitte. Wer den letzten im Spiel befindlichen König zieht, muss dieses Glas austrinken. Prost!' },
  ];

  game!: Game;

  title = '';
  description = '';

  @Input() card!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
