const api = 'https://pokeapi.co/api/v2'

export async function fetchPokemonByName(name: string) {
    try {
        const response = await fetch(`${api}/pokemon/${name}`);
        
        if (!response.ok) return null;
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        return null;
    }
}