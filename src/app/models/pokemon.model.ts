import { Result } from './pokemonStruc.model';

export interface Pokemon{
    abilities: Abilities[];
    forms: Result[];
    base_experience: number;
    height: number;
    id: number;
    name: string;
    order: number;
    species: Result[];
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
    weight: number;
}
export interface Abilities{
    ability: Result;
    is_hidden: boolean;
    slot: number;
}
export interface Sprites{
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}
export interface Stats{
    base_stat: number;
    effort: number;
    stat: Result;
}
export interface Types{
    slot: number;
    type: Result;
}
