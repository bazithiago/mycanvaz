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
    const [ formData, setFormData ] = useState([])
    
    return(
        <DownloadCampaignStyles>
            {downloadScreenState === downloadScreenStates.CARDS_LIST && 
                <CardsList
                    setFormData={setFormData}
                    campaignData={campaignData} 
                    setDownloadScreenState={setDownloadScreenState} />}
            
            {downloadScreenState === downloadScreenStates.ART_VIEWER && 
                <ArtViewer 
                    formData={formData}
                    campaignData={campaignData} 
                    setDownloadScreenState={setDownloadScreenState} />}


        </DownloadCampaignStyles>
    )
}