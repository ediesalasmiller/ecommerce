import React from "react";
import styled from "styled-components";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import { Badge, Menu } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  align-items: center;
  display: flex;
`;

// LEFT SIDE OF NAVBAR

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

// CENTER OF NAVBAR

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

//RIGHT SIDE OF NAVBAR
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>EDIE.</Logo>
        </Center>

        <Right>
          <MenuItem>Register </MenuItem>
          <br></br>
          <MenuItem> Log in </MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingBasketOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
