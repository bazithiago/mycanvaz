import styled from 'styled-components';
import ChooseCampaign from '../campaigns/ChooseCampaign'

const ContentStyles = styled.section`
    padding: 5vh 5vw 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Content() {
    return(
        <ContentStyles>
            <ChooseCampaign />
        </ContentStyles>
    )
}