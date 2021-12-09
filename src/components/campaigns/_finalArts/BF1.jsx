import styled from 'styled-components';

const BF1Styles = styled.div`
    img {
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
    }

    .eventName {
        position: absolute;
        top: 65%;
        left: 10%auto;
        color: var(--primary);
        font-size: 150%;
    }
`

export default function BF1({ formData, imgBg }) {
    // const { eventName } = formData
    // const { eventName, personName, eventDate, local, partner, logo1, logo2 } = formData
    
    return(
        <BF1Styles>
            <img src="" alt=""/>
            <h1 className='eventName'>teste</h1>
        </BF1Styles>
    )
}