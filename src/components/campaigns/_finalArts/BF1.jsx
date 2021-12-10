import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { campaigns } from '../../../server/campaigns';
import { toPng } from 'html-to-image';
import '../../../styles/BF.css'
import Button from '../../_atomicElements/buttons';

const BF1Styles = styled.div`

    .canvas {
        width: 100%;
        position: relative;

        img {
            width: 100%;
        }

        .content {
            width: 100%;

            .eventDate {
                position: absolute;
                top: 42.9vw;
                left: 10.5vw;
                color: var(--dark-blue);
                font-size: 2.75vw;
                font-weight: bold;
            }

            .local {
                position: absolute;
                top: 47.75vw;
                left: 6.5vw;
                color: var(--salmon);
                font-weight: bold;
                font-size: 2vw;
                line-height: 2.3vw;

                span {
                    color: var(--light-blue);
                    text-transform: uppercase;
                    font-family: 'Exo';
                    font-size: 2.1vw;
                }
            }

            .titleGroup {
                position: absolute;
                top: 60vw;
                left: 6.5vw;
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
                    line-height: 4.5vw;
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
                height: 13.5vw;
                
                .partner {
                    position: absolute;
                    left: 10vw;
                    color: var(--dark-blue);
                    font-weight: bold;
                    font-size: 1.3vw;
                    text-transform: uppercase;
                    letter-spacing: 0.4vw;
                }

                .logos {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 3vw;
                    padding: 0 6vw 0 0;
                }

                .logo1, .logo2 {
                    width: 10vw;
                    height: 10vw;
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

export default function BF1() {
    const imgBG = campaigns[0].arts[0].pieces[0].img
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
    
    return(
        <BF1Styles>
            <Button primary onClick={onButtonClick}>DOWNLOAD</Button>
            <div ref={ref} className='canvas'>
                <img src={imgBG} alt=""/>

                <div className='content'>
                    <p className="eventDate">{eventDate}</p>
                    <p className="local">no canal <br/> <span>{local}</span></p>

                    <div className="titleGroup">
                        <p className="eventType">palestra</p>
                        <p className="eventName">{eventName}</p>
                        <p className="personName"><span>com</span> {personName}</p>
                    </div>

                    <div className="partnerGroup">
                        <p className="partner">{partner}</p>
                        <div className="logos">
                            <div className="logo1">
                                <img src={logo1} alt="" />
                            </div>
                            <div className="logo2">
                                <img src={logo2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BF1Styles>
    )
}