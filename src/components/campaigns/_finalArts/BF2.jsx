import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { campaigns } from '../../../server/campaigns';
import { toPng } from 'html-to-image';
import '../../../styles/BF.css'
import Button, { TextButton } from '../../_atomicElements/buttons';

const BF1Styles = styled.div`
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

            .dateGroup {
                position: absolute;
                top: 12vw;
                left: 6vw;

                .eventDate {
                    color: var(--dark-blue);
                    background-color: var(--salmon);
                    border-radius: 1vw;
                    padding: 0.6vw 2.5vw 0.4vw;
                    font-size: 3.5vw;
                    font-weight: 700;
                    margin-bottom: 0.5vw;
                }
    
                .local {
                    color: var(--salmon);
                    font-weight: bold;
                    font-size: 3vw;
                    line-height: 3.5vw;
    
                    span {
                        color: var(--light-blue);
                        text-transform: uppercase;
                        font-family: 'Exo';
                        font-size: 2.8vw;
                    }
                }
            }

            .titleGroup {
                position: absolute;
                top: 8vw;
                left: 36.5vw;
                font-weight: bold;

                .eventType{
                    color: var(--salmon);
                    font-size: 2vw;
                    text-transform: uppercase;
                    margin-bottom: 1vw;
                }

                .eventName {
                    color: var(--light-blue);
                    font-size: 5vw;
                    line-height: 5.5vw;
                    max-width: 55vw;
                    margin-bottom: 1vw;
                }

                .personName {
                    color: var(--salmon);
                    font-size: 2vw;
                    text-transform: uppercase;

                    span {
                        text-transform: lowercase;
                    }
                }
            }

            .partnerGroup {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 43vw;
                height: 17vw;
                
                .partner {
                    position: absolute;
                    left: 11vw;
                    color: var(--dark-blue);
                    font-weight: bold;
                    font-size: 1.5vw;
                    text-transform: uppercase;
                    letter-spacing: 0.4vw;
                }

                .logos {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 4vw;
                    padding: 0 0 0 0;
                }

                .logo1, .logo2 {
                    width: 12vw;
                    height: 12vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        object-fit: cover;
                    }
                }
            }
        }
    }
`

export default function BF1({ setDownloadScreenState }) {
    const imgBG = campaigns[0].arts[0].pieces[1].img
    const getItem = item => sessionStorage.getItem(item)
    const eventName = getItem('eventName'); 
    const personName = getItem('personName'); 
    const eventDate = getItem('eventDate');
    const local = getItem('local');
    const partner = getItem('partner');
    const logo1 = getItem('logo1');
    const logo2 = getItem('logo2');

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
        <BF1Styles>
            <div className="buttons">
                <TextButton  onClick={backState}>voltar </TextButton>
                <Button primary onClick={onButtonClick}>DOWNLOAD</Button>
            </div>
            <div ref={ref} className='canvas'>
                <img src={imgBG} alt=""/>

                <div className='content'>
                    <div className="dateGroup">
                        <p className="eventDate">{eventDate}</p>
                        <p className="local">no canal <br/> <span>{local}</span></p>
                    </div>

                    <div className="titleGroup">
                        <p className="eventType">palestra</p>
                        <p className="eventName">{eventName}</p>
                        <p className="personName"><span>com </span>{personName}</p>
                    </div>

                    <div className="partnerGroup">
                        <p className="partner">apoio</p>
                        <div className="logos">
                            <div className="logo1">
                                <img src={logo1} alt="" />
                            </div>
                            <div className='logo2'>
                                <img src={logo2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BF1Styles>
    )
}



