import styled from 'styled-components';

const SquarePostStyles = styled.div`
    width: 90vw;
    padding: 0 5%;



    @media screen and (min-width: 768px) {
        width: 80vw;
    }

    @media screen and (min-width: 1024px) {
        width: 60vw;
    }

    @media screen and (min-width: 1200px) {
        width: 40vw;
    }


`

export default function SquarePost({ imgBg, children }) {
    return(
        <SquarePostStyles>
            <img src={imgBg} alt="" />
            {children}
        </SquarePostStyles>
    )
}