import styled from 'styled-components';
import Button from '../_atomicElements/buttons';
import CampaignCard from './_cards/CampaignCard';


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

export default function ChooseCampaign({ setScreenState }) {
    
    function handleClick(e) {
        console.log(e)
        console.log('clicou')
        setScreenState('CREATE_CAMPAIGN')    
    }

    return(
        <ChooseCampaignStyles>
            <div className="title">
                <h2>Escolha a campanha</h2>
            </div>
            <CampaignCard handleClick={handleClick}/>
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <div className="button">
                <Button primary>mostrar mais</Button>
            </div>
        </ChooseCampaignStyles>
    )
}