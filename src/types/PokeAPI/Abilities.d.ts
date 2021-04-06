interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
  slot: number;
}

export default interface Abilities {
  abilities: Ability[];
}
