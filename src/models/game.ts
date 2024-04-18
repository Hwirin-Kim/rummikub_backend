import Player from "./player";
import Tile, { TileColor, TileNumber } from "./tile";

class Game {
  private tiles: Tile[] = [];
  constructor(private players: Player[]) {
    this.tiles = this.createTileDeck();
  }

  private createTileDeck(): Tile[] {
    const colors: TileColor[] = ["black", "blue", "red", "yellow"];
    const tiles: Tile[] = [];
    for (let color of colors) {
      for (let number = 1; number <= 13; number++) {
        //각 타일은 2개씩 존재하므로 두번 생성
        tiles.push(new Tile(number as TileNumber, color));
        tiles.push(new Tile(number as TileNumber, color));
      }
    }
    tiles.push(new Tile(0 as TileNumber, "black", true));
    tiles.push(new Tile(0 as TileNumber, "red", true));
    return tiles;
  }
}

export default Game;
