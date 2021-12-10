import styled from 'styled-components';
import uniqid from 'uniqid';
import Button from '../_atomicElements/buttons';
import CampaignCard from './_cards/CampaignCard';
import { campaigns } from '../../server/campaigns';


const ChooseCampaignStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div.title {
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;
    }
    
    div.card + div.card {
        margin-top: 1.25rem;
    }

    div.button {
        margin-top: 28px;
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;  
    }
`

export default function ChooseCampaign({ setScreenState, setCampaignData }) { 

    return(
        <ChooseCampaignStyles>
            <div className="title">
                <h2>Escolha a campanha</h2>
            </div>

            {campaigns.map(campaignData => {
                return (
                    <CampaignCard 
                        key={uniqid()}
                        campaignData={campaignData} 
                        setScreenState={setScreenState} 
                        setCampaignData={setCampaignData}/>
                )
            })}

            <div className="button">
                <Button primary>mostrar mais</Button>
            </div>
        </ChooseCampaignStyles>
    )
}