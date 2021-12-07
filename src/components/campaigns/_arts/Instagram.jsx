import styled from 'styled-components';

const InstagramStyles = styled.div`
    width: 600px;
    height: 600px;
    background-color: var(--grey-one);
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 2rem;
        color: var(--primary);
    }
`

export default function Instagram({ artData }) {
    return(
        <InstagramStyles>
            <p>{artData.eventTitle}</p>
            <p>{artData.info}</p>
            <img src={artData.imgLocal} alt="" />
        </InstagramStyles>
    )
}