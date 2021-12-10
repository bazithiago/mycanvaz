import styled from 'styled-components';


const ArtViewerStyles = styled.div`

`

export default function ArtViewer({ formData }) {
    const Component = formData.component  
    
    return(
        <ArtViewerStyles>
            
            <Component />

        </ArtViewerStyles>
    )
}