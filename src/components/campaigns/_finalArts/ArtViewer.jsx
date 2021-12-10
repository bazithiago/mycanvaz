import styled from 'styled-components';


const ArtViewerStyles = styled.div`

`

export default function ArtViewer({ formData, setDownloadScreenState }) {
    const Component = formData.component  
    
    return(
        <ArtViewerStyles>
            
            <Component setDownloadScreenState={setDownloadScreenState}/>

        </ArtViewerStyles>
    )
}