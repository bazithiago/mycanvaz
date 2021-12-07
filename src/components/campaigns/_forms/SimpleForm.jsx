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
    const [ eventTitle, setEventTitle ] = useState('')
    const [ info, setInfo ] = useState('')
    
    const imageUpload = (e) => {
        const file = e.target.files[0];
        if (file.size > 4e6) {
           window.alert("Subir um arquivo menor que 4MB");
           document.location.reload(true);
        }

        const getBase64 = (file) => {
            return new Promise((resolve,reject) => {
               const reader = new FileReader();
               reader.onload = () => resolve(reader.result);
               reader.onerror = error => reject(error);
               reader.readAsDataURL(file);
            });
          }
          

        getBase64(file).then(base64 => {
          sessionStorage["imgLocal"] = base64;
        });
    };

    return(
        <SimpleFormStyles>
            SIMPLE FORM

            <form action="submit">
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" placeholder="Exemplo de placeholder" value={eventTitle} onChange={(e) => {setEventTitle(setItem('eventTitle', e.target.value))}}/>

                <label htmlFor="title">Outra informção</label>
                <input type="text" name="title" id="title" placeholder="Exemplo de placeholder" value={info} onChange={(e) => {setInfo(setItem('info', e.target.value))}}/>

                <label htmlFor="inputFile">Upload foto</label>
                <input type="file" name="inputFile" id="inputFile" accept=".png, .jpg, .jpeg" onChange={imageUpload}/>
            </form>

        </SimpleFormStyles>
    )
}