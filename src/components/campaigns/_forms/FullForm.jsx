import { useState } from 'react'
import styled from 'styled-components';

const FullFormStyles = styled.div`
    width: 100%;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        label, .label {
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

export default function FullForm() {
    const setItem = (key, value) => sessionStorage.setItem(`${key}`, `${value}`);
    const [ eventName, setEventName ] = useState('')
    const [ personName, setPersonName ] = useState('')
    const [ eventDate, setEventDate ] = useState('')
    const [ local, setLocal ] = useState('')
    const [ partner, setPartner ] = useState('')
    
    const imageUpload = (e) => {
        const id = e.target.id;        
        const file = e.target.files[0];

        if (file.size > 4e6) {
           window.alert("Subir um arquivo menor que 3MB");
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
          sessionStorage[id] = base64;
        });
    };

    return(
        <FullFormStyles>
            <form action="submit">               

                <label htmlFor="eventName">Nome do evento</label>
                <input type="text" name="eventName" id="eventName" placeholder="Ex: Como vender no instagram" value={eventName} onChange={(e) => {setEventName(setItem('eventName', e.target.value))}}/>

                <label htmlFor="personName">Nome da(o) palestrante/convidada(o)</label>
                <input type="text" name="personName" id="personName" placeholder="Nome completo" value={personName} onChange={(e) => {setPersonName(setItem('personName', e.target.value))}}/>

                <label htmlFor="eventDate">Data do evento</label>
                <input type="text" name="eventDate" id="eventDate" placeholder="DD/MM/AAAA" value={eventDate} onChange={(e) => {setEventDate(setItem('eventDate', e.target.value))}} />
               
                <label htmlFor="local">Local ("no canal...")</label>
                <input type="text" name="local" id="local" placeholder="Nome do canal" value={local} onChange={(e) => {setLocal(setItem('local', e.target.value))}} />

                <label htmlFor="partner">Tipo de apoio</label>
                <input type="text" name="partner" id="partner" placeholder="Ex: Parceiros, Patrocínios, Apoio..." value={partner} onChange={(e) => {setPartner(setItem('partner', e.target.value))}} />

                <label htmlFor="logo1">Logo do parceiro 1</label>
                <input type="file" name="logo1" id="logo1" accept=".png, .jpg, .jpeg" onChange={imageUpload}/>

                <label htmlFor="logo2">Logo do parceiro 2</label>
                <input type="file" name="logo2" id="logo2" accept=".png, .jpg, .jpeg" onChange={imageUpload}/>
            </form>

        </FullFormStyles>
    )
}