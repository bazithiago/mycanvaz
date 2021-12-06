import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import ChooseCampaign from '../campaigns/ChooseCampaign';
import CreateCampaign from '../campaigns/CreateCampaign';


const ContentStyles = styled.section`
    padding: 5vh 5vw 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Content() {
    return(
        <ContentStyles>
            <Routes>
                <Route path="/" element={<ChooseCampaign />}> </Route>
                <Route path="/create" element={<CreateCampaign />}> </Route>

            </Routes>
        </ContentStyles>
    )
}