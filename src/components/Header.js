import React, {useState} from 'react'
import styled from 'styled-components'

function Header() {
    const [burgerStatus, setBurgerStatus]=useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
            <a href="#">Model-S</a>
            <a href="#">Model-3</a>
            <a href="#">Model-X</a>
            <a href="#">Model-Y</a>

            </Menu>
            <RightMenu>
                <a href="#">SHOP</a>
                <a href="#">Tesla  Account</a>
                {/* <CustomMenu/> */}
                <DownArrow onClick={()=>setBurgerStatus(true)} src="/images/menu_icon.jpg"/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CloseIcon onClick={()=>setBurgerStatus(false)} src="/images/close_icon.png"/>
                </CloseWrapper>
                <li><a href="#">Tesla</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Cyber-Truck</a></li>
                <li><a href="#">Open-AI</a></li>
                <li><a href="#">Star-Link</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Solar Plate</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container =styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:no-wrap;
    }
`
const RightMenu=styled.div`
display:flex;
align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px
    }
`
const DownArrow=styled.img`
    height:20px;
    cursor:pointer;
`
const CloseIcon=styled.img`
    height:20px;
    width:20px;
    cursor:pointer;
`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    botton:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction: column;
    text-align:start;
    transform:${props=>props.show?`translateX(0)`: `translateX(100%)`};
    transition: transform 0.2s;
    li{
        padding:15px;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a{
            font-weight: 600;
        }
    }
`
const CloseWrapper =styled.div`
    display:flex;
    justify-content:flex-end;
`
