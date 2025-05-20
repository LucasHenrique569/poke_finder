import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PokemonData } from "../types/Poke";
import { fetchPokemonByName } from "../services/pokeApi_";
import {
    Container, 
    Image,
    Name,
    PokeId,
    Types_,
} from "./PokeDetails.styled";


export function PokeDetails() {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);

            const data = await fetchPokemonByName(name || "");
            if (data) {
                setPokemon(data);
            } else {
                setError(true); // Pokémon não encontrado
            }

            setLoading(false);
        };

        fetchData();
    }, [name]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Pokémon não encontrado. Verifique o nome digitado.</p>;

    return (
        <Container>
            <Image src={pokemon!.sprites.front_default} alt={pokemon!.name} />
            <Name>Nome: {pokemon!.name}</Name>
            <PokeId>ID: {pokemon!.id}</PokeId>
            <Types_>Tipo(s): {pokemon!.types.map((t) => t.type.name).join(", ")}</Types_>
        </Container>
    )
}

