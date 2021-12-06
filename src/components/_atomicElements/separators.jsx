import styled from 'styled-components';

const SeparatorStyles = styled.div`
    display: flex;
    align-content: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0.11em;
    color: var(--grey-one);
    font-weight: 400;
    font-size: 0.8rem;
    margin: 4rem 0 2rem 0;

    hr {
        flex: 1;
        margin: 7px 0 0 15px;
        flex: 1;
        border: 0;
        height: 0;
        border-top: 1px solid var(--grey-two);
    }
`

export default function Separator({ children }) {
    return(
        <SeparatorStyles>
            {children}
            <hr />
        </SeparatorStyles>
    )
}