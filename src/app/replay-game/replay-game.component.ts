import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-replay-game',
  templateUrl: './replay-game.component.html',
  styleUrls: ['./replay-game.component.scss']
})
export class ReplayGameComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }

  replayGame() {
    let game = new Game();

    this
      .firestore
      .collection('games')
      .add(game.toJson())
      .then( (gameInfo:any) => {
        this.router.navigateByUrl('');
      });
  }

}
