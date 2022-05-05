import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Desc = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}


`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-c-ontent: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
 
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
     
      <Desc>Join Afuuf Furniture to get update information.</Desc>
      <Desc>You can unsubscribe at any time.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send > Subscribe</Send>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
