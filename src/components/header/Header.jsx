import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { User } from 'react-feather'

const HeaderStyles = styled.header`
    background-color: var(--blue-one);
    color: white;
    width: 100vw;
    padding: 10px 5vw 0;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;

    div.logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        
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

export default function Header({ setScreenState}) {

    return(
        <HeaderStyles onClick={() => setScreenState('CHOOSE_CAMPAIGN')}>
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