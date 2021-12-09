import { useEffect } from 'react'
import styled from 'styled-components';
import Button from '../_atomicElements/buttons';
import FullForm from './_forms/FullForm';
import SimpleForm from './_forms/SimpleForm';

const CreateCampaignStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div.title {
        width: 100%;
        text-align: left;
        margin-bottom: 4rem;

        h2 {
            margin-bottom: 1rem;
        }
        p {
            font-size: 1rem;
            color: var(--grey-one);
            line-height: 1.35rem;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;  
    }
`

const ButtonCreate = styled(Button)`
    margin-top: 2rem;
`

export default function CreateCampaign({ setScreenState, campaignData }) {
    
    function handleCreateCampaign() {
        setScreenState('DOWNLOAD_CAMPAIGN')
    }


    useEffect(() => {
        sessionStorage.clear()
    },[])

    return(
        <CreateCampaignStyles>
            <div className="title">
                <h2>{campaignData.title}</h2>
                <p>{campaignData.description}</p>
            </div>
            
            {campaignData.type === 'full' && <FullForm />}
            {campaignData.type === 'simple' && <SimpleForm />}

            <ButtonCreate primary onClick={handleCreateCampaign}>criar campanha {`>>`}</ButtonCreate>
        </CreateCampaignStyles>
    )
}