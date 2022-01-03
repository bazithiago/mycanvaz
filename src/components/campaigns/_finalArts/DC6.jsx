import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { campaigns } from '../../../server/campaigns';
import { toPng } from 'html-to-image';
import '../../../styles/DC.css'
import Button, { TextButton } from '../../_atomicElements/buttons';

const DC6Styles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .buttons {
        margin-bottom: 2rem;

        button {
            margin-left: 1.5rem;
        }
    }

    .canvas {
        width: 100%;
        position: relative;

        img {
            width: 100%;
        }

        .content {
            width: 100%;
            p {
                font-family: 'Montserrat';
            }
            
            .title {
                position: absolute;
                top: 20vw;
                left: 5.5vw;
                color: var(--brown);
                font-weight: 900;
                text-transform: uppercase;
                width: 40vw;
                text-align: left;
                font-size: 3vw;
            }

            .description {
                position: absolute;
                top: 25vw;
                left: 5.5vw;
                font-size: 2vw;
                color: var(--beige);
                text-align: left;
                width: 35vw;
            }

            .highlight {
                position: absolute;
                bottom: 3vw;
                left: 33vw;
                color: white;
                font-size: 3vw;
                font-weight: 900;
                transform: rotate(-13deg);
                text-align: center;
            }

            .destination {
                position: absolute;
                bottom: 13vw;
                left: 5.5vw;
                text-align: left;
                font-size: 2.5vw;
                color: var(--orange);
                font-weight: 900;
            }
            
        }
    }
`

export default function DC6({ setDownloadScreenState }) {
    const imgBG = campaigns[1].arts[2].pieces[0].img
    const getItem = item => sessionStorage.getItem(item)
    const title = getItem('title'); 
    const description = getItem('description'); 
    const highlight = getItem('highlight');
    const destination = getItem('destination');

    const ref = useRef(null);
    const onButtonClick = useCallback(() => {
    if (ref.current === null) {
        return
    }
    toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'MyCanvaz.png'
            link.href = dataUrl
            link.click()
            })
        .catch((err) => {
            console.log(err)
            })
    }, [ref])

    const backState = () => {
        setDownloadScreenState('CARDS_LIST');
    };
    
    return(
        <DC6Styles>
            <div className="buttons">
                <TextButton  onClick={backState}>voltar </TextButton>
                <Button primary onClick={onButtonClick}>DOWNLOAD</Button>
            </div>
            <div ref={ref} className='canvas'>
                <img src={imgBG} alt=""/>

                <div className='content'>
                    <p className='title'>{title}</p>
                    <p className='description'>{description}</p>
                    <p className='highlight'>{highlight}</p>
                    <p className='destination'>{destination}</p>
                </div>
            </div>
        </DC6Styles>
    )
}



