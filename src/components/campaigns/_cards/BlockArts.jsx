import styled from 'styled-components';
import uniqid from 'uniqid';
import Separator from '../../_atomicElements/separators';
import ArtCard from './ArtCard';

const BlockArtStyles = styled.div`

`

export default function BlockArt({ destination, pieces, setFormData, formInputs, setDownloadScreenState }) {
    return(
        <BlockArtStyles>
            <Separator>{destination}</Separator>
            {pieces.map(piece => {
                return(
                    <ArtCard
                        key={uniqid()} 
                        piece={piece}
                        formInputs={formInputs}
                        setFormData={setFormData} 
                        setDownloadScreenState={setDownloadScreenState}/>
                )
            })}
        </BlockArtStyles>
    )
}