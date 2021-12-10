import styled from 'styled-components';
import uniqid from 'uniqid';
import BlockArt from './BlockArts';

const CardsListStyles = styled.div`
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

    @media screen and (min-width: 1024px) {
        width: 40vw;  
    }
`

export default function CardsList({ campaignData, setFormData, setDownloadScreenState }) {
    

    return(
        <CardsListStyles>
            <div className="title">
                <h2>{campaignData.title}</h2>
            </div>

            {campaignData.arts.map(art => {
                return (
                    <BlockArt 
                        key={uniqid()}
                        destination={art.destination} 
                        pieces={art.pieces} 
                        setFormData={setFormData}
                        setDownloadScreenState={setDownloadScreenState}/>
                )
            })}
        </CardsListStyles>
    )
}