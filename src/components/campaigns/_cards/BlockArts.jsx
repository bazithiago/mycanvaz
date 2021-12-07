import styled from 'styled-components';
import Separator from '../../_atomicElements/separators';
import ArtCard from './ArtCard';

const BlockArtStyles = styled.div`

`

export default function BlockArt({ destination, pieces }) {
    return(
        <BlockArtStyles>
            <Separator>{destination}</Separator>
            {pieces.map(piece => {
                return(
                    <ArtCard piece={piece}/>
                )
            })}
        </BlockArtStyles>
    )
}