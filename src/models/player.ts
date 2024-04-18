import Tile from "./tile";

class Player {
  hand: Tile[] = [];
  constructor(id: number, name: string) {}

  drawTile(tile: Tile) {
    this.hand.push(tile);
  }
  playTile(tileIndex: number) {
    return this.hand.splice(tileIndex, 1)[0];
  }
}

export default Player;
