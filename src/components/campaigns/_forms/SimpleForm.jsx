import { useState } from 'react'
import styled from 'styled-components';

const SimpleFormStyles = styled.div`
    width: 100%;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        label {
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 0.11em;
            color: var(--grey-one);
            font-weight: 700;
            font-size: 0.8rem;
            margin-bottom: 5px;
        }

        input {
            width: 100%;
            border: 1px solid var(--grey-two);
            border-radius: 8px;
            font-size: 1rem;
            color: var(--grey-one);
            padding: 0.8rem 0.5rem;

            :focus {
                border: 2px solid var(--primary);
                /* transform: translateY(-2px); */
            }

            ::placeholder {
                color: var(--grey-two);
            }
        }

        input + label {
            margin-top: 2rem;
        }
    }
`

export default function SimpleForm() {
    const setItem = (key, value) => sessionStorage.setItem(`${key}`, `${value}`);
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ highlight, setHighlight ] = useState('')
    const [ destination, setDestination ] = useState('')

    return(
        <SimpleFormStyles>
            
            <form action="submit">
                <label htmlFor="title">Texto maior</label>
                <input type="text" name="title" id="title" placeholder="Texto em destaque" value={title} onChange={(e) => {setTitle(setItem('title', e.target.value))}}/>

                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" placeholder="Texto menor" value={description} onChange={(e) => {setDescription(setItem('description', e.target.value))}}/>

                <label htmlFor="highlight">Destaque</label>
                <input type="text" name="highlight" id="highlight" placeholder="01 palavra" value={highlight} onChange={(e) => {setHighlight(setItem('highlight', e.target.value))}} />
               
                <label htmlFor="destination">Destino (site, rede social...)</label>
                <input type="text" name="destination" id="destination" placeholder="Ex: www.site.com.br" value={destination} onChange={(e) => {setDestination(setItem('destination', e.target.value))}} />
            </form>

        </SimpleFormStyles>
    )
}