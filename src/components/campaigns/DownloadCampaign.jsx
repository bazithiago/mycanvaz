import styled from 'styled-components';
import BlockArt from './_cards/BlockArts';

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
    const title = sessionStorage.getItem('title');
    const description = sessionStorage.getItem('description');
    const highlight = sessionStorage.getItem('highlight');
    const destination = sessionStorage.getItem('destination');

    const fullFormData = { eventName, personName, eventDate, local, partner, logo1, logo2 }
    const simpleFormData = { title, description, highlight, destination }
    let formData 

    if(campaignData.type === 'full') {
        formData = fullFormData
    } else {
        formData = simpleFormData
    }

    return(
        <DownloadCampaignStyles>
            <div className="title">
                <h2>{campaignData.title}</h2>
            </div>


            {campaignData.arts.map(art => {
                return (
                    <BlockArt destination={art.destination} pieces={art.pieces} formData={formData}/>
                )
            })}

        </DownloadCampaignStyles>
    )
}