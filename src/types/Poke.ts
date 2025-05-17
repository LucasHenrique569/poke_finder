
export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}