import styled from 'styled-components';
import Button from '../_buttons/index';
import CampaignCard from './CampaignCard'

const ChooseCampaignStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div.title {
        width: 100%;
        text-align: left;
        margin-bottom: 3vh;

        h2 {
            color: var(--blue-one);
            font-size: 1.75rem
        }
    }

    div.card + div.card {
        margin-top: 18px;
    }

    div.button {
        margin-top: 28px;
    }
`

export default function ChooseCampaign() {
    return(
        <ChooseCampaignStyles>
            <div className="title">
                <h2>Escolha a campanha</h2>
            </div>
            <CampaignCard />
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