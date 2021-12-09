import styled from 'styled-components';

const ViewArtStyles = styled.div`
    display: flex;
    flex-direction: column;
`

export default function ViewArt({ campaignData, formData }) {
    const { eventName, personName, eventDate, local, partner, logo1, logo2 } = formData
    
    console.log(campaignData)
    console.log(formData)
    
    return(
        <ViewArtStyles>
            <p>{eventName}</p>
            <p>{personName}</p>
            <p>{eventDate}</p>
            <p>{local}</p>
            <p>{partner}</p>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />

        </ViewArtStyles>
    )
}