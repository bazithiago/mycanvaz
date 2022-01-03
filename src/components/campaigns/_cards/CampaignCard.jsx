import styled from 'styled-components';

const CampaignCardStyles = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    min-height: 100px;
    max-height: 120px;
    transition: all 0.2s;
    cursor: pointer;
    cursor: ${props => !props.type && 'not-allowed'};
    display: flex;
    padding: 16px;

    :hover {
        transform: translateY(-2px);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    } 

    :active {
        transform: translateY(0px);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    }

    div.image {
        flex: 1;
        margin-right: 16px;
        
        img {
            border-radius: 6px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    div.content {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-size: 0.85rem;
            color: var(--grey-one);
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

`

export default function CampaignCard({ campaignData, setScreenState, setCampaignData }) {
    const { title, image, description, type } = campaignData;
    console.log(type)

    function handleClick() {
        if (type) {
            setCampaignData(campaignData)
            setScreenState('CREATE_CAMPAIGN');
        } else {
            return
        }
    }

    return(
        <CampaignCardStyles className="card" onClick={handleClick} type={type}>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </CampaignCardStyles>
    )
}