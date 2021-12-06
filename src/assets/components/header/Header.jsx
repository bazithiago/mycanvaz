import styled from 'styled-components'
import { ReactComponent as Logo } from '../../icons/logo.svg'
import { User } from 'react-feather'

const HeaderStyles = styled.div`
    background-color: var(--blue-one);
    color: white;
    width: 100vw;
    padding: 10px 5vw 0;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    position: sticky;

    div.logo {
        display: flex;
        align-items: center;
        
        svg {
            width: 15%;
        }
        
        h1 {
            font-size: 1.25rem;
            font-weight: 900;
            padding-bottom: 8px;
        }

        span {
            font-weight: 400;
        }
    }

    div.user {
        cursor: not-allowed;
    }
`

export default function Header() {
    return(
        <HeaderStyles>
            <div className="logo">
                <Logo fill='white'/>
                <h1><span>My</span>Canvaz</h1>
            </div>
            <div className="user">
                <User />
            </div>
        </HeaderStyles>
    )
}