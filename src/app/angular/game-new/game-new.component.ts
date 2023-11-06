import { Component, OnInit } from '@angular/core';
import { Game } from '../types';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css'],
})
export class GameNewComponent implements OnInit {
  constructor(private gameService: GameService) {}

  game: Game = {
    id: 0,
    name: '',
    description: '',
  };

  ngOnInit(): void {
    
  }

  createGame() {
    this.gameService.getLastGameId().subscribe((res) => {
      console.log(res)
      this.game.id = res + 1;

      this.gameService.createGame(this.game).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {}
      );
    });
    
  }
}
