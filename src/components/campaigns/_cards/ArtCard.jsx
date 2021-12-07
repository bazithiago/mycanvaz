import { useState } from 'react';
import styled from 'styled-components';
import Button, { TextButton } from '../../_atomicElements/buttons';
import Modal from '../../_atomicElements/Modal'
import Instagram from '../_arts/Instagram'

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
        flex-direction: column;
        justify-content: space-between;

        h3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    div.buttons {
        display: flex;
        justify-content: flex-end;
        margin-right: 1rem;

        a + a {
            margin-left: 3rem;
        }
    }

`

const ModalSyles = styled.div`
    
    & > div > div > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    img {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
`

export default function ArtCard({ piece }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return(
        <ArtCardStyles className="card">
            <div className="image">
                <img src={piece.img} alt=''/>
            </div>
            <div className="content">
                <h3>{piece.title}</h3>

                <div className="buttons">
                    <TextButton textButton onClick={openModal}>visualizar</TextButton>
                    <TextButton textButton>baixar</TextButton>
                </div>               

                <ModalSyles>
                    <Modal showModal={showModal} setShowModal={setShowModal}>
                        {/* <Instagram artData={artData}/> */}
                        <Button primary>download</Button>
                    </Modal>
                </ModalSyles>
            </div>
        </ArtCardStyles>
    )
}