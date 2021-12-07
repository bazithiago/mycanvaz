import styled from 'styled-components';

const FinalArtStyles = styled.div`
    width: 600px;
    height: 600px;
    background-color: var(--grey-one);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 2rem;
        color: var(--primary);
    }

    img {
        width: 10%;
    }
`



export default function FinalArt({ imgBg, fullFormData }) {
    const { eventName, personName, eventDate, local, partner, logo1, logo2 } = fullFormData;

    return(
        <FinalArtStyles>
            <p>{eventName}</p>
            <p>com {personName}</p>
            <p>data: {eventDate}</p>
            <p>no canal {local}</p>
            <p>{partner}</p>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={imgBg} alt="" />
        </FinalArtStyles>
    )
}


