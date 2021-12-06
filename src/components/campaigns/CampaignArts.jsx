import styled from 'styled-components';
import Separator from '../_atomicElements/separators';
import ArtCard from './_cards/ArtCard';

const CampaignArtsStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div.title {
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;

        h2 {
            margin-bottom: -4rem;
        }
    }

    div.card + div.card {
        margin-top: 1.25rem;
    }
`

export default function CampaignArts() {
    return(
        <CampaignArtsStyles>
            <div className="title">
                <h2>Título da campanha</h2>
            </div>
            <Separator>feed instagram</Separator>
            <ArtCard />
            <ArtCard />

            <Separator>stories</Separator>
            <ArtCard />
            <ArtCard />
        </CampaignArtsStyles>
    )
}