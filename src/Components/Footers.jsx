import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import payment from '../images/payment.png'



const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left:10px;
`;

const Logo = styled.h1`
font-weight:bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left:5px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.a`
  width: 50%;
  margin-bottom: 10px;
  cursor:pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction:flex-end;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footers = () => {
  return (
    <Container>
      <Left>
        <Logo>Afuf Furniture</Logo>
        <Desc>
          There are many variations of Furniture materils with big discount please visit our company.
        </Desc>
        <SocialMediaContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Instagram />
          </SocialIcon>

        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Beds</ListItem>
          <ListItem>Cabinets</ListItem>
          <ListItem>Desks</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Tables</ListItem>
          <ListItem>Clocks</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Piyasa , Addis Ababa
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +25191109181
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> afuffurniture@gmail.com
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  );
};

export default Footers;