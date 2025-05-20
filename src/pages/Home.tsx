import { useState } from "react"
import { Button, Container, Description, Input, Title } from "./Home.styles"
import { useNavigate } from "react-router-dom"


export function Home() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    
    const handleSearch = async () => {
        if (search.trim() !== "") {
            //redireciona para a segunda página com o nome do Pokémon na URL
            navigate(`/pokemon/${search}`);
        }
    }

    return (
        <Container>
            <Title>Buscador de Pokémons</Title>
            <Description>Olá, bem vindo ao buscador de pokémons, digite o nome do pokemon
                no campo abaixo para obter algumas informações do mesmo, como
                nome, id, imagem e tipo.
            </Description>
            <Input
                type="text"
                placeholder="Buscar pokemon ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={handleSearch}>Buscar</Button>
        </Container>
    )
}
