import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../_buttons/index';

const CreateCampaignStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div.title {
        width: 100%;
        text-align: left;
        margin-bottom: 4rem;

        h2 {
            margin-bottom: 1rem;
        }
        p {
            font-size: 1rem;
            color: var(--grey-one);
            line-height: 1.35rem;
        }
    }

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

const ButtonCreate = styled(Button)`
    position: fixed;
    bottom: 5vh;
`

export default function CreateCampaign() {

    return(
        <CreateCampaignStyles>
            <div className="title">
                <h2>Título da campanha</h2>
                <p>detalhes Lorem ipsum dolor detalhes Lorem ipsum dolor sit amet, consectetur adipiscing detalhes Lorem ipsum dolor detalhes </p>
            </div>

            <form action="submit">
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" placeholder="Exemplo de placeholder" />

                <label htmlFor="title">Outra informção</label>
                <input type="text" name="title" id="title" placeholder="Exemplo de placeholder" />

                <label htmlFor="upload">Upload foto</label>
                <input type="file" name="upload" id="upload" />

            </form>

            
                <ButtonCreate primary><Link to='/downloads'>criar campanha {`>>`}</Link></ButtonCreate>
            
            
        </CreateCampaignStyles>
    )
}