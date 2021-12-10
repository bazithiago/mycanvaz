import styled from 'styled-components';
import { campaigns } from '../../../server/campaigns';

const BF4Styles = styled.div`

`

export default function BF4() {
    const imgBG = campaigns[0].arts[1].pieces[0].img
    const getItem = item => sessionStorage.getItem(item)
    const eventName = getItem('eventName'); 
    const personName = getItem('personName'); 
    const eventDate = getItem('eventDate');
    const local = getItem('local');
    const partner = getItem('partner');
    const logo1 = getItem('logo1');
    const logo2 = getItem('logo2');
    
    return(
        <BF4Styles>
            <img src={imgBG} alt=""/>
            <p>{eventName}</p>
            <p>{personName}</p>
            <p>{eventDate}</p>
            <p>{local}</p>
            <p>{partner}</p>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
        </BF4Styles>
    )
}