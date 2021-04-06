import Abilities from "./Abilities";
import Moves from "./Moves";
import Sprites from "./Sprites";
import Types from "./Types";

export default interface PokeAPI extends Abilities, Moves, Sprites, Types {
  base_experience: number;
  name: string;
  order: number;
  weight: number;
}
