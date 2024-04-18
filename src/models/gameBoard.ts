import Tile from "./tile";

class GameBoard {
  tiles: Tile[] = [];

  addTile(tile: Tile) {
    this.tiles.push(tile);
  }
}

export default GameBoard;
