import axios from "axios";
import type { PokemonData } from "../types/Poke";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export async function fetchPokemonByName(name: string) {
    try {
        const response = await axios.get<PokemonData>(`${api}/pokemon/${name.toLowerCase()}`);
        return response.data ?? null
    } catch (error) {
        console.log('Erro ao buscar pokemon: ', error)
    }
}