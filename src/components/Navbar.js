import styled from "styled-components";

export default function Navbar() {
    return (
        <Header>
            <Logo>
                <h1>CINEFLEX</h1>
            </Logo>
        </Header>
    )
}

const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.div`
  width: 100%;
  height: 67px;
  text-align: center;
  padding: 15px;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: #C3CFD9;
h1{
    margin: 0 auto;
    font-family: Roboto;
    font-weight: 400;
    font-size: 34px;
    color: #E8833A;
 ;
}
`
