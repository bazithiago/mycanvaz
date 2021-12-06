import styled from 'styled-components';
import { TextButton } from '../../_atomicElements/buttons';

const ArtCardStyles = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    min-height: 100px;
    max-height: 120px;
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    padding: 16px;

    div.image {
        flex: 1;
        background-color: var(--grey-two);
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

        h3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    div.buttons {
        display: flex;
        justify-content: flex-end;

        a + a {
            margin-left: 3rem;
        }
    }

`

// export default function ArtCard({ title, description, image }) {
//     return(
//         <ArtCardStyles className="card">
//             <div className="image">
//                 <img src={image} alt={title} />
//             </div>
//             <div className="content">
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//             </div>
//         </CampaignCardStyles>
//     )
// }

export default function ArtCard({ title, description, image }) {
    return(
        <ArtCardStyles className="card">
            <div className="image">
                <img src='https://lulacerda.ig.com.br/wp-content/uploads/2016/11/14915488_1173123012733911_861592202832504713_n.jpg' alt={title} />
            </div>
            <div className="content">
                <h3>Nome da arte curto grande ou pequeno tanto faz</h3>

                <div className="buttons">
                    <TextButton textButton>visualizar</TextButton>
                    <TextButton textButton>baixar</TextButton>
                </div>
            </div>
        </ArtCardStyles>
    )
}