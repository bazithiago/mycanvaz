import styled from 'styled-components';

const InstagramStyles = styled.div`
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
        width: 20%;
    }
`



export default function Instagram({ artData }) {
    const { eventName, personName, eventDate, local, partner, logo1, logo2 } = artData;

    return(
        <InstagramStyles>
            <p>{eventName}</p>
            <p>com {personName}</p>
            <p>data: {eventDate}</p>
            <p>no canal {local}</p>
            <p>{partner}</p>
            <img src={logo1} alt="" />
        </InstagramStyles>
    )
}


