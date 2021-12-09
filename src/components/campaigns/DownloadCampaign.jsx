import { useState } from 'react'
import styled from 'styled-components';
import CardsList from './_cards/CardsList';
import ArtViewer from './_finalArts/ArtViewer';

const DownloadCampaignStyles = styled.div`

`

const downloadScreenStates = {
    CARDS_LIST: 'CARDS_LIST',
    ART_VIEWER: 'ART_VIEWER'
}

export default function DownloadCampaign({ campaignData }) {
    const [ downloadScreenState, setDownloadScreenState ] = useState(downloadScreenStates.CARDS_LIST)

    return(
        <DownloadCampaignStyles>
            {downloadScreenState === downloadScreenStates.CARDS_LIST && <CardsList campaignData={campaignData} setDownloadScreenState={setDownloadScreenState} />}
            {downloadScreenState === downloadScreenStates.ART_VIEWER && <ArtViewer campaignData={campaignData} setDownloadScreenState={setDownloadScreenState} />}


        </DownloadCampaignStyles>
    )
}