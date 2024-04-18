export type TileNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type TileColor = "red" | "blue" | "yellow" | "black";

interface Tile {
  number: TileNumber;
  color: TileColor;
  isJoker?: boolean;
}

class Tile implements Tile {
  number: TileNumber;
  color: TileColor;
  isJoker?: boolean | undefined;
  constructor(number: TileNumber, color: TileColor, isJoker: boolean = false) {
    this.number = number;
    this.color = color;
    this.isJoker = isJoker;
  }
}

export default Tile;
