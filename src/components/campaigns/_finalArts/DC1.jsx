import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { campaigns } from '../../../server/campaigns';
import { toPng } from 'html-to-image';
import '../../../styles/DC.css'
import Button, { TextButton } from '../../_atomicElements/buttons';

const DC1Styles = styled.div`
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
                bottom: 17vw;
                left: 20vw;
                color: var(--brown);
                font-weight: 900;
                text-transform: uppercase;
                width: 50vw;
                text-align: center;
                font-size: 3vw;
            }

            .description {
                position: absolute;
            }

            .highlight {
                position: absolute;
            }

            .destination {
                position: absolute;
            }

            

            
        }
    }
`

export default function DC1({ setDownloadScreenState }) {
    const imgBG = campaigns[1].arts[0].pieces[0].img
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
        <DC1Styles>
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
        </DC1Styles>
    )
}



