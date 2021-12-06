import styled from 'styled-components';

const Button = styled.button`
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    min-width: 126px;
    padding: 12px 40px;
    font-weight: 900;
    transition: all 0.2s;
    font-size: 0.8rem;

    :hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    }

    :active  {
        transform: translateY(0px);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }
    
    ${ props => props.primary
        && `
            background-color: var(--primary);
            color: white;
            `
    };

    ${ props => props.secondary
        && `
            background-color: var(--grey-one);
            color: white;
            `
    };
`

export default Button;