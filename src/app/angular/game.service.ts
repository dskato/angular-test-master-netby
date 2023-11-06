import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from './types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = "/api/games"; 

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string): Observable<Game> {
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.get<Game>(url);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game);
  }

  updateGame(game: Game): Observable<Game> {
    const url = `${this.gamesUrl}/${game.id}`;
    return this.http.put<Game>(url, game);
  }

  deleteGame(gameId: string): Observable<void> {
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.delete<void>(url);
  }

  getLastGameId(): Observable<number> {
    return this.getGames().pipe(
      map((games) => {
        if (games && games.length > 0) {
          return Math.max(...games.map((game) => game.id));
        } else {
          // If no games are available, start with an initial ID (e.g., 1)
          return 0;
        }
      })
    );
  }
}
