import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css'],
})
export class GameListingComponent implements OnInit {
  games?: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      console.log(games);
      this.games = games;
    });
  }

  deleteGame(gameId: any) {
    this.gameService.deleteGame(gameId).subscribe((res) => {
      console.log(res);
    }, (err) =>{
      console.log(err)
    });
  }
}
