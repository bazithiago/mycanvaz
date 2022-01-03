import { useState, useMemo } from 'react';
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
    const [campaign] = useState(campaigns);
    const [numberOfitemsShown, setNumberOfItemsToShown] = useState(3);

    const showMore = () => {
        if (numberOfitemsShown + 3 <= campaigns.length) {
          setNumberOfItemsToShown(numberOfitemsShown + 3);
        } else {
          setNumberOfItemsToShown(campaigns.length);
        }
      };

      const itemsToShow = useMemo(() => {
        return campaign
          .slice(0, numberOfitemsShown)
          .map((campaignData) => 
                <CampaignCard 
                    key={uniqid()}
                    campaignData={campaignData} 
                    setScreenState={setScreenState} 
                    setCampaignData={setCampaignData}
                />);
      }, [campaign, numberOfitemsShown, setScreenState, setCampaignData]);

    return(
        <ChooseCampaignStyles>
            <div className="title">
                <h2>Escolha a campanha</h2>
            </div>

            {itemsToShow.length ? itemsToShow : "Carregando..."}

            <div className="button">
                <Button primary onClick={showMore}>mostrar mais</Button>
            </div>
        </ChooseCampaignStyles>
    )
}