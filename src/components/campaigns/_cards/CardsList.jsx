import styled from 'styled-components';
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
    const getItem = item => sessionStorage.getItem(item)
    const eventName = getItem('eventName'); 
    const personName = getItem('personName'); 
    const eventDate = getItem('eventDate');
    const local = getItem('local');
    const partner = getItem('partner');
    const logo1 = getItem('logo1');
    const logo2 = getItem('logo2');
    const title = getItem('title');
    const description = getItem('description');
    const highlight = getItem('highlight');
    const destination = getItem('destination');

    const fullFormData = { eventName, personName, eventDate, local, partner, logo1, logo2 }
    const simpleFormData = { title, description, highlight, destination }
    let formInputs 

    if(campaignData.type === 'full') {
        formInputs = fullFormData
    } else {
        formInputs = simpleFormData
    }

    return(
        <CardsListStyles>
            <div className="title">
                <h2>{campaignData.title}</h2>
            </div>

            {campaignData.arts.map(art => {
                return (
                    <BlockArt 
                        destination={art.destination} 
                        pieces={art.pieces} 
                        formInputs={formInputs} 
                        setFormData={setFormData}
                        setDownloadScreenState={setDownloadScreenState}/>
                )
            })}
        </CardsListStyles>
    )
}