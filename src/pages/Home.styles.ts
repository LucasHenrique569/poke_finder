import styled from "styled-components";


export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const Description = styled.p`
    font-size: 1rem;
`

export const Input = styled.input`
    padding: 1rem;
    border: 1px solid #000000;
    border-radius: 4px;
`

export const Button = styled.button`
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    margin-left: 20px;
    background-color: #87CEFA;

    &:hover {
        background-color: #1E90FF;
    }
`