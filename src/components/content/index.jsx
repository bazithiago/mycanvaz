import { useState } from 'react';
import styled from 'styled-components';
import ChooseCampaign from '../campaigns/ChooseCampaign';
import CreateCampaign from '../campaigns/CreateCampaign';
import DownloadCampaign from '../campaigns/DownloadCampaign';


const ContentStyles = styled.section`
    padding: 5vh 5vw 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const screenStates = {
    CHOOSE_CAMPAIGN: 'CHOOSE_CAMPAIGN',
    CREATE_CAMPAIGN: 'CREATE_CAMPAIGN',
    DOWNLOAD_CAMPAIGN: 'DOWNLOAD_CAMPAIGN',
  }

export default function Content({ screenState, setScreenState }) {
    const [ campaignData, setCampaignData ] = useState({})
    
    return(
        <ContentStyles>
            {screenState === screenStates.CHOOSE_CAMPAIGN && <ChooseCampaign setScreenState={setScreenState} setCampaignData={setCampaignData}/>}
            {screenState === screenStates.CREATE_CAMPAIGN && <CreateCampaign setScreenState={setScreenState} campaignData={campaignData} />}
            {screenState === screenStates.DOWNLOAD_CAMPAIGN && <DownloadCampaign setScreenState={setScreenState} campaignData={campaignData}/>}
            
        </ContentStyles>
    )
}