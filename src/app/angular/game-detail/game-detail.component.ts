import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  game: Game = {
    id: 0,
    name: '',
    description: '',
  };

  constructor(private gameService: GameService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const gameId = params['gameId'];
      this.gameService.getGameById(gameId).subscribe(
        (res) => {
          this.game = res;
          console.log(this.game)
        },
        (err) => {
          // Handle errors
        }
      );
    });
  }

  ngOnInit(): void {}
 
}
