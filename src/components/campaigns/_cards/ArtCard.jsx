import styled from 'styled-components';
import { TextButton } from '../../_atomicElements/buttons';

const ArtCardStyles = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    min-height: 100px;
    max-height: 120px;
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    padding: 16px;

    :hover {
        transform: translateY(-2px);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    } 

    :active {
        transform: translateY(0px);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    }

    div.image {
        flex: 1;
        background-color: var(--grey-two);
        margin-right: 16px;
        
        img {
            border-radius: 6px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    div.content {
        flex: 3;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    div.buttons {
        display: flex;
        align-items: center;
        margin-right: 1rem;

        a + a {
            margin-left: 3rem;
        }
    }

`



export default function ArtCard({ piece, formInputs, setFormData, setDownloadScreenState }) {
    function handleCreateArt() {
        setFormData(formInputs);
        setDownloadScreenState('ART_VIEWER')
    }
    return(
            <ArtCardStyles className="card" onClick={handleCreateArt}>
                <div className="image">
                    <img src={piece.img} alt=''/>
                </div>
                <div className="content">
                    <h3>{piece.title}</h3>
                </div>
                <div className="buttons">
                    <TextButton textButton>abrir {`>>`}</TextButton>
                </div> 
            </ArtCardStyles>
    )
}