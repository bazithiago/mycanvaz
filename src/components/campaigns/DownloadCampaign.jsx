import styled from 'styled-components';
import Separator from '../_atomicElements/separators';
import ArtCard from './_cards/ArtCard';

const DownloadCampaignStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div.title {
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;

        h2 {
            margin-bottom: -4rem;
        }
    }

    div.card + div.card {
        margin-top: 1.25rem;
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;  
    }
`

export default function DownloadCampaign({ campaignData }) {
    const eventName = sessionStorage.getItem('eventName'); 
    const personName = sessionStorage.getItem('personName'); 
    const eventDate = sessionStorage.getItem('eventDate');
    const local = sessionStorage.getItem('local');
    const partner = sessionStorage.getItem('partner');
    const logo1 = sessionStorage.getItem('logo1');
    const logo2 = sessionStorage.getItem('logo1');

    const artData = { eventName, personName, eventDate, local, partner, logo1, logo2 }

    return(
        <DownloadCampaignStyles>
            <div className="title">
                <h2>{campaignData.title}</h2>
            </div>
            <Separator>feed instagram</Separator>
            <ArtCard artData={artData}/>
            <ArtCard />

            <Separator>stories</Separator>
            <ArtCard />
            <ArtCard />
        </DownloadCampaignStyles>
    )
}