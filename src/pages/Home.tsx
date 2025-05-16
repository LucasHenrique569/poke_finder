import { useState } from "react"
import { Button, Container, Description, Input, Title } from "./Home.styles"

function Home() {
    const [search, setSearch] = useState('')

    return (
        <>
            <Container>
                <Title>Buscador de Pokémon</Title>
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
                <Button>Clique aqui</Button>
            </Container>
        </>
    )
}

export default Home